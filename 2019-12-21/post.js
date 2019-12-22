let http = require('http')

let fs = require('fs')
let sql=[
    {
        id:0,
        username:'李宝山',
        password:123
     },
     {
        id:1,
        username:'孙太平',
        password:123
     },
     {
         id:2,
         username:'郝红平',
         password:123
     }
]
http.createServer(function(request,response){
    // console.log(request.url)
    response.writeHead(200,{'content-type':'text/html'})
    let u = request.url
    let resBody = {
        code:0,
        msg:'已经注册过这位大佬啦，请换一个'
    }
if(u!=='/favicon.ico'){
    //以post方式请求
    if(u.includes('/post')){
       let html='';
       request.on('data',function(d){
            html+=d
       })
       request.on('end',function(){
           console.log(html);
        let obj = queryString(html);
        console.log(obj);
        let un=0;
                for(let i =0;i<sql.length;i++){
                    if(sql[i].username===obj.user){
                        un+=1;
                        if(sql[i].password===obj.password*1){
                            let t = JSON.stringify(resBody)
                            response.write(t);
                            response.end();
                        }else{
                            resBody.code=2;
                            resBody.msg='密码错误!';
                            let t = JSON.stringify(resBody)
                            response.write(t);
                            response.end();
                        }
                       
                        }
            }
            if(un===0){
                    resBody.code=1;
                    resBody.msg='恭喜大佬注册成功';
                    sql.push({'id':Date.now(),'username':obj.user,'password':obj.password*1})
                    console.log(sql)
                    let t = JSON.stringify(resBody)
                    response.write(t);
                    response.end();
            }   
        //  response.write(JSON.stringify(obj));
        //  response.end();
   })

    }else{
        try{
            if(u==='/'){
                u='/index.html'
            }
              let data= fs.readFileSync('pages'+u)
                 response.write(data);
                 response.end();
        }catch(error){
            let data= fs.readFileSync('pages/404.html')
            response.write(data);
            response.end();
        }
        
    }
    
    
}

}).listen(88)
//user=%E6%9D%8E%E7%91%9E%E5%B7%9E&password=123
function queryString(url){
    let obj={};
    url.replace(/(\w+)=([^&]+)(&|$)/g,($0,$1,$2,$3)=>{
           obj[$1]=decodeURI($2)
    })
    return obj;
}