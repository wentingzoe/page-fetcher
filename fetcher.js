const fs = require('fs') //Use Node's fs (file system) module to write the file
const request = require('request');

const link = process.argv.slice(2);


request.get(link[0], {}, (error, response, body) => {

  if (error) {
    console.error(error)
    return
  }
   fs.writeFile('/Users/zoeyong/Documents/WebDev/LHL/Lab/w2/d3/page-fetcher/test1.txt', body, err => {
    if (err) {
      console.error(err)
      return
    }
  })
})

