/**
 * Dependencies
 */

var test        = require('tape')
var validObject = require('../')

/**
 * Tests
 */

test('validObject(obj, schema)', function(t) {
  var schema = {
    name: { type: 'string' },
    human: { type: 'boolean' },
    likes: { type: 'array' }
  }

  t.test('returns true if valid', function(assert) {
    var truthy = validObject({
      name: 'Anonymous',
      human: true,
      likes: ['cats']
    }, schema)

    assert.equal(truthy, true)
    assert.end()
  })

  t.test('returns errors if non-valid', function(assert) {
    var falsy = validObject({
      name: 1337,
      human: 'undecided',
      likes: { nothing: true }
    }, schema)

    assert.deepEqual(falsy, [
      {
        property: 'name',
        value: 1337,
        type: { expected: 'string', actual: 'number' }
      },
      {
        property: 'human',
        value: 'undecided',
        type: { expected: 'boolean', actual: 'string' }
      },
      {
        property: 'likes',
        value: { nothing: true },
        type: { expected: 'array', actual: 'object' }
      }
    ])
    assert.end()
  })

  t.end()
})
