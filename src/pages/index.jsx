import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
// ? icons
import { IconCheck } from '../components/icons'
// ? componentes
import {
  Comments,
  Slider,
  Prices,
  Banner,
  CardMember,
} from '../components/content'
import { Layout } from '../components/layout'
import { Btn } from '../components/common'

// ? style
import styled from 'styled-components'

const ContainerOne = styled.div`
  min-height: 39rem;
  min-width: 39rem;
  @media (min-width: 768px) {
    width: 800px;
    height: 800px;
  }
  @media (min-width: 1280px) {
    width: 45vw;
    height: 45vw;
    min-height: 800px;
    min-width: 800px;
  }
`

const IndexPage = () => {
  const query = useStaticQuery(graphql`
    query {
      fileName: file(relativePath: { eq: "images/bg-header.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      allStrapiMiembro {
        nodes {
          twitter
          instagram
          linkedin
          name
          position
          social
          description
          imageMember {
            childImageSharp {
              fluid {
                src
              }
            }
          }
        }
      }
    }
  `)

  const imageBgHeader = query.fileName.childImageSharp.fluid
  const members = query.allStrapiMiembro.nodes

  return (
    <Layout
      title="Creación de grandes empresas con Wilklab 🐺"
      description="⬆️ Desarrollo y diseño de páginas web, aplicaciones móviles, branding y marketing digital. Todo lo que tu empresa necesita para crecer exponencialmente. ⬆️"
    >
      <BackgroundImage
        tag="section"
        fluid={imageBgHeader}
        style={{ backgroundPosition: '', maxHeight: 800 }}
        className="relative mb-8 transform -translate-y-8 md:h-screen md:-translate-y-32"
      >
        <div className="absolute bottom-0 w-full h-screen via-transparent bg-gradient-to-t from-dark to-transparent" />

        <div data-aos="fade-right" className="z-20">
          <ContainerOne className="relative top-0 left-0 z-20 py-40 transform md:shadow-2xl md:-translate-y-32 md:-translate-x-56 lg:-translate-x-48 md:rotate-65 md:bg-dark md:py-0">
            <div className="flex items-center h-full py-4 text-gray-100 transform md:-rotate-65 md:justify-center">
              <div className="px-4 transform md:translate-x-24 md:translate-y-16">
                <p
                  data-aos="zoom-in"
                  data-aos-delay="150"
                  className="mb-4 text-5xl font-bold leading-none select-none md:text-6xl lg:mt-24"
                >
                  WILKLAB
                </p>
                <p
                  data-aos="zoom-in"
                  data-aos-delay="200"
                  className="my-4 text-5xl leading-none select-none tracking-large md:text-6xl"
                >
                  AGENCY
                </p>
                <h1
                  data-aos="zoom-in"
                  data-aos-delay="250"
                  className="my-4 text-xl select-none"
                >
                  Convertimos ideas en{' '}
                  <span className="text-custom-primary">
                    Proyectos Exitosos.
                  </span>
                </h1>
                <Btn
                  effect="zoom-in"
                  delay="300"
                  btnClass="lg:my-4 btn-blue"
                  direction="/contacto"
                >
                  Contactar
                </Btn>
              </div>
            </div>
          </ContainerOne>
        </div>
      </BackgroundImage>

      <div className="transform -translate-y-20">
        <section className="container mb-20">
          <div className="text-gray-100">
            <div
              data-aos="fade-left"
              className="flex justify-center mb-12 lg:mb-0"
            >
              <h2 className="inline-block text-3xl font-bold tracking-widest border-b-4 md:text-4xl lg:ml-40 border-custom-primary">
                Ruta de creación
              </h2>
            </div>
            <div
              data-aos="fade-right"
              className="relative flex items-center w-full my-6 lg:w-1/2 lg:mr-24 lg:ml-auto lg:my-1"
            >
              <IconCheck className="order-2 w-24 h-24 fill-current text-custom-primary lg:absolute lg:-ml-20 lg:mt-10" />
              <div className="w-full mr-4 sm:order-1">
                <h3 className="pl-4 text-2xl font-bold lg:pt-10 lg:border-l-4 border-custom-primary">
                  Estudio del mercado
                </h3>
                <p className="p-4 text-lg border-4 border-l-0 md:p-10 border-custom-primary">
                  Sabemos que los datos respaldan la estabilidad de un negocio.
                  Estudiamos tu proyecto y te explicamos la función en el
                  sector.
                </p>
              </div>
            </div>
            <div
              data-aos="fade-left"
              className="relative flex items-center w-full my-6 lg:w-1/2 lg:ml-24 lg:-mt-10 lg:my-1"
            >
              <IconCheck className="order-1 w-24 h-24 fill-current text-custom-primary lg:absolute lg:-ml-20 lg:mt-6" />

              <div className="order-2 w-full ml-4">
                <h3 className="pl-2 text-2xl font-bold">
                  Creación de la identidad digital
                </h3>
                <p className="p-4 text-lg border-4 border-r-0 md:p-10 border-custom-primary">
                  Todo proyecto necesita una identidad digital. Creamos los
                  manuales, logos, directrices y especificaciones visuales de tu
                  marca para cualquier tipo uso que necesites y quieras darle.
                </p>
              </div>
            </div>
            <div
              data-aos="fade-right"
              className="relative flex items-center w-full my-6 lg:w-1/2 lg:mr-24 lg:ml-auto lg:-mt-10 lg:my-1"
            >
              <IconCheck className="order-2 w-24 h-24 fill-current text-custom-primary lg:absolute lg:-ml-20 lg:mt-6" />

              <div className="order-1 w-full mr-4">
                <h3 className="pl-4 text-2xl font-bold">
                  Aplicacion web / Movil
                </h3>
                <p className="p-4 text-lg border-4 border-l-0 md:p-10 border-custom-primary">
                  Ponemos tu proyecto en marcha con aplicaciones web o
                  aplicaciones moviles funcionales, de acuerdo al estudio de
                  mercado hacemos que tu proyecto resalte entre los demás.
                </p>
              </div>
            </div>
            <div
              data-aos="fade-left"
              className="relative flex items-center w-full my-6 lg:w-1/2 lg:ml-24 lg:-mt-10 lg:my-1"
            >
              <IconCheck className="order-1 w-24 h-24 fill-current text-custom-primary lg:absolute lg:-ml-20 lg:mt-10" />
              <div className="order-2 w-full ml-4">
                <h3 className="pl-2 text-2xl font-bold">Publicidad</h3>
                <p className="p-4 text-lg border-4 border-r-0 md:p-10 border-custom-primary">
                  Tu negocio necesita darse a conocer, por eso nosotros vamos un
                  poco más rapido creando campañas de publicidad digital con una
                  planificación especifica. Así hacemos que tu proyecto obtenga
                  fama antes de lo esperado.
                </p>
              </div>
            </div>
          </div>
        </section>
        <Comments />

        <Banner />

        <Slider
          title="Nuestros lobos"
          subTitle="Trabajamos en equipo, como una manada."
          position="left"
        >
          {members.map(member => (
            <CardMember
              key={member.name}
              image={member.imageMember.childImageSharp.fluid}
              position={member.position}
              name={member.name}
              twitter={member.twitter}
              instagram={member.instagram}
              linkedin={member.linkedin}
              color="border-custom-primary"
            />
          ))}
        </Slider>

        <Prices />
      </div>
    </Layout>
  )
}

export default IndexPage
