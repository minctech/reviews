# Project Minc Tech Airbnb

> Project description
> - This is a mock up of an Airbnb listings page

## Related Projects

  - https://github.com/minctech/reviews

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 12.8.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
make sure you have your project\'s file structure \\set up as follows:
your-project
  -> client
    -> dist
      -> index.html
    -> src
      -> components
        -> Component1.jsx
      -> index.jsx

npm install webpack --save-dev
npm install webpack-cli --save-dev

add \"react-dev\": \"webpack -d --watch\" to scripts \\in package.json

npm install babel-loader @babel/core @babel/preset-env @babel/preset-react --save-dev

create webpack.config.js and add:
module.exports = {
  entry: __dirname + '/client/src/index.jsx',
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      }
    ]
  },
    output: {
    filename: 'bundle.js',
    path: __dirname + '/client/dist'
  }
};

npm run react-dev
```

