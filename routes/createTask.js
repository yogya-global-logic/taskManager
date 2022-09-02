const express = require('express')
const Router = express.Router()
const taskManagerModel = require('../models/TaskManagerModel')

Router.post('/createtask', (req, res) => {
    const data = req.body
    const taskdata = new taskManagerModel({
        taskid: data.taskid,
        taskname: data.taskname,
        completionstatus: data.completionstatus
    })
    taskdata.save()
        .then((result) => res.send({"msg":"Created Successfully"}))
        .catch((err) => res.send({"msg":"Not Created"}))
})

module.exports = Router