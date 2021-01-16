import React, { useEffect, useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

const Instagram = () => {
  const query = useStaticQuery(graphql`
    query {
      allStrapiSocial(sort: { fields: [createdAt], order: [DESC] }, limit: 8) {
        nodes {
          id
          url
          imagePost {
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
  const [numberImageRender, setNumberImageRender] = useState()

  function changeMedia(mql) {
    mql.matches ? setNumberImageRender(4) : setNumberImageRender(8)
  }
  useEffect(() => {
    const mql = window.matchMedia('(max-width: 768px)')
    mql.addEventListener('change', changeMedia)
    mql.matches ? setNumberImageRender(4) : setNumberImageRender(8)
  }, [])
  return (
    <div className="container mb-20">
      <div className="flex mb-20 ml-10 text-gray-100 md:ml-0">
        <div className="pr-10 md:p-10 lg:p-0">
          <h3 className="w-full text-3xl font-bold text-left text-gray-100">
            Instagram
          </h3>
          <span className="inline-block w-20 h-1 rounded bg-custom-primary" />
        </div>
      </div>
      <div className="overflow-x-scroll whitespace-nowrap md:overflow-hidden md:flex md:flex-wrap md:justify-center lg:border-l-4 lg:border-custom-primary">
        {query.allStrapiSocial.nodes.slice(0, numberImageRender).map(ruta => (
          <a
            key={ruta.id}
            className="inline-block w-64 h-64 m-4"
            href={`${ruta.url}`}
            target="_blank"
            rel="noreferrer"
          >
            <BackgroundImage
              className="w-full h-full"
              fluid={ruta.imagePost.childImageSharp.fluid}
            >
              <div className="flex items-center justify-center w-full h-full transition duration-500 bg-gray-800 bg-opacity-0 opacity-0 hover:bg-opacity-75 hover:opacity-100">
                <button className="p-2 text-lg font-bold text-white transition duration-500">
                  Ver post
                </button>
              </div>
            </BackgroundImage>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Instagram
