const path = require("path")

exports.onCreateWebpackConfig = (
  { actions },
  { aliases = [], rootFolder = "src" }
) => {
  if (!aliases.length) return

  const alias = aliases.reduce(
    (obj, item) => ({
      ...obj,
      [item]: path.resolve(`${rootFolder}/${item}`)
    }),
    {}
  )

  actions.setWebpackConfig({
    resolve: {
      alias
    }
  })
}
