const express = require('express')
const taskManagerModel = require('../models/TaskManagerModel')
const Router = express.Router()
Router.get('/changecompletion/:tid',async (req,res)=>{
    try{
        const tid=req.params.tid
        const data=await taskManagerModel.findOne({taskid:tid})
        const result=await taskManagerModel.findOneAndUpdate({taskid:tid},{completionstatus:!data.completionstatus})
        console.log(result)
        res.send(result)
    }
    catch(e){
        res.send({msg:"some err occured"})
    }
})
module.exports=Router