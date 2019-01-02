var db=require('../dbconnection');
var User={
    getAllUser:function(callback){
 
        return db.query("Select * from user_tbl",callback);
         
    },
      getLogin:function(user_name,item,callback){
         
            return db.query("Select * from user_tbl where user_name=? And password=?",[user_name,item.password],callback);
    },
    getForgetPassword:function(user_name,callback){
         
        return db.query("Select * from user_tbl where user_name=?",[user_name],callback);
}
        
}
module.exports=User;
