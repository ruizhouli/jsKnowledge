const express = require('express'),
    fs = require('fs'),
    url = require('url'),
    bodyparse = require('body-parser'),
    session = require('express-session'),
    path = require('path');

const app = express();
app.use(express.static('pages')); //静态资源默认放在pages文件夹中
app.use(bodyparse.urlencoded({
    extended: false
}));
app.use(bodyparse.json())
// console.dir(bodyparse.json())
app.use(session({
    secret: 'dzc',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 10000
    },
    rolling: true,
}))

let arr = [{
        id: 0,
        username: '李瑞州',
        type: 9
    },
    {
        id: 2,
        username: '张阳',
        type: 1,
    },
    {
        id: 3,
        username: '梁兴富',
        type: 0,
    }
]
app.use((req, res, next) => {
    req.sql = arr;
    console.log('只要请求都要进入这个中间件,这个中间件将所有的req下面放一个sql,这个sql就是arr');
    next();
});
// const MyAjax = require("./routers/user/dl")
// console.log(MyAjax.login2)
const {login,reg}=require("./routers/user/dl")
app.use('/login', login());
app.use('/login2',require('./routers/user/login2'));
app.use('/regist',require('./routers/user/regist'));

// app.use('/regist', require('./routers/user/regist'));

//当在默认的文件夹中找不到相应的文件，就进入错误页  app.use只查看路由是否以指定的路径开头
//app.all匹配完整的路径
app.use('*', function (req, res) {
    let data = fs.readFileSync(path.resolve('./pages/404.html'));
    // console.log(data.toString())
    res.send(data.toString());
})
app.listen(88, function (req, res) {
    console.log('服务开启成功,端口为88');
})