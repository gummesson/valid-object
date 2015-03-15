# valid-object

[![NPM version][npm-img]][npm-url]
[![License][license-img]][license-url]
[![Build status][travis-img]][travis-url]
[![Test coverage][coveralls-img]][coveralls-url]

Validat the property types of an object against a schema.

## Installation

```
npm install valid-object
```

## Usage

``` javascript
var validObject = require('valid-object')

var schema = {
  name: { type: 'string' }
}

validObject({ name: 'Anonymous' }, schema)
// => true

validObject({ name: 1337 }, schema)
// => [
//      { 
//        property: 'name', 
//        value: 1337, 
//        type: { 
//          expected: 'string',
//          actual: 'number'
//        }
//      }
//   ]
```

[npm-img]: https://img.shields.io/npm/v/valid-object.svg?style=flat-square
[npm-url]: https://npmjs.org/package/valid-object
[license-img]: http://img.shields.io/npm/l/valid-object.svg?style=flat-square
[license-url]: LICENSE
[travis-img]: https://img.shields.io/travis/gummesson/valid-object.svg?style=flat-square
[travis-url]: https://travis-ci.org/gummesson/valid-object
[coveralls-img]: https://img.shields.io/coveralls/gummesson/valid-object.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/gummesson/valid-object?branch=master
