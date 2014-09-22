/*!
 * object-length <https://github.com/jonschlinkert/object-length>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

module.exports = function objectLength(o) {
  var i = 0;

  if (o == null) {
    return i;
  }

  for (var key in o) {
    if ({}.hasOwnProperty.call(o, key)) {
      i++;
    }
  }

  return i;
};