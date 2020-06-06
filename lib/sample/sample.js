'use strict'

function returnFirstEle(arr) {
  if (Array.isArray(arr)) {
    return arr.shift()
  }
  throw new Error('must input an array')
}

module.exports = {
  returnFirstEle
}
