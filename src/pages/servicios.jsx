import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

// ? componentes
import { Layout } from '../components/layout'
import { Services } from '../components/content'

const Servicios = () => {
  const query = useStaticQuery(graphql`
    query {
      strapiServicios {
        title
        subtitle
        content
        imageServices1 {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        imageServices2 {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)
  const {
    title,
    subtitle,
    content,
    imageServices1,
    imageServices2
  } = query.strapiServicios

  return (
    <Layout
      title="Página web💻 Aplicaciones móviles 📱 Branding y Marketing Digital 📢 con Wilklab"
      description="Todos los servicios que tu empresa o proyecto necesita para crecer en el ámbito digital ✅. Siempre a la vanguardia."
    >
      <section className="container">
        <div className="flex flex-wrap md:my-20 lg:flex-no-wrap">
          <div
            data-aos="fade-right"
            className="order-2 w-full lg:w-2/5 lg:order-1 lg:bg-custom-primary"
          >
            <div className="h-full lg:pt-12 lg:pb-6 lg:pl-12 lg:pr-0">
              <Img
                className="shadow-2xl"
                fluid={imageServices1.childImageSharp.fluid}
              />
            </div>
          </div>
          <div
            data-aos="fade-left"
            className="order-1 w-full lg:w-3/5 lg:order-2"
          >
            <div className="flex pt-16 pb-12 pl-10 bg-gray-100 shadow-2xl lg:mt-12">
              <div className="w-full pr-10 md:w-3/4">
                <h1 className="inline text-4xl font-bold border-b-4 border-gray-800">
                  {title}
                </h1>
                <h2 className="text-2xl font-bold">{subtitle}</h2>
                <p className="text-xl">{content}</p>
              </div>
              <div className="hidden pr-6 md:block md:w-1/4 bg-custom-primary">
                <Img
                  className="w-11/12 h-full"
                  fluid={imageServices2.childImageSharp.fluid}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Services />
    </Layout>
  )
}
export default Servicios
