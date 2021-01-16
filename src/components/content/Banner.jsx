import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

// ? images
import { Btn } from '../common'

const Banner = () => {
  const query = useStaticQuery(graphql`
    query {
      fileName: file(relativePath: { eq: "images/pc.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const imageBanner = query.fileName.childImageSharp.fluid

  return (
    <section
      data-aos="zoom-in-down"
      className="flex justify-end xl:justify-center"
    >
      <BackgroundImage
        style={{ backgroundSize: 'contain', backgroundPosition: 'right' }}
        fluid={imageBanner}
      >
        <div className="transform md:w-1/2 lg:my-20 lg:ml-10 lg:-translate-x-10">
          <div className="p-4 text-gray-100 bg-gray-800 bg-opacity-75 border-4 rounded-lg lg:mr-10 lg:bg-transparent lg:p-8 border-custom-primary">
            <h2 className="mb-8 text-2xl">
              Aquellas pequeñas ideas se vuelven
              <br />
              <span className="font-bold text-custom-primary">
                Grandes Proyectos
              </span>
            </h2>
            <p className="mb-8 text-lg">
              Vuelve tu idea una gran empresa con los servicios y estrategias de
              marketing correctas.
            </p>
            <p className="mb-8 text-lg">
              Páginas web, Mercadeo digital, Redes sociales, Aplicaciones, todo
              el trabajo llevado por una agencia con experiencia en crear
              grandes proyectos.
            </p>
            <div className="flex justify-end w-full">
              <Btn btnClass="mt-4 btn-blue" direction="/servicios">
                Saber Más
              </Btn>
            </div>
          </div>
        </div>
      </BackgroundImage>
    </section>
  )
}

export default Banner
