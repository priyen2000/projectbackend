var db=require('../dbconnection');
var order={
    getAllOrder:function(callback){
        return db.query("select * from  order_tbl",callback);
    },
    deleteAllOrder:function(item,callback){
        console.log(item);
        var delarr=[];
        for(i=0;i<item.length;i++)
        {
            delarr[i]=item[i].order_id;
           
        }
        console.log(delarr);
    return db.query("delete from order_tbl where order_id in (?)",[delarr],callback);
    },
    deleteOrder:function(id,callback){
   
        return db.query("delete from order_tbl where order_id in (?)",[id],callback);
    },
    UpdateStatus:function(item,callback){
        return db.query("update order_tbl set status=? where order_id=?",[item.status,item.order_id],callback);
    },
    getOrderByUserName:function(user_name,callback){
        return db.query("select o.*,p.*,u.* from order_tbl o,product_tbl p,user_tbl u where o.fk_pro_id=p.pro_id And o.fk_user_id=u.user_id And u.user_name=?",[user_name],callback);
    },
   
     addOrder:function(item,callback){
        var d=new Date(Date.now());
        return db.query("insert into order_tbl values(?,?,?,?,?,?,?)",[item.order_id,item.fk_pro_id,item.fk_user_id,item.order_amount,d,item.status,item.qty],callback);
    },
    // getMaxOrder:function(callback){
    //     return db.query("select o.*,MAX(order_amount) from order_tbl o",callback);
    // }
    getTodaysOrder:function(callback){
        var d=new Date(Date.now());
         return db.query("select * from order_tbl where order_date=d",callback);
    },
    getTopOrder:function(callback){
        return db.query("select * from order_tbl LIMIT 5",callback);
    }
};
module.exports=order;