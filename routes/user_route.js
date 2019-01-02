var express = require('express');
 var router = express.Router();
 var User=require('../model/user_model');
 router.post('/:user_name',function(req,res,next){
    User.getLogin(req.params.user_name,req.body,function(err,rows){
     if(err)
      {
      res.json(err);
      }
      else{
      res.json(rows);
      }
      });
      
     
});
    
module.exports=router;
