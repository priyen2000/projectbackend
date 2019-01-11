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
},
        AddUser:function(item,callback){
        let type='user';
                return db.query("insert into user_tbl(user_name,password,address,mobile_no,gender,city,type) values(?,?,?,?,?,?,?)",[item.user_name,item.password,item.address,item.mobile_no,item.gender,item.city,type],callback);
        },
        
        UpdateUser:function(id,item,callback){
                let type='User';
                 return db.query("update user_tbl set user_name=?,address=?,mobile_no=?,gender=?,city=?,type=? where user_id=?",[item.user_name,item.address,item.mobile_no,item.gender,item.city,type,id],callback)
        },

        deleteUser:function(id,callback){
           
                return db.query("delete from user_tbl where user_id in (?)",[id],callback);
          } ,
     
        deleteAllUser:function(item,callback){
                var delarr=[];
                for(i=0;i<item.length;i++)
                {
                    delarr[i]=item[i].user_id;
                }
            return db.query("delete from user_tbl where user_id in (?)",[delarr],callback);
            },
        
        
        getUserById:function(id,callback){
                return db.query("select * from user_tbl where user_id=?",[id],callback);
        },
        UpdatePassword:function(item,callback){
                return db.query("update user_tbl set password=? where user_name=?",[item.password,item.user_name],callback);
        }
        
}
module.exports=User;
