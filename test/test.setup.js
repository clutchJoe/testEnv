'use strict'

const sinon = require('sinon')

beforeEach(function beforeEach() {
  this.sandbox = sinon.createSandbox()
})

afterEach(function afterEach() {
  this.sandbox.restore()
})
