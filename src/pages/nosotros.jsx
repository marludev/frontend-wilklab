import React from 'react'
// ? componentes
import {
  Slider,
  About,
  Objetives,
  Instagram,
  CardMember,
} from '../components/content'
import { Layout } from '../components/layout'
import { graphql, useStaticQuery } from 'gatsby'

const Nosotros = () => {
  const query = useStaticQuery(graphql`
    query {
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

  const members = query.allStrapiMiembro.nodes

  return (
    <Layout
      title="Sobre nosotros - Equipo Creativo de Wilklab 🐺"
      description="Somos una agencia digital conformada por un equipo de jovenes creativos. Conoce a las personas detrás de cada proyecto en Wilklab."
    >
      <About />
      <Objetives />
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

      <Instagram />
    </Layout>
  )
}
export default Nosotros
