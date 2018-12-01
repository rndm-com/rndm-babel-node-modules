# RNDM Babel Node Modules

## Introduction

RNDM Babel Node Modules is an alternative to the excellent [https://www.npmjs.com/package/babel-node-modules](babel-node-modules) package. The reason behind this package is to reduce dependency on an outdated package that does not currently support the new Babel 7 framework.

This package has removed the 'babel-register' require in favour of the '@babel/register', as well as modernising and updating the ignore options to match the Babel 7 specifications.

## Installation

Make sure you have [Node.js](http://nodejs.org/) installed.

Then, to get started simply run the following command from your preferred terminal interface:

```sh
npm install -g @rndm/babel-node-modules
```

## Usage

The package is very simple to use. By default it will ignore all node_modules packages, with the exceptions of the packages you want to register on the whitelist.

### Example

```javascript
require('@rndm/babel-node-modules')(['packge-1','package-2'])
```
