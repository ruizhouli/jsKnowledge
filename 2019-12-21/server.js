const http = require('http');
const fs= require('fs')
let app = http.createServer(function(request,response){
response.writeHead(200,{'Content-Type':'text/html'});//防止乱码
    if(request.url!='/favicon.ico'){
        let url = request.url.substr(1);
     try{
        let data=fs.readFileSync(url);
        console.log(data)
        response.write(data)
        response.end()
     }catch(error){
        response.write('404')
        response.end()
     }
    } 
    
    
//  console.log(data)

//  if(data){
//     response.write(data)
//     response.end()
//  }else{
//     response.write('404')
//     response.end()
//  }

/* if(request.url!='/favicon.ico'){
    let s = request.url;
    let num = s.split('?')[1].split('=')[1];

    if(num===num){
        response.write('李瑞州')
    }
    response.end();
} */
        
})


app.listen(88)