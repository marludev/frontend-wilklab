import React from 'react'
import { Helmet } from 'react-helmet'

const SEO = ({
  description,
  lang = 'es',
  meta = [],
  keywords = [],
  title,
  image,
}) => (
  <Helmet
    htmlAttributes={{
      lang,
    }}
    title={title}
    meta={[
      {
        name: 'keywords',
        content: 'wilklab, wilklab agency',
      },
      {
        name: 'google-site-verification',
        content: 'xbbK6fVlN6AFJINLjREOGjsJBNtmsIq8LbwGly5k0aU',
      },
      {
        name: 'description',
        content: description,
      },
      {
        property: 'og:image',
        content: image,
        key: 'og:image',
      },
      {
        property: 'og:image:width',
        content: 1200,
      },
      {
        property: 'og:image:height',
        content: 628,
      },
      {
        property: 'og:title',
        content: title,
      },
      {
        property: 'og:description',
        content: description,
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:country-name',
        content: 'VE',
      },
      {
        name: `twitter:title`,
        content: title,
      },
      {
        name: `twitter:description`,
        content: description,
      },
      {
        name: `twitter:image`,
        content: image,
      },
    ]
      .concat(
        keywords.length > 0
          ? {
              name: 'keywords',
              content: keywords.join(', '),
            }
          : []
      )
      .concat(meta)}
  />
)

export default SEO
