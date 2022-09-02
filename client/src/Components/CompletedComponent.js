function CompletedComponent(props){
    return(
        <div>
         
            <h3>Completed Task</h3>
            {
                props.data.map((item)=>(
                    <div>
                        <p>{item.taskname}</p>
                        <button onClick={(e)=>props.cc(e,item.taskid)}>mark incomplete</button>
                        <button>delete</button>
                    </div>
                ))
            }
        </div>
    )
}
export default CompletedComponent