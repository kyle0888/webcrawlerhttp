const {normalizeURL, getURLsFromHTML} = require('./crawl.js') // importing normalieURL function from crawl.js
const {test,expect} = require('@jest/globals') // importing the test and expect function from jest


// using the 'test' function imported from jest to write a test
// the first parameter of the 'test function is the name of the test

test('normalizeURL stripe protocol', () =>{
  const input = "https://blog.boot.dev/path"
  const actualOutput = normalizeURL(input)
  const expectedOutput = "blog.boot.dev/path"
  // using the expect function and use the .Equal method of the function expect to actually test it
  expect(actualOutput).toEqual(expectedOutput)  
})

test('normalizeURL strip trailing slahs ("/")', () =>{
  const input = "https://blog.boot.dev/path/"
  const actualOutput = normalizeURL(input)
  const expectedOutput = "blog.boot.dev/path"
  // using the expect function and use the .Equal method of the function expect to actually test it
  expect(actualOutput).toEqual(expectedOutput)  
})


test('normalizeURL test case sensitive', () =>{
  const input = "https://blog.Boot.dev/path/"
  const actualOutput = normalizeURL(input)
  const expectedOutput = "blog.boot.dev/path"
  // using the expect function and use the .Equal method of the function expect to actually test it
  expect(actualOutput).toEqual(expectedOutput)  
})

test('getURLsFromHTML absolute', () => {
  const inputURL = 'https://blog.boot.dev'
  const inputBody = '<html><body><a href="https://blog.boot.dev"><span>Boot.dev></span></a></body></html>'
  const actual = getURLsFromHTML(inputBody, inputURL)
  const expected = [ 'https://blog.boot.dev/' ]
  expect(actual).toEqual(expected)
})

test('getURLsFromHTML relative', () => {
  const inputURL = 'https://blog.boot.dev'
  const inputBody = '<html><body><a href="/path/one"><span>Boot.dev></span></a></body></html>'
  const actual = getURLsFromHTML(inputBody, inputURL)
  const expected = [ 'https://blog.boot.dev/path/one' ]
  expect(actual).toEqual(expected)
})

test('getURLsFromHTML both', () => {
  const inputURL = 'https://blog.boot.dev'
  const inputBody = '<html><body><a href="/path/one"><span>Boot.dev></span></a><a href="https://other.com/path/one"><span>Boot.dev></span></a></body></html>'
  const actual = getURLsFromHTML(inputBody, inputURL)
  const expected = [ 'https://blog.boot.dev/path/one', 'https://other.com/path/one' ]
  expect(actual).toEqual(expected)
})

test('getURLsFromHTML handle error', () => {
  const inputURL = 'https://blog.boot.dev'
  const inputBody = '<html><body><a href="path/one"><span>Boot.dev></span></a></body></html>'
  const actual = getURLsFromHTML(inputBody, inputURL)
  const expected = [ ]
  expect(actual).toEqual(expected)
})