var test = require('tape')
var concat = require('concat-stream')
var fromBuffer = require('./')

test('should turn a buffer into a stream', function (t) {
  t.plan(1)

  var buffer = Buffer.allocUnsafe(64 * 1024)
  fromBuffer(buffer).pipe(concat(function (result) {
    t.equal(
      buffer.toString('base64'),
      result.toString('base64')
    )
  }))
})
