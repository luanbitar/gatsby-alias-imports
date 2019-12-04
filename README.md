[![Version](https://img.shields.io/npm/v/gatsby-alias-imports.svg)](https://www.npmjs.com/package/gatsby-alias-imports)
[![Downloads Total](https://img.shields.io/npm/dt/gatsby-alias-imports.svg)](https://www.npmjs.com/package/gatsby-alias-imports)

# gatsby-alias-imports

Webpack feature for aliasing in your import statements

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

Add the plugin to your Gatsby config.

```javascript
{
  plugins: [
    {
      resolve: `gatsby-alias-imports`,
      options: {
        aliases: ["styles", "components"]
      }
    }
  ]
}
```

## Options

### aliases

Alias should be an array of folder names inside your project folder.

### rootFolder

The **rootFolder** it's in case you change your `src` folder name

It is an array of desired extensions to auto-find.

E.g. `app`

## Further reading

Check out the [resolve section][1] of the Webpack config documentation for more information.

[1]: https://webpack.js.org/configuration/resolve/#resolve-alias
