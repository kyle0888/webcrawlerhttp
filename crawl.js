const {JSDOM} = require('jsdom') //importing JSDOM package

async function crawlPage(currentURL){
  // fetch will give an error if the URL got passed in is invalied, so we use try and catch to check if it valid or not
  try{
    const response = await fetch(currentURL)

    const responseStatus = response.status

    // check the response status, if greater then 399 means there is error
    if (responseStatus > 399){
      console.log(`error in fetching url : ${currentURL}, status code : ${responseStatus}`)
      return
    }

    const contentType = resp.headers.get("content-type")

    // need to check if the content type is html or not
    if (contentType !== 'text/html'){
      console.log(`non html response, content type : ${contentType} on page : ${currentURL}`)
      return
    }


    console.log(await getHttp.text())
  } catch(err){
    console.log(`error in fetch : ${err.message}, on page : ${currentURL}`)
  }
  
}

/**
 * 
 * this function collect urls from a htmlBody of URL that link to the htmlBody
 * 
 * url can be relative and absoulte, if it is relative we need to concatinate it with the baseURL
 * we can check if the URL is valid or not by trying to construct the URL object and passing in the string url
 * if it don't give error, its mean it is valid url
 * 
 * @param {String} htmlBody string that represent html body which we want to collect the URLs
 * @param {String} baseURL URL that we want to collect urls inside it
 * @returns 
 */
function getURLsFromHTML(htmlBody,baseURL){

  const urls = []
  // parsing a string to dom
  const dom = new JSDOM(htmlBody)

  // collect all anchor
  const allAnchor = dom.window.document.querySelectorAll("a")

  for (anchor of allAnchor){
    // check if it is an absolute or relative
    if (anchor.href.slice(0,1) === '/'){
      // if it is relative
      try{
        new URL(`${baseURL}${anchor.href}`)
        urls.push (`${baseURL}${anchor.href}`)
      }catch(err){
        console.log(err)
      }
    } else{
      // if it is absolute
        try{
          new URL(anchor.href)
          urls.push (anchor.href)
        }catch(err){
          console.log(err)
        }
    }
  }
  return urls
}



/**
 * there are many URL that point to the same web page . Example
 * 
 * https://boot.dev
 * http://boot.dev
 * https://Boot.dev
 * 
 * all URL above point to the same webpage
 * this function will return the normalize version of the URL
 * so for all of the URL above , the normalize version is boot.dev
 * 
 * @param {String} theURL the URL we want to normalize
 */
function normalizeURL(theURL){
  const urlObj = new URL(theURL)
  //only include the hostname and pathname (no need protocol)
  const urlHostPAth = `${urlObj.hostname}${urlObj.pathname}`  

  // strip out the leading "/" if the URL have one, because it is the same whether have it or not
  if (urlHostPAth.length >0 && urlHostPAth.slice(-1)=== "/"){
    return urlHostPAth.slice(0,-1)
  }
  return urlHostPAth
}

const htmlBodyInput = `
  <html>
    <body>
      <a href = "https://blog.boot.dev">
        blog boot.dev
      </a>
    </body>
  </html>
  `

getURLsFromHTML(htmlBodyInput,"https://blog.boot.dev")





// we specified what function we want to export by typing the function name inside the module.exports
module.exports = {
  normalizeURL,
  getURLsFromHTML,
  crawlPage
}