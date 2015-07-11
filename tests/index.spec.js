
// Testing Helpers
var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;

// Require the Module we're testing & lodash for usefulness
var _ = require('lodash');
var MyModule = require('../index.js');

describe('Project Starter JS Module', function () {
  
  it ('can be required via CommonJS', function () {
    expect(MyModule).to.exist;
  });
  
});