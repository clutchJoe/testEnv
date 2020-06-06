'use strict'

/* eslint func-names: 0 */

const { expect } = require('chai')
const { returnFirstEle } = require('../../index')

describe('cool test', function () {
  it('should success', function () {
    const result = returnFirstEle(['Joe', 'Mao'])
    expect(result).to.be.a('string')
  })

  it('should fail', function () {
    try {
      returnFirstEle('Joe')
    } catch (err) {
      expect(err.message).to.eql('must input an array')
    }
  })
})
