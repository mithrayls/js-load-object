# load-object

[![npm package][npm-image]][npm-url]
[![Coverage Status][coveralls-image]][coveralls-url]

`load-object` is a useful `node.js` utility package for loading data. `load-object` loads data into a Javascript object from YAML, JSON, CBOR, or Dhall both locally and remotely, thereby removing the need to manually pass the files to different parsers.

## Issues:
- CBOR not working remotely due to `undici`.
- Dhall will probably only work on Linux and if you have dhall-to-json installed as it depends on native bindings.

## Installation

```bash
npm install load-object
```

## Usage

Include with either module type:

### MJS
``` node
import load from "load-object"
```
### CJS
``` node
const load = require("load-object")
```

### Use Locally
```node
// Should have one of these extensions: .json, .yaml, .yml, .dhall, .toml, .cbor
const filePath = "./openapi.json"
const object  = load(filePath)
```

### Use Remotely
```node
// Should have one of these extensions: .json, .yaml, .yml, .dhall, .toml
const url = "https://raw.githubusercontent.com/OAI/OpenAPI-Specification/main/examples/v3.0/petstore.json"
const object = load(url)
```

[npm-image]: https://img.shields.io/npm/v/load-object.svg
[npm-url]: http://npmjs.org/package/load-object
[coveralls-image]: https://coveralls.io/repos/github/mithrayls/js-load-object/badge.svg?branch=main
[coveralls-url]: https://coveralls.io/github/mithrayls/js-load-object?branch=main
