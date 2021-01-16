import React, { Fragment } from 'react'
import { Layout } from '../components/layout'
import { Btn } from '../components/common'
import { graphql, useStaticQuery, Link } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'
import { Tab as TabBasic, Tabs, TabList, TabPanel } from 'react-tabs'

const Tab = styled(TabBasic)`
  position: relative;
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 5%;
    background: #646464;
    z-index: 20;
    transition: 0.5s ease-in-out;
    width: 100%;
  }

  &:hover::before {
    width: 100%;
    background: var(--color-primary);
  }
  &.active::before {
    width: 100%;
    background: var(--color-primary);
  }
`

const Portafolio = () => {
  const query = useStaticQuery(graphql`
    query {
      fileNameOne: file(relativePath: { eq: "images/bg-header.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      allStrapiCategoria {
        nodes {
          category
        }
      }
      allStrapiProyecto {
        nodes {
          slug
          cliente {
            nameProject
          }
          imageProject {
            url
          }
          categoria {
            category
          }
        }
      }
    }
  `)
  const imageBgHeader = query.fileNameOne.childImageSharp.fluid
  const projects = query.allStrapiProyecto.nodes
  const categorys = query.allStrapiCategoria.nodes

  return (
    <Layout
      title="Portafolio | Pasión y trabajo 🐺"
      description="Corazón, trabajo y esmero. Eso es lo que define nuestro portafolio y compromiso con el cliente.
"
      showSubscription={false}
    >
      <BackgroundImage
        tag="div"
        fluid={imageBgHeader}
        style={{ backgroundPosition: '', height: '50vh', minHeight: '500px' }}
        className="relative mb-8 transform -translate-y-8 sm:-translate-y-32"
      >
        <div className="absolute bottom-0 z-10 w-full h-full via-transparent bg-gradient-to-t from-dark to-transparent" />
      </BackgroundImage>

      <div className="container relative z-20 flex flex-wrap transform -translate-y-64">
        <div className="flex flex-wrap justify-center w-full p-4 bg-opacity-75 md:py-10 bg-dark">
          <h1 className="w-full text-2xl font-bold tracking-wider text-center text-gray-300">
            Nuestro portafolio mas reciente
          </h1>
          <p className="max-w-2xl mt-2 font-bold text-center text-custom-quaternary">
            Te mostramos los trabajos que realizamos con corazón y
            profesionalidad a los clientes que toman la decisión de confiar en
            nuestras capacidades.
          </p>

          <div className="flex justify-center w-full mt-10">
            <Tabs className="w-full">
              <TabList className="flex flex-row justify-around text-custom-quaternary">
                <Tab
                  selectedClassName="active text-custom-primary"
                  className="w-full pb-10 font-medium text-center transition-colors duration-500 ease-in-out cursor-pointer md:text-lg hover:text-custom-primary"
                >
                  ALL
                </Tab>
                {categorys.map(category => (
                  <Tab
                    key={category.category}
                    selectedClassName="active text-custom-primary"
                    className="w-full pb-10 font-medium text-center transition-colors duration-500 ease-in-out cursor-pointer md:text-lg hover:text-custom-primary"
                  >
                    {category.category}
                  </Tab>
                ))}
              </TabList>
              <TabPanel className="sm:flex">
                {projects.map(project => (
                  <Link
                    className="block w-full h-64 p-4 md:w-1/2 lg:w-1/3"
                    key={project.slug}
                    to={`/portafolio/${project.slug}`}
                  >
                    <div
                      className="w-full h-full group"
                      style={{
                        background: `url(${project.imageProject[0].url})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                      }}
                    >
                      <div
                        className="w-full h-full group-hover:hidden"
                        style={{
                          background: `url(${project.imageProject[1].url})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat',
                        }}
                      ></div>
                    </div>
                  </Link>
                ))}
              </TabPanel>
              {categorys.map(category => (
                <TabPanel className="sm:flex" key={category.category}>
                  {projects.map(project => (
                    <Fragment key={project.slug}>
                      {project.categoria.category === category.category && (
                        <Link
                          className="block w-full h-64 p-4 md:w-1/2 lg:w-1/3"
                          to={`/portafolio/${project.slug}`}
                        >
                          <div
                            className="w-full h-full group"
                            style={{
                              background: `url(${project.imageProject[0].url})`,
                              backgroundSize: 'cover',
                              backgroundPosition: 'center',
                              backgroundRepeat: 'no-repeat',
                            }}
                          >
                            <div
                              className="w-full h-full group-hover:hidden"
                              style={{
                                background: `url(${project.imageProject[1].url})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                              }}
                            ></div>
                          </div>
                        </Link>
                      )}
                    </Fragment>
                  ))}
                </TabPanel>
              ))}
            </Tabs>
          </div>
        </div>

        <div className="w-full p-10 bg-custom-primary">
          <div className="container flex flex-wrap">
            <div className="md:w-3/5">
              <h3 className="my-2 text-2xl">
                Aquellas pequeñas ideas se vuelven{' '}
                <span className="font-bold">Grandes Proyectos</span>
              </h3>
              <p className="my-2">
                Te ayudamos con la creación, gestión y puesta en marcha de tu
                proyecto o idea. Contacta con nosotros y te atenderemos en el
                menor tiempo posible.
              </p>
            </div>
            <div className="flex items-center justify-center md:w-2/5">
              <Btn btnClass="lg:my-4 btn-dark" direction="/contacto">
                Contactar
              </Btn>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Portafolio
