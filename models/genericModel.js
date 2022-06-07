var db = require('../db')

var genericModel ={
    getAllCompany : function(result){
        db.query("SELECT * FROM company",function(err,res){
            if(err) {
                return result(err,null);
            }
            else{
             return result(null,res);
            }
        })
    },
    adddepartment : function(result){
        db.query("insert into department",function(err,res){
            if(err) {
                return result(err,null);
            }
            else{
             return result(null,res);
            }
        })
    }  

}
module.exports = genericModel