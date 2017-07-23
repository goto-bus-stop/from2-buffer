var fromBuffer = require('.')
var buffer = require('fs').readFileSync(__filename)

fromBuffer(buffer).pipe(process.stdout)
