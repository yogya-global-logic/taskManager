const express = require('express')
const Router = express.Router()
const taskManagerModel = require('../models/TaskManagerModel')

// id -> that todo item should be deleted

Router.get('/deleteTask/:taskid', async (req, res) => {
    const input = req.params.taskid
    try {
        const result = await taskManagerModel.deleteOne({ taskid: input })
        if (result.deletedCount > 0) {
            res.send({"msg":"task is deleted"})
        }
        else {
            res.send({"msg":"task details does not exists"})
        }
    }
    catch (e) {
        res.send({"msg":"some error occured"})
    }
})
module.exports = Router