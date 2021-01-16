import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Markdown from 'react-markdown'
import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'
import { Btn } from '../common'

const TextoImagen = styled.div`
  background-image: linear-gradient(
    to top,
    rgba(34, 49, 63, 0.4),
    rgba(34, 49, 63, 0.4)
  );
  height: 100%;
  padding: 3rem;
`
const Services = () => {
  const query = useStaticQuery(graphql`
    query {
      allStrapiFunciones {
        nodes {
          title
          content
          list
          bg1 {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          bg2 {
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
  const funciones = query.allStrapiFunciones.nodes
  return (
    <section className="container w-100">
      {funciones.map((funcion, index) => (
        <div
          className="flex flex-wrap justify-center my-10 sm:flex-no-wrap"
          key={index}
          data-aos="fade-up"
        >
          <BackgroundImage
            tag="div"
            fluid={funcion.bg1.childImageSharp.fluid}
            data-aos-delay={`${index}00`}
            className={
              index % 2 === 0
                ? 'w-full sm:w-7/12 md:w-7/10 xl:w-4/12 sm:mx-2 xl:mx-4'
                : 'w-full sm:w-7/12 md:w-7/10 xl:w-4/12 sm:mx-2 xl:mx-4 sm:order-last'
            }
          >
            <TextoImagen>
              <h2 className="inline pb-2 text-xl font-bold text-gray-100 border-b-4 border-white">
                {funcion.title}
              </h2>
              <p className="mt-6 text-lg font-semibold text-gray-100">
                {funcion.content}
              </p>
              <div className="flex justify-end">
                <Btn btnClass="btn-white" direction="/contacto">
                  Contactar
                </Btn>
              </div>
            </TextoImagen>
          </BackgroundImage>
          {index % 2 !== 0 ? (
            <BackgroundImage
              className="hidden w-full p-10 mx-4 xl:block sm:w-5/12 xl:w-3/12"
              tag="div"
              fluid={funcion.bg2.childImageSharp.fluid}
            />
          ) : (
            <div className="w-full p-4 bg-gray-100 sm:mx-2 xl:mx-4 sm:w-4/12 md:w-2/10 xl:w-3/12 xl:p-10">
              <div className="flex items-center h-full text-xl font-semibold sm:text-lg md:text-xl">
                {index % 2 === 0 && (
                  <Markdown source={funcion.list} escapeHtml={false} />
                )}
              </div>
            </div>
          )}
          {index % 2 === 0 ? (
            <BackgroundImage
              className="hidden p-10 mx-4 bg-gray-700 xl:block xl:w-4/12"
              tag="div"
              fluid={funcion.bg2.childImageSharp.fluid}
            />
          ) : (
            <div className="w-full p-4 bg-gray-700 sm:mx-2 xl:mx-4 sm:w-4/12 md:w-2/10 xl:w-4/12 xl:p-10">
              <div className="flex items-center h-full text-xl text-white sm:text-lg md:text-xl">
                <Markdown source={funcion.list} escapeHtml={false} />
              </div>
            </div>
          )}
        </div>
      ))}
    </section>
  )
}

export default Services
