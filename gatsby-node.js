exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allProjectsJson {
        nodes {
          slug
        }
      }
    }
  `)

  if (result.error) {
    reporter.panic("There was a problem loading your projects!")
    return
  }

  const projects = result.data.allProjectsJson.nodes

  projects.forEach(({ slug }) => {
    console.log("slug: ", slug)
    actions.createPage({
      path: `/${slug}/`,
      component: require.resolve("./src/templates/project.js"),
      context: { slug },
    })
  })
}
