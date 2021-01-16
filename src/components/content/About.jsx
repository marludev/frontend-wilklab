import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

// ? styles
import styled from 'styled-components'

const Rectangle = styled.div`
  height: 550px;
  @media (max-width: 639px) {
    height: 300px;
  }
`

const About = () => {
  const query = useStaticQuery(graphql`
    query {
      strapiNosotros {
        title
        subtitle
        content
        imageAbout1 {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        imageAbout2 {
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
    imageAbout1,
    imageAbout2
  } = query.strapiNosotros

  return (
    <section className="container py-10 lg:mt-56">
      <div
        data-aos="zoom-in"
        className="relative items-center mx-10 text-gray-100 md:flex"
      >
        <div data-aos="fade-down-right" className="md:w-1/2">
          <h2 className="text-4xl font-bold">{title}</h2>
          <span className="inline-block float-left w-20 h-1 rounded bg-custom-primary" />
          <p className="my-5 text-2xl font-bold">{subtitle}</p>
          <p className="text-lg">{content}</p>
        </div>
        <div className="flex justify-center mt-10 md:w-1/2 md:mt-0">
          <Rectangle
            data-aos="fade-up-left"
            className="relative z-10 w-3/5 bg-custom-primary"
          />
          <Img
            style={{ position: 'absolute' }}
            data-aos="fade-up-left"
            className="z-20 w-40 transform translate-x-20 sm:w-3/6 md:w-2/6 lg:translate-x-32 md:translate-y-20 lg:-translate-y-32"
            fluid={imageAbout2.childImageSharp.fluid}
          />
          <Img
            style={{ position: 'absolute' }}
            data-aos="fade-up"
            className="bottom-0 z-30 w-48 transform -translate-x-16 sm:w-3/5 md:w-4/12 md:-translate-y-10 lg:-translate-y-0"
            fluid={imageAbout1.childImageSharp.fluid}
          />
        </div>
      </div>
    </section>
  )
}

export default About
