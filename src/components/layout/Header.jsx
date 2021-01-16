import React, { useState } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

// ? trasiciones
import { useTransition, animated } from 'react-spring'

// ? styles
import styled from 'styled-components'

import Img from 'gatsby-image'

const URL = styled(Link)`
  position: relative;
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 8%;
    background: var(--color-primary);
    z-index: -1;
    transition: 0.5s ease-in-out;
    border-radius: 20px;
  }
  &:hover::before {
    width: 70%;
  }
  &.active::before {
    width: 100%;
  }
`

const Header = () => {
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

  const [toggle, setToggle] = useState(false)

  const transitions = useTransition(toggle, null, {
    from: { left: `-${100}%` },
    enter: { left: `${0}` },
    leave: { left: `-${100}%` },
  })

  return (
    <header className="container mt-10">
      <div className="fixed inset-x-0 top-0 flex justify-between px-4 py-2 bg-dark z-60 lg:hidden">
        <span className="flex items-center text-xl text-gray-100">
          <Link to="/">
            <Img className="w-10" fluid={logo} alt="logo" />
          </Link>
          <p className="ml-1">wilklab</p>
        </span>
        <button
          className={`text-custom-primary flex justify-center items-center w-10 focus:outline-none ${
            toggle && 'btn-icon-close'
          }`}
          onClick={() => setToggle(!toggle)}
        >
          <i className="btn-icon-bar"></i>
        </button>
      </div>
      <nav className="relative z-50">
        {transitions.map(
          ({ item, key, props }) =>
            item && (
              <animated.div
                key={key}
                style={props}
                className="fixed inset-y-0 w-full max-w-xs overflow-y-auto bg-dark"
              >
                <ul className="pt-10">
                  <li className="px-4 py-1 mt-10 text-xl text-gray-100">
                    <URL activeClassName="active" to="/" className="block py-1">
                      Inicio
                    </URL>
                  </li>
                  <li className="px-4 py-1 text-xl text-gray-100 ">
                    <URL
                      activeClassName="active"
                      to="/servicios"
                      className="block py-1"
                    >
                      Servicios
                    </URL>
                  </li>
                  <li className="px-4 py-1 text-xl text-gray-100 ">
                    <URL
                      activeClassName="active"
                      to="/portafolio"
                      className="block py-1"
                    >
                      Portafolio
                    </URL>
                  </li>
                  <li className="px-4 py-1 text-xl text-gray-100">
                    <URL
                      activeClassName="active"
                      to="/nosotros"
                      className="block py-1"
                    >
                      Nosotros
                    </URL>
                  </li>
                  <li className="px-4 py-1 text-xl text-gray-100">
                    <URL
                      activeClassName="active"
                      to="/contacto"
                      className="block py-1"
                    >
                      Contacto
                    </URL>
                  </li>
                  <li className="px-4 py-1 text-xl text-gray-100">
                    <URL
                      activeClassName="active"
                      to="/blog"
                      className="block py-1"
                    >
                      Blog
                    </URL>
                  </li>
                </ul>
              </animated.div>
            )
        )}
        <ul className="hidden lg:relative lg:flex lg:flex-row lg:items-center lg:w-full lg:py-3 lg:border-2 lg:rounded-lg lg:border-custom-primary">
          <li className="flex justify-center px-4 lg:block lg:mr-auto">
            <Link to="/">
              <Img className="w-20 lg:w-12" fluid={logo} alt="logo" />
            </Link>
          </li>
          <li className="px-4 py-1 text-xl text-gray-100">
            <URL activeClassName="active" to="/" className="block py-1">
              Inicio
            </URL>
          </li>
          <li className="px-4 py-1 text-xl text-gray-100 ">
            <URL
              activeClassName="active"
              to="/servicios"
              className="block py-1"
            >
              Servicios
            </URL>
          </li>
          <li className="px-4 py-1 text-xl text-gray-100 ">
            <URL
              activeClassName="active"
              to="/portafolio"
              className="block py-1"
            >
              Portafolio
            </URL>
          </li>
          <li className="px-4 py-1 text-xl text-gray-100">
            <URL activeClassName="active" to="/nosotros" className="block py-1">
              Nosotros
            </URL>
          </li>
          <li className="px-4 py-1 text-xl text-gray-100">
            <URL activeClassName="active" to="/contacto" className="block py-1">
              Contacto
            </URL>
          </li>
          <li className="px-4 py-1 text-xl text-gray-100">
            <URL activeClassName="active" to="/blog" className="block py-1">
              Blog
            </URL>
          </li>
        </ul>
      </nav>
      {toggle && (
        <div
          onClick={() => setToggle(false)}
          className="fixed inset-0 z-30 bg-black opacity-25"
        ></div>
      )}
    </header>
  )
}

export default Header
