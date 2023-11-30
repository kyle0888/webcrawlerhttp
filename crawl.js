
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


// we specified what function we want to export by typing the function name inside the module.exports
module.exports = {
  normalizeURL
}