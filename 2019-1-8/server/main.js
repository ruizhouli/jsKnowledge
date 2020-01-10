const express = require('express');
const app = express();
const bodyParse = require('body-parser');

const jwt = require('jsonwebtoken')

app.use(bodyParse.json())
app.use(bodyParse.urlencoded({
       extended: false
}))


/* 
app.use('*', function (req, res, next) {
       // console.log(req)
       res.header('Access-Control-Allow-Origin', '*');
       //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
       res.header('Access-Control-Allow-Headers',  'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
       res.header('Access-Control-Allow-Methods', 'GET,POST');
       res.header('Content-Type', 'application/json;charset=utf-8');
       console.log('2598nytjjutkuiulur') 
       next();
     });
 */
let allowOrigin = [
       "http://localhost:8080",
       "http://localhost:8081",

];

app.use((request, response, next) => {
       let {
              origin
       } = request.headers;
       // console.log(origin)
       if (allowOrigin.includes(origin)) {
              // console.log(1268489984948)
              response.setHeader("Access-Control-Allow-Origin", origin);
              response.setHeader("Access-Control-Allow-Credentials", true);
              response.setHeader("Access-Control-Allow-Headers", "Content-Type, Content-Length, Authorization, Accept, X-Requested-With");
              response.setHeader("Access-Control-Allow-Methods", "GET, POST");
              response.setHeader("X-Powered-By", "3.2.1");
              //     if(request.method.toUpperCase() == "OPTIONS") {
              //         response.statusCode = 204;
              //         response.end();
              //     }
              next();
       }

});
let ary = ['李瑞州', '李世杰']

let secretOrPrivateKey = "ruizhou"
app.post('/login', (req, res) => {
       // console.log(req.body.name)
       let content = {
              name: req.body.name
       };

       let token = jwt.sign(content, secretOrPrivateKey, {
              expiresIn: 60 //8s过期
       });
       if (ary.includes(req.body.name)) {
              console.log(1111111)
              res.json({
                     code: '0',
                     msg: '成功!',
                     toke: token,
              })

       } else {
              console.log(222222222222)
              res.json({
                     code: '1',
                     msg: '失败'
              })

       }
})

app.post('/islogin', (req, res) => {
       const token = req.headers.authorization;
       console.log(token)
       if (token) {
              jwt.verify(token, secretOrPrivateKey, (error,data) => {
                     if (error) {
                            res.json({
                                   id: '0',
                                   msg: 'token已失效'
                            })


                     }
                     if(data){
                            res.json({
                                   id: '1',
                                   msg: '有权限',
                                   toke: jwt.sign({
                                          name: req.body.name
                                   }, secretOrPrivateKey, {
                                          expiresIn: 8
                                   })
       
                            })
                     }
                    
              })
       } else {
              res.json({
                     id: '2',
                     msg: '未登录',
              })

       }
})

app.listen('88', () => {
       console.log('已启动服务成功!')
})