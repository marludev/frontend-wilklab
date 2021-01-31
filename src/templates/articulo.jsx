import React, { useState, useEffect } from 'react'
import { Layout } from '../components/layout'
import { CardMember } from '../components/content'
import { graphql, Link } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'
import Markdown from 'react-markdown'
import removeMarkdown from '../helpers/removeMarkdown'
import { Disqus, CommentCount } from 'gatsby-plugin-disqus'
import { IconShare } from '../components/icons'

const ImageBackground = styled(BackgroundImage)`
  min-height: 400px;
  height: 70vh;
`
const ContenidoArticulo = styled.div`
  h2 {
    font-size: 2.4rem;
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
    font-weight: 600;
  }
  h3 {
    font-size: 2rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    font-weight: 600;
  }
  p {
    font-size: 1.125rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    line-height: 1.75;
    font-weight: 300;
  }
  img {
    margin-left: auto;
    margin-right: auto;
    width: 80%;
    max-height: 400px;
    object-fit: cover;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
  blockquote {
    margin: 40px 0px;
    border-top-width: 2px;
    border-color: var(--color-primary);
    border-bottom-width: 2px;
    padding: 20px 40px 20px 40px;
    color: var(--color-primary);
    text-align: center;
  }
`

export const query = graphql`
  query($slug: String!) {
    strapiArticulo(slug: { eq: $slug }) {
      id
      title
      content
      slug
      tags {
        tag
      }
      miembro {
        name
        social
        position
        imageMember {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      updatedAt(fromNow: true, locale: "es")
      imageArticle {
        publicURL
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

const Articulo = ({ data }) => {
  const {
    title,
    content,
    imageArticle,
    miembro,
    slug,
    id,
    tags,
  } = data.strapiArticulo
  const [share, setShare] = useState(false)

  useEffect(() => {
    if (
      navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/Windows Phone/i)
    ) {
      setShare(window.navigator.share)
    }
  }, [])

  const webShareAPI = () => {
    if (window.navigator.share) {
      window.navigator
        .share({
          title: title,
          text: 'Mira lo nuevo que ha publicado Wilklab!',
          url: window.location.href,
        })
        .then(() => console.log('Thanks for sharing!'))
        .catch(error => console.log('Error sharing: ', error))
    }
  }

  const disqusConfig = {
    url: `https://wilklab.com/blog/${slug}`,
    identifier: id,
    title: title,
  }

  return (
    <Layout
      title={title}
      description={removeMarkdown(content.substr(0, 256))}
      image={`https://wilklab.com${imageArticle.publicURL}`}
    >
      {share && (
        <div className="fixed bottom-0 right-0 z-50 flex mb-16 mr-6">
          <button
            className="w-12 h-12 mx-auto my-auto text-gray-900 rounded-full shadow-md outline-none focus:outline-none bg-custom-secondary md:hidden"
            onClick={() => webShareAPI()}
          >
            <IconShare className="w-6 h-6 mx-auto" />
          </button>
        </div>
      )}
      <section>
        <article itemScope itemType="http://schema.org/BlogPosting">
          <ImageBackground
            tag="div"
            fluid={imageArticle.childImageSharp.fluid}
            className="relative transform -translate-y-8 sm:-translate-y-32"
          >
            <meta
              itemProp="image"
              content={`https://wilklab.com/${imageArticle.childImageSharp.fluid.src}`}
            />
            <div className="flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50" />
          </ImageBackground>

          <div className="container transform md:-translate-y-24">
            <div className="flex flex-col-reverse text-gray-100 md:flex-row">
              <div className="w-full transform md:-translate-y-40 md:w-4/12">
                <meta itemProp="author" content={miembro.name} />
                <CardMember
                  image={miembro.imageMember.childImageSharp.fluid}
                  position={miembro.position}
                  name={miembro.name}
                  color="border-dark"
                />
                <meta itemProp="publisherName " content={miembro.name} />
                <div className="flex justify-center mb-4">
                  <span className="inline-block w-1/2 h-1 rounded bg-custom-primary" />
                </div>
                <div className="flex flex-wrap justify-center px-10">
                  {tags.map(tag => (
                    <Link
                      className="p-2 m-2 border-2 rounded-lg border-custom-primary text-custom-primary"
                      key={tag.tag}
                      to={`/tags/${tag.tag}`}
                    >
                      #{tag.tag}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="w-full px-4 md:px-0 md:w-8/12">
                <div className="flex flex-wrap">
                  <h1
                    itemProp="headline"
                    className="hidden w-full pb-4 text-4xl font-bold md:block"
                  >
                    {title}
                  </h1>
                </div>
                <ContenidoArticulo>
                  <Markdown source={content} />
                </ContenidoArticulo>
              </div>
            </div>

            <div className="px-4 my-20 md:px-0">
              <CommentCount config={disqusConfig} placeholder={'...'} />
              <Disqus config={disqusConfig} />
            </div>
          </div>
        </article>
      </section>
    </Layout>
  )
}

export default Articulo
