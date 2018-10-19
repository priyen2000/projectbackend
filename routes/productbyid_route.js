var express = require("express");
var router = express.Router();
var product = require("../model/product_model");
router.get('/:pro_id',function(req,res,next){
    product.getProductById(req.params.pro_id,function(err,rows){
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
   module.exports = router;