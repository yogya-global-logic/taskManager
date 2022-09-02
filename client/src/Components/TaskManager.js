import {useEffect, useState} from 'react'
import axios from "axios"
import PendingComponent from './PendingComponent'
import CompletedComponent from './CompletedComponent'

const TaskManager=()=>{
    const [tododata,setData]=useState([])
    const [taskname,settaskname]=useState("")
    const [taskid,settaskid]=useState()
    const [stalker,setStalker]=useState(false)
   
    useEffect(()=>{
        axios.get(`/getalltask`).then((res)=>{
            console.log(res)
        setStalker(false)
        setData(res.data)}).catch((e)=>console.log(e))
    },[stalker])
    const getCompletedTask=()=>{
        const result=tododata.filter((item)=>item.completionstatus===true)
        return result
    }
    const getPendingTask=()=>{
        const result=tododata.filter((item)=>item.completionstatus===false)
        return result
    }
    const handleName=(e)=>{
        settaskname(e.target.value)
    }
    const handleId=(e)=>{
        settaskid(e.target.value)
    }
    const handleCreate=(e)=>{
        e.preventDefault()
        axios.post(`/createtask`,{
            taskid:taskid,
            taskname:taskname,
            completionstatus:false
        }).then((res)=>{
            setStalker(true)
        }).catch((e)=>console.log(e))
    }
    const changeCompletion=(e,taskid)=>{
        e.preventDefault()
        axios.get(`/changecompletion/${taskid}`).then((res)=>setStalker(true)).catch((e)=>console.log(e))
    }
    return(
        <div>
            <h1>Hello there</h1>
            <form>
                Enter Taskname:<input type='text' onChange={(e)=>handleName(e)}></input>
                Enter id:<input type='number' onChange={(e)=>handleId(e)}></input>
                <button onClick={(e)=>handleCreate(e)}>create task</button>
            </form>
            <PendingComponent data={getPendingTask()} cc={changeCompletion}></PendingComponent>
            <CompletedComponent data={getCompletedTask()} cc={changeCompletion}></CompletedComponent>
        </div>
    )
}
export default TaskManager