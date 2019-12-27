const express = require('express');

const router = express.Router();

router.post('/',(req,res)=>{
    setTimeout(()=>{
        res.send({
            code:1
        })
    },10000)
})
module.exports=router;