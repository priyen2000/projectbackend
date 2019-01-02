var express = require('express');
 var router = express.Router();
 var User=require('../model/user_model');

router.get('/:user_name',function(req,res,next){
    User.getForgetPassword(req.params.user_name,function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    });
   });
   module.exports=router;