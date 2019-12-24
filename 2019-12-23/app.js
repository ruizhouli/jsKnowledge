const express = require('express')
const app = express();
const body = require('body-parser');
app.use(body.urlencoded({extended:false}));//url转码
let t = express.static('pages')//静态资源文件
let t1 = express.static('www')
app.use(t)
app.use(t1)
app.get('/login',(req,res)=>{
        console.log(req.url)
})
app.post('/register',(req,res)=>{
        console.log(req.body)
})

app.listen(88)