let http = require('http');
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
    response.writeHead(200,{'Content-Type':'text/html'})
    let u = request.url
if(u!=='/favicon.ico'){
    //以get方式请求
    if(u.includes('?')){
        let arr = u.split('?')
        let intreface = arr[0]
        let obj={};
         arr[1].replace(/(\w+)=([^&]+)(&|$)/g,($0,$1,$2)=>{
                // console.log($0,$1,$2)
                obj[$1]=decodeURI($2);
        })
        console.log(obj)
        let resBody = {
            code:0,
            msg:'已经注册过这位大佬啦，请换一个'
        }
        console.log(sql)
       switch(intreface){
            case '/zc':
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
            break;
       }
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