const path = require("path")

exports.onCreateWebpackConfig = (
  { actions },
  { aliases = {}, rootFolder = "src" }
) => {
  const hasCustomAliases = !!Object.keys(aliases).length
  const alias = !hasCustomAliases
    ? {}
    : Object.keys(aliases).reduce(
        (obj, item) => ({
          ...obj,
          [item]: path.resolve(aliases[item])
        }),
        {}
      )

  actions.setWebpackConfig({
    resolve: {
      modules: ["node_modules", path.resolve(rootFolder)],
      alias
    }
  })
}
