/**
 * Dependencies
 */

var split  = require('split-object')
var typeOf = require('type-of')

/**
 *  Validate `obj` against `schema`.
 *
 *  @param  {object} obj
 *  @param  {object} schema
 *  @return {boolean|array}
 *
 *  @api public
 */

function validObject(obj, schema) {
  var errors = []
  split(schema)
    .forEach(function(prop) {
      var error = checkProp(obj, prop)
      if (error) errors.push(error)
    })
  var results = errors.length
    ? errors
    : true
  return results
}

/**
 * Check if the property value is valid.
 *
 * @param  {object} obj
 * @param  {object} prop
 * @return {object}
 *
 * @api private
 */

function checkProp(obj, prop) {
  var value = obj[prop.key]
  var type  = typeOf(value)
  if (!(type === prop.value.type))
    return formatProp(value, type, prop)
}

/**
 * Format a non-valid property.
 *
 * @param  {string} value
 * @param  {string} type
 * @param  {object} prop
 * @return {object}
 *
 * @api private
 */

function formatProp(value, type, prop) {
  var error = {
    property: prop.key,
    value: value,
    type: {
      expected: prop.value.type,
      actual: type
    }
  }
  return error
}

/**
 * Exports
 */

module.exports = validObject
