const express = require('express');

const router = express.Router();


// const myRouter = {
//         login:()=>{//此处的'/'代表app里面的/login
//                 return router.post('/', (req, res) => {
//                         setTimeout(()=>{
//                           res.send({
//                                code: 1
//                             })
//                         },2000)
                      
//                })
//         },
//         reg:()=>{
//                 return router.post('/',(req,res)=>{
//                      const{body,sql}=req;
//                      console.log(req)
//                      let obj=null
//                      let o = sql.find(item=>{
//                              return item.username===body.user
//                      })
//                      if(o){
//                         req.session.userinfo = body.user;
//                         req.session.type = o.type;
//                         obj={
//                                 code:0,
//                                 type:o.type,
//                                 user:o.username
//                         }
//                      }else{
//                              obj={
//                                 code:1,
//                              }
//                      }
//                      res.json(obj)
//                 })
//         }
// }

const login=()=>{//此处的'/'代表app里面的/login
return router.post('/', (req, res) => {
        setTimeout(()=>{
          res.send({
               code: 1
            })
        },2000)
      
})
};

const reg=()=>{
        return router.post('/',(req,res)=>{
             const{body,sql}=req;
             console.log(req)
             let obj=null
             let o = sql.find(item=>{
                     return item.username===body.user
             })
             if(o){
                req.session.userinfo = body.user;
                req.session.type = o.type;
                obj={
                        code:0,
                        type:o.type,
                        user:o.username
                }
             }else{
                     obj={
                        code:1,
                     }
             }
             res.json(obj)
        })
}
module.exports={
        login,
        reg,
};


















// const myRouter = {
//         login: (params) => {
//                 return router.post('/', (req, res) => {
//                         // console.log(req.query)
//                         console.log(req.body)
//                         console.log(req.sql)
//                         res.send({
//                                 code: 1
//                         })
//                 })
//         },
//         getuerinfo: () => {
//                 return router.post('/', (req, res) => {
//                         // console.log(req.query)
//                         console.log(req.body)
//                         console.log(req.sql)
//                         res.send({
//                                 code: 1
//                         })
//                 })
//         }
// }
// router.post('/', (req, res) => {
//         // console.log(req.query)
//         console.log(req.body)
//         console.log(req.sql)
//         res.send({
//                 code: 1
//         })
// })
// const login = () => {
//         return router.post('/', (req, res) => {
//                 // console.log(req.query)
//                 console.log(req.body)
//                 console.log(req.sql)
//                 res.send({
//                         code: 1
//                 })
//         })
// }

// const LoginInfo = () => {
//         return router.post('/', (req, res) => {
//                 // console.log(req.query)
//                 console.log(req.body)
//                 console.log(req.sql)
//                 res.send({
//                         code: 1
//                 })
//         })
// }