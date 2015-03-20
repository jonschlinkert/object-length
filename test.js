/*!
 * object-length <https://github.com/jonschlinkert/object-length>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var should = require('should');
var len = require('./');

function Alphabet() {
  this.abc = 'xyz';
}

Alphabet.prototype.set = function() {};
Alphabet.prototype.get = function() {};

var abc = new Alphabet();

describe('.objectLength()', function () {
  it('should work for null', function () {
    var o = null;
    len(o).should.equal(0);
  });

  it('should work for undefined', function () {
    len().should.equal(0);
  });

  it('should return the length of the object\'s keys, excluding prototype properties.', function () {
    var o = Object.create({});
    o.a = 'a';
    o.b = 'b';
    len(o).should.eql(2);
    o.c = 'c';
    len(o).should.eql(3);

    len(abc).should.eql(1);
    len({a: 'a'}).should.eql(1);
    len({a: 'a', b: 'b'}).should.eql(2);
    len({a: 'a', b: 'b', c: 'c'}).should.eql(3);
  });


  it('should work with dontEnum bugs', function () {
    var o = {'hasOwnProperty': 'abc'};
    len({'hasOwnProperty': 'abc', def: 'xyz'}).should.equal(2);
  });
});