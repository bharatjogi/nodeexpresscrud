
var genericmodel = require('../models/genericModel.js')

var genericapi = {
    $sendMSG :function(req,res,next){
        genericmodel.getAllCompany(function(error,result){
            if(error){
                throw error
            } else{
                res.send(result)
            }
                    })
     
    },
    addDep :function(req,res,next){
        var depdata = req.body
        genericmodel.adddepartment(function(error,result){
            if(error){
                throw error
            } else{
                res.send(result)
            }
                    })
     
    }
}

module.exports = genericapi;