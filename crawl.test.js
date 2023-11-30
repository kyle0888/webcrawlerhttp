const {normalizeURL} = require('./crawl.js') // importing normalieURL function from crawl.js
const {test,expect} = require('@jest/globals') // importing the test and expect function from jest


// using the 'test' function imported from jest to write a test
// the first parameter of the 'test function is the name of the test
test('testing normalizeURL function', () =>{
  const input = ""
  const actualOutput = normalizeURL(input)
  const expectedOutput = ""
  // using the expect function and use the .Equal method of the function expect to actually test it
  expect(actualOutput).toEqual(expectedOutput)  
})