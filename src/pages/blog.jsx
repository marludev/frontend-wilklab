import React, { Fragment } from 'react'
import { Layout } from '../components/layout'
import { CardArtitle } from '../components/content'
import { graphql, useStaticQuery } from 'gatsby'

const Blog = () => {
  const query = useStaticQuery(graphql`
    query {
      allStrapiArticulo(sort: { fields: [createdAt], order: [DESC] }) {
        nodes {
          slug
          id
          title
          content
          tags {
            tag
          }
          updatedAt(formatString: "MMM DD YYYY", locale: "es")
          imageArticle {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          miembro {
            name
            imageMember {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout
      title="Conocimientos a los usuarios"
      description="Blog para emprendedores y desarrolladores que desean conocer como crecer y mejorar en el mundo digital"
    >
      <section className="text-gray-500 body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-wrap -m-4">
            {query.allStrapiArticulo.nodes.map(articulo => (
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

export default Blog
