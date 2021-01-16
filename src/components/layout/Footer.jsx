import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { IconInstagram, IconFacebook } from '../icons'

const Footer = () => {
  const query = useStaticQuery(graphql`
    query {
      fileName: file(relativePath: { eq: "images/w-3.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const logo = query.fileName.childImageSharp.fluid

  return (
    <>
      <footer>
        <div className="text-gray-500 bg-gray-800 body-font">
          <div className="container flex flex-col items-center px-5 py-4 mx-auto sm:flex-row">
            <Link to="/" className="flex items-center justify-center font-medium text-white title-font md:justify-start">
              <Img className="w-10 h-10" fluid={logo} alt="logo" />
              <span className="ml-3 text-xl">wilklab</span>
            </Link>
            <p className="mt-4 text-sm text-gray-600 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0">
              <Link className="text-sm" to="/privacidad">
                Politicas de privacidad
              </Link>
            </p>
            <span className="inline-flex justify-center mt-4 sm:ml-auto sm:mt-0 sm:justify-start">
              <a
                className="text-gray-600 hover:text-white"
                href="https://www.instagram.com/wilklab/?hl=es-la/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconInstagram className="w-6 h-6" />
              </a>
              <a
                className="ml-3 text-gray-600 hover:text-white"
                href="https://www.facebook.com/wilklab-104380411133966/"
                target="_blank"
                rel="noopener noreferrer"
              >

                <IconFacebook className="w-6 h-6" />
              </a>
            </span>
          </div>
        </div>
      </footer>
    </>
  )
}
export default Footer
