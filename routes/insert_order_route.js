var express = require("express");
var router = express.Router();
var order = require("../model/order_model");
router.post('/',function(req,res,next){
    order.addOrder(req.body,function(err,rows){
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
