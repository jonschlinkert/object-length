# object-length [![NPM version](https://badge.fury.io/js/object-length.svg)](http://badge.fury.io/js/object-length)


> Get the length of an object's properties, excluding prototype properties. Work with dontEnum bugs.

## Install
#### Install with [npm](npmjs.org):

```bash
npm i object-length --save-dev
```

## Run tests

```bash
npm test
```

## Usage

```js
var len = require('object-length');

len({a: 'a', b: 'b'});
//=> 2
```

Works with dontEnum bugs:

```js
len({'hasOwnProperty': 'abc', def: 'xyz'});
//=> 2
```

## Author

**Jon Schlinkert**
 
+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert) 

## License
Copyright (c) 2014 Jon Schlinkert, contributors.  
Released under the MIT license

***

_This file was generated by [verb-cli](https://github.com/assemble/verb-cli) on September 22, 2014._