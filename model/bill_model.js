var db=require('../dbconnection');
var bill={
    getAllBills:function(callback){
        return db.query("select * from  bill_tbl",callback);
    },
    // getProductById:function(pro_id,callback){
    //     return db.query("select * from product_tbl  where pro_id=?",[pro_id],callback);
    // },
    addNewBill:function(item,callback){
        var d=new Date(Date.now());
        // return db.query("insert into bill_tbl values(?,?,?,?,?,?,?)",[item.bill_id,item.bill_amount,d,item.delivery_date,item.fk_user_id,item.fk_pro_id,item.qty],callback);
        return db.query("insert into bill_tbl(bill_amount,date,fk_user_id) values(?,?,?)",[item.bill_amount,d,item.fk_user_id],callback);
    },
    getUserNameByBill:function(callback){
        return db.query("select b.*,u.* from bill_tbl b,user_tbl u where u.user_id=b.fk_user_id",callback);
    },
};
module.exports=bill;