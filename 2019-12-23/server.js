const http = require('http'),
      fs = require('fs'),
      urls = require('url'),//通过url.parse可以获取很多有用信息
      qs = require('querystring');//parse:可以将url字符串转化为对象形式， stringify:可以将一个对象转化为url字符串形式

    //   console.log(qs);

  let app = http.createServer((request,response)=>{
        //  console.log(urls.parse(request.url))
        response.writeHead(200,{'Content-Type':'text/html'});
         const {query,pathname}=urls.parse(request.url);
         console.log(query,pathname);
         let arr=['\.js$','\.html$','\.css$','\.less$','\.jpg$','\.txt'];
         let reg = new RegExp(arr.join('|'));
        //  console.log(reg)
         if(reg.test(pathname)){
             try{
                let data = fs.readFileSync('pages'+pathname);
                response.write(data.toString());
                response.end()
             }catch(error){
                let data = fs.readFileSync('pages/404.html');
                response.write(data.toString());
                response.end()
             }
                
         }
         if(pathname==='/'){
            let data = fs.readFileSync('pages/index.html');
            response.end(data.toString());
         }
    })

    //当端口被占用时可以通过以下操作进行修改
    let port = 80
    app.listen(port)
    //当服务器报错时会触发这个函数
    app.on('error',e=>{
        // console.log(e)
        if(e.code==='EACCES'){
            port++;
            app.listen(port);
            console.log(port)
        }
    })
