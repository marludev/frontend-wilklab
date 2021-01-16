import React from 'react'
import { graphql } from 'gatsby'
import { Layout } from '../components/layout'
// import { Slider } from '../components/content'
import Img from 'gatsby-image'
import Markdown from 'react-markdown'
import styled from 'styled-components'
import removeMarkdown from '../helpers/removeMarkdown'

const ContenidoProyecto = styled.div`
  p {
    font-size: 1.125rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    line-height: 1.75;
    font-weight: 300;
  }
`

export const query = graphql`
  query($slug: String!) {
    strapiProyecto(slug: { eq: $slug }) {
      slug
      urlProject
      technologies
      summaryProject
      imageProject {
        url
      }
      miembros {
        name
        imageMember {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      cliente {
        name
        nameProject
        date
        review
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
`

const proyecto = ({ data }) => {
  const {
    urlProject,
    technologies,
    summaryProject,
    imageProject,
    miembros,
    cliente: { name, nameProject, date, review, imageClient },
  } = data.strapiProyecto

  return (
    <Layout
      showSubscription={false}
      title={`Proyecto | ${nameProject}`}
      description={removeMarkdown(summaryProject.substr(0, 256))}
      image={imageProject.url}
    >
      <div className="container my-20">
        <section className="flex flex-wrap">
          <div className="self-center w-full p-4 mb-6 border-2 rounded-lg md:rounded-r-none md:mb-0 md:p-10 md:rounded-l-lg md:border-r-0 md:w-2/5 border-custom-primary">
            <h3 className="text-2xl text-gray-100">{nameProject}</h3>
          </div>
          <img src={imageProject[2].url} className="w-full md:w-3/5" />
        </section>

        <section className="flex flex-col-reverse flex-wrap px-4 mt-10 lg:flex-row md:px-0">
          <div className="flex flex-wrap justify-center w-full lg:block lg:w-1/2">
            <div className="w-full sm:w-1/2 ">
              <p className="my-4 text-lg text-custom-primary">
                Cliente: <span className="text-gray-100">{name}</span>
              </p>
              <p className="my-4 text-lg text-custom-primary">
                Sitio web:{' '}
                <a
                  href={urlProject}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  sitio web de {name}
                </a>
              </p>
              <p className="my-4 text-lg text-custom-primary">
                Fecha de finalizacion:{' '}
                <span className="text-gray-100"> {date} </span>
              </p>
              <p className="my-4 text-lg text-custom-primary">
                Tecnologias:{' '}
                <span className="text-gray-100">{technologies}</span>
              </p>
            </div>
            <div className="flex w-full mt-6 sm:justify-center md:justify-start lg:mt-20 sm:w-1/2">
              <div>
                <h3 className="text-xl font-bold text-custom-primary">
                  Equipo de Lobos:
                </h3>
                {miembros.map(miembro => (
                  <Img
                    key={miembro.name}
                    fluid={miembro.imageMember.childImageSharp.fluid}
                    className="inline-block p-6 m-2 ml-0 rounded-full"
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="w-full text-white lg:w-1/2 lg:text-right">
            <ContenidoProyecto>
              <Markdown source={summaryProject} />
            </ContenidoProyecto>
          </div>
        </section>

        <section className="mt-10">
          <div className="flex justify-end mb-24 ml-10 text-gray-100 md:ml-0">
            <div className="flex flex-wrap justify-end pr-10 md:p-10 md:w-4/5 lg:w-2/5 lg:p-0">
              <h3 className="w-full text-3xl font-bold text-right text-gray-100">
                Comentarios del Cliente
              </h3>
              <span className="inline-block w-20 h-1 rounded bg-custom-primary" />
            </div>
          </div>

          <div className="flex flex-wrap p-10 rounded-lg bg-custom-primary">
            <div className="flex items-center justify-center w-full md:w-4/12 lg:w-2/12">
              <Img
                fluid={imageClient.childImageSharp.fluid}
                className="inline-block w-32 h-32 rounded-full"
              />
            </div>
            <div className="w-full md:w-8/12 lg:w-10/12">
              <h4 className="text-2xl text-gray-900">{name}</h4>
              <p className="leading-7 text-gray-900">{review}</p>
            </div>
          </div>
        </section>

        {/* <Slider title="otros proyectos">
          <p>hola</p>
        </Slider> */}
      </div>
    </Layout>
  )
}

export default proyecto
