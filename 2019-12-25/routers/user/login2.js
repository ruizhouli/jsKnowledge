const express = require('express'),
       routor = express.Router();

routor.post('/',(req,res)=>{
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


module.exports=routor;