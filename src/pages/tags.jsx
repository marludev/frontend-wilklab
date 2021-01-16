import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import { Header } from '../components/layout'

const Tags = () => {
  const query = useStaticQuery(graphql`
    query {
      allStrapiTag {
        nodes {
          tag
        }
      }
    }
  `)
  const { nodes } = query.allStrapiTag

  return (
    <div className="min-h-screen overflow-x-hidden bg-dark">
      <Header />
      <main className="container flex justify-center mt-20">
        <div>
          <h2 className="mb-4 text-3xl text-center text-gray-100">
            TAGS DISPONIBLES
          </h2>
          <div className="flex flex-wrap">
            {nodes.map(node => (
              <Link
                className="m-2 text-xl text-custom-primary"
                to={`/tags/${node.tag}`}
                key={node.tag}
              >
                #{node.tag}
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Tags
