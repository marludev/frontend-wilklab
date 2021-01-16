import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import removeMarkdown from '../../helpers/removeMarkdown'

const CardArtitle = ({
  slug,
  image,
  title,
  content,
  date,
  imageMember,
  nameMember,
  tags,
}) => {
  return (
    <div className="p-4 md:w-1/2 lg:w-1/3">
      <div className="h-full overflow-hidden bg-gray-800 border-2 border-gray-800 rounded-lg">
        <Link to={`/blog/${slug}`}>
          <Img
            className="object-cover object-center w-full h-48"
            fluid={image}
          />
        </Link>
        <div className="p-6">
          {tags.map(tag => (
            <Link
              className="inline-block m-1 text-sm rounded-full text-custom-primary"
              key={tag.tag}
              to={`/tags/${tag.tag}`}
            >
              #{tag.tag}
            </Link>
          ))}

          <Link to={`/blog/${slug}`}>
            <h2 className="mb-3 text-lg font-medium text-white title-font">
              {title}
            </h2>

            <h5 className="mb-3 leading-relaxed">
              {removeMarkdown(content.substr(0, 200))}...
            </h5>
            <div className="flex mt-6">
              <Img className="w-10 h-10 rounded-full" fluid={imageMember} />
              <div className="ml-4 text-sm">
                <p className="font-bold">{nameMember}</p>
                <p>Escrito en {date}</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CardArtitle
