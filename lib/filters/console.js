const stringify = require('javascript-stringify').stringify;
const util = require('util');

/**
 *
 * @param {*} value Item passed into the filter to be returned as string and logged
 * @param {boolean} internal log internally (node) when true
 * @returns
 */
 module.exports = (value, internal = false) => {
  let output = '';
  if (internal) {
    return console.log(util.inspect(value));
  } else {
    output = stringify(value, null, "\t", { maxDepth: 3 });
    return `<script>console.log(${output});</script>`;
  }
}
