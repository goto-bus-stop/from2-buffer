var from = require('from2')

module.exports = function fromBuffer (buffer) {
  var idx = 0
  return from(function read (size, next) {
    if (idx >= buffer.length) return this.push(null)

    var start = idx
    idx += size
    next(null, buffer.slice(start, idx))
  })
}
