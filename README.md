[![Version](https://img.shields.io/npm/v/gatsby-alias-imports.svg)](https://www.npmjs.com/package/gatsby-alias-imports)
[![Downloads Total](https://img.shields.io/npm/dt/gatsby-alias-imports.svg)](https://www.npmjs.com/package/gatsby-alias-imports)

# gatsby-alias-imports

Webpack feature for aliasing in your import statements, just import this plugin and all of your folders inside your `src` will be available with aliases.

```javascript
import "styles/layout.css"
import Header from "components/Header"
```

Instead of

```javascript
import "../../styles/layout.css"
import Header from "../components/Header/index.js"
```

## Install

`$ npm i gatsby-alias-imports`

or

`$ yarn add gatsby-alias-imports`

## How to use

Add the plugin to your `gatsby-config.js`.

```javascript
module.exports = {
  plugins: [
    `gatsby-alias-imports`
  ]
}
```

## Options

### aliases

Alias should be an object where the keys are alias and values are string to path on project

Example:
```javascript
module.exports = {
  plugins: [
    {
      resolve: `gatsby-alias-imports`,
      options: {
        aliases: {
          styles: `src/styles`,
          config: `config/`,
          "@utils": "src/utils/"
        }
      }
    }
  ]
}
```

### rootFolder

The **rootFolder** it's in case you change your `src` folder name
```javascript
module.exports = {
  plugins: [
    {
      resolve: `gatsby-alias-imports`,
      options: {
        rootFolder: `app`
      }
    }
  ]
}
```

## Further reading

Check out the [resolve section][1] of the Webpack config documentation for more information.

[1]: https://webpack.js.org/configuration/resolve/#resolve-alias
