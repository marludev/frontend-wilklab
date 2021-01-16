import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const Objetives = () => {
  const query = useStaticQuery(graphql`
    query {
      allStrapiObjetivo {
        nodes {
          title
          content
          imageObjetives {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  const objetivos = query.allStrapiObjetivo.nodes

  return (
    <>
      <section className="container">
        <div className="text-gray-100">
          {objetivos.map((objetivo, index) => (
            <div
              data-aos={index % 2 ? 'fade-right' : 'fade-left'}
              className={`flex my-10 flex-wrap ${
                index % 2 && 'flex-row-reverse'
              }`}
              key={index}
            >
              <div className="w-full p-6 sm:p-0 md:w-5/12 lg:w-4/12">
                <Img fluid={objetivo.imageObjetives.childImageSharp.fluid} />
              </div>
              <div className="w-full p-6 md:w-7/12 lg:w-8/12">
                <h3
                  className={`text-3xl font-bold ${index % 2 && 'text-right'}`}
                >
                  {objetivo.title}
                </h3>
                <span
                  className={`inline-block h-1 w-20 rounded bg-custom-primary ${
                    index % 2 ? 'float-right' : 'float-left'
                  }`}
                />
                <p className={`mt-8 text-lg ${index % 2 && 'text-right'}`}>
                  {objetivo.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Objetives
