/*!
 * object-length <https://github.com/jonschlinkert/object-length>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var hasOwn = Object.prototype.hasOwnProperty;

module.exports = function objectLength(o) {
  if (o == null) return;
  var i = 0;

  for (var key in o) {
    if (hasOwn.call(o, key)) {
      i++;
    }
  }

  return i;
};
