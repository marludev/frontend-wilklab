import React, { Fragment } from 'react'
import { Layout } from '../components/layout'
import { CardArtitle } from '../components/content'
import { graphql } from 'gatsby'

export const query = graphql`
  query($tag: String!) {
    allStrapiArticulo(filter: { tags: { elemMatch: { tag: { eq: $tag } } } }) {
      nodes {
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
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const Tags = ({ data }) => {
  const articulos = data.allStrapiArticulo.nodes

  return (
    <Layout
      title="Conocimientos a los usuarios"
      description="Blog para emprendedores y desarrolladores que desean conocer como crecer y mejorar en el mundo digital"
    >
      <section className="text-gray-500 body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-wrap -m-4">
            {articulos.map((articulo) => (
              <Fragment key={articulo.id}>
                <CardArtitle
                  slug={articulo.slug}
                  image={articulo.imageArticle.childImageSharp.fluid}
                  title={articulo.title}
                  content={articulo.content}
                  date={articulo.updatedAt}
                  imageMember={
                    articulo.miembro.imageMember.childImageSharp.fluid
                  }
                  nameMember={articulo.miembro.name}
                  tags={articulo.tags}
                />
              </Fragment>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Tags
