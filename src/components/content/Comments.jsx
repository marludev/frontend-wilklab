import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'

const Comments = () => {
  const query = useStaticQuery(graphql`
    query {
      allStrapiCliente(limit: 3, sort: { fields: [date], order: [DESC] }) {
        nodes {
          name
          review
          nameProject
          date
          proyecto {
            slug
          }
          imageClient {
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

  const clientes = query.allStrapiCliente.nodes
  return (
    <section className="container mt-20 mb-40">
      <div className="flex justify-end mb-24 ml-10 text-gray-100 md:ml-0">
        <div className="flex flex-wrap justify-end pr-10 md:p-10 md:w-4/5 lg:w-2/5 lg:p-0">
          <h3 className="w-full text-3xl font-bold text-right text-gray-100">
            Clientes
          </h3>
          <span className="inline-block w-20 h-1 rounded bg-custom-primary" />
          <p className="mt-8 text-lg text-right">
            Empresarios y emprendedores que han confiado en nuestros lobos para
            poder llevar su proyecto.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-around text-gray-500">
        {clientes.map((cliente, index) => (
          <Comment key={index} cliente={cliente} />
        ))}
      </div>
    </section>
  )
}
export default Comments

const Comment = ({ cliente }) => {
  const { name, review, nameProject, imageClient, proyecto } = cliente

  return (
    <>
      <div
        data-aos="zoom-in-up"
        className="px-8 py-4 mt-24 rounded-lg shadow-lg md:w-5/12 lg:w-3/12 bg-custom-primary"
      >
        <Link to={`/portafolio/${proyecto ? proyecto.slug : ''}`}>
          <div className="flex justify-center -mt-24 md:justify-end">
            <Img
              className="object-cover w-32 h-32 border-2 border-gray-900 rounded-full shadow-2xl"
              fluid={imageClient.childImageSharp.fluid}
            />
          </div>
          <div className="flex flex-col h-full pb-8">
            <h2 className="mt-2 text-2xl font-semibold text-gray-800 md:mt-0 md:text-3xl">
              {name}
            </h2>

            <p className="mt-2 text-gray-900">{review}</p>

            <div className="flex justify-end mt-auto">
              <p href="#" className="text-xl font-medium text-gray-600">
                {nameProject}
              </p>
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}
