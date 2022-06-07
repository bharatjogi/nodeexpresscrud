var companyModel= require('../models/companyModel');
var api=function(){}

api.index=function(req,res,next){
    companyModel.getAllCompany(function(err,companies){
        if(err){
                throw err;
        }else{
            res.send(companies);
        }
       
    });
}
api.getbyid=function(req,res){
    var companyId=req.params.id;
    companyModel.findCompanyById(companyId,function(result){
        if(result==null){
            req.flash('error','Sorry the company doesnot exists!!');
            res.redirect('/company');
        }else{
          res.send(result);
        }
    })
}
api.add=function(req,res,next){
    res.render('company/add',{title:'Add Company'});
}
api.test=function(req,res,next){
     
    const body= req.body; 
    res.send(req.rawHeaders)
}
api.addCompany=function(req,res){
    req.assert('name', 'Name is required').notEmpty(); 
    req.assert('location', 'Location is required').notEmpty()      
 
    var errors = req.validationErrors();
    if( !errors ) {
        var newTask={
            name:req.sanitize('name').escape().trim(),
            location:req.sanitize('location').escape().trim(),
        }
        companyModel.insertCompany(newTask,function(err){
            if(err){
                res.send('Failed while adding company details')
        }else{
            res.send(JSON.stringify({"status":"success","disc":"successfuly added company details"}))
        }
        });
    }else{
        var err_msg="";
        errors.forEach(function(err){
            err_msg+=err.msg+"<br/>";
        })
         res.send('error', err_msg);
    }
}
module.exports=api