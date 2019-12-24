const http = require('http'),
       fs = require('fs'),
       urls = require('url'),
       qs = require('querystring');

http.createServer((request,response)=>{
      console.log(qs.parse(urls.parse(request.url).query))  
}).listen(88)