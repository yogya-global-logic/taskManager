const express = require('express')
const taskManagerModel = require('../models/TaskManagerModel')
const Router = express.Router()



//able to see all the task with id
Router.get('/getalltask',async(req,res)=>{
try{
    const result=await taskManagerModel.find({})
    res.send(result)
}
catch(e){
    res.send('some error occured')
}
})

Router.get('/findtask/:tid', async (req, res) => {
    const input = req.params.tid
    try {
        const result = await taskManagerModel.findOne({taskid:input})
        res.send(result)
        
    }
    catch (e) {
        res.send('some error occured')
    }
})

//taskname as input

Router.get('/findbytaskname', async (req, res) => {
    console.log(req.query.taskname)
    const input = req.query.taskname
    try {
        const result = await taskManagerModel.find({ taskname: input })
        if (result.length !== 0) {
            res.send(result)
        }
        else {
            res.send({"msg":"this task details does not exist"})
        }
    }
    catch (e) {
        res.send("error")
    }
})
module.exports = Router