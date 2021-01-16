exports.createPages = async ({ actions, graphql }) => {
  const articulos = await graphql(`
    query {
      allStrapiArticulo {
        nodes {
          slug
        }
      }
    }
  `)
  const tags = await graphql(`
    query {
      allStrapiTag {
        nodes {
          tag
        }
      }
    }
  `)
  const proyectos = await graphql(`
    query {
      allStrapiProyecto {
        nodes {
          slug
        }
      }
    }
  `)

  // ? si existen articulos crear los archivos
  const articulosRute = articulos.data.allStrapiArticulo.nodes
  articulosRute.forEach(node => {
    actions.createPage({
      path: `blog/${node.slug}`,
      component: require.resolve('./src/templates/articulo.jsx'),
      context: {
        slug: node.slug,
      },
    })
  })

  const tagsRute = tags.data.allStrapiTag.nodes
  tagsRute.forEach(node => {
    actions.createPage({
      path: `tags/${node.tag}`,
      component: require.resolve('./src/templates/tags.jsx'),
      context: {
        tag: node.tag,
      },
    })
  })

  const proyectosRute = proyectos.data.allStrapiProyecto.nodes
  proyectosRute.forEach(node => {
    actions.createPage({
      path: `portafolio/${node.slug}`,
      component: require.resolve('./src/templates/proyecto.jsx'),
      context: {
        slug: node.slug,
      },
    })
  })
}
