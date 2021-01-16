import React from 'react'
import { Btn } from '../common'
import { useStaticQuery, graphql } from 'gatsby'
import Markdown from 'react-markdown'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Lista = styled.div`
  margin-bottom: 20px;
  ul {
    list-style: none;
  }
  li {
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
    color: #a0aec0;
  }
  li::before {
    content: "";
    color: #fff;
    text-align: center;
    margin-right: 10px;
    background-color: #2d3748;
    display: inline-block;
    border-radius: 100%;
    width: 0.5rem;
    height: 0.5rem;
  }
`

const Prices = () => {
  const query = useStaticQuery(graphql`
    query {
      allStrapiCombo {
        nodes {
          title
          price
          description
          imageCombo {
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

  const combos = query.allStrapiCombo.nodes
  const combosOrdenados = combos.sort((a, b) => a.price - b.price)

  return (
    <section className="container relative mt-20 mb-20">
      <div className="flex justify-end mb-20 ml-10 text-gray-100 md:ml-0">
        <div className="flex flex-wrap justify-end pr-10 md:p-10 md:w-4/5 lg:w-2/5 lg:p-0">
          <h3 className="w-full text-3xl font-bold text-right text-gray-100">
            Paquetes
          </h3>
          <span className="inline-block w-20 h-1 rounded bg-custom-primary" />
          <p className="mt-8 text-lg text-right">
            Lo que los clientes más nos piden lo resumimos en paquetes para que
            tu proyecto tenga lo que tú necesites . Si quieres algo más
            personalizado no dudes en contactarnos.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap justify-around -m-4">
        {combosOrdenados.map((combo, index) => (
          <CardPrices
            key={index}
            image={combo.imageCombo.childImageSharp.fluid}
            title={combo.title}
            description={combo.description}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}
export default Prices

export const CardPrices = ({ image, title, description, index }) => {
  return (
    <div
      className="w-full m-4 md:p-4 md:m-0 xl:w-1/4 md:w-1/2"
      key={index}
      data-aos="zoom-in"
      data-aos-delay={`${index}00`}
    >
      <div className="relative flex flex-col h-full p-6 overflow-hidden border-2 rounded-lg border-custom-primary">
        <div className="flex mb-4 border-b border-gray-800">
          <div className="w-4/5">
            <h3 className="mb-1 text-xl font-medium tracking-widest text-gray-400 title-font">
              {title}
            </h3>
          </div>
          <div className="w-1/5">
            <Img fluid={image} />
          </div>
        </div>
        <Lista>
          <Markdown source={description} />
        </Lista>

        <Btn btnClass="mt-auto btn-blue text-center" direction="/contacto">
          Pedir presupuesto
        </Btn>
        <p className="mt-3 text-xs text-gray-600">
          Este paquete se puede ajustar dependiendo de las necesidades del
          proyecto
        </p>
      </div>
    </div>
  )
}
