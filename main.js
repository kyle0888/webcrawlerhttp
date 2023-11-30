const {crawlPage} = require('./crawl.js')

async function main(){
  // we need to check if there is website provided in the argument
  // it is three because first entry of the argument is the intepreter
  // the second entry is the name of our code (main.js) or the path of our file
  // the third entr is the argument that actually get pass in to our program
  if (process.argv.length < 3){
    console.log("no website provided")
    process.exit(1)
  }

  // check if there are more than one arguments
  if (process.argv.length > 3){
    console.log("too many command line args")
    process.exit(1)
  }

  const urlToCrawl = process.argv[2]


  console.log(`start crawling : ${urlToCrawl}`)
  const pagesCollected = await crawlPage(urlToCrawl,urlToCrawl,{})

  for (const page of Object.entries(pagesCollected)){
    console.log(page)
  }

}

main()