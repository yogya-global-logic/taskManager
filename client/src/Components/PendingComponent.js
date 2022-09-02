function PendingComponent(props){
    return(
        <div>
           
            <h3>Pending Tasks</h3>
            {
                props.data.map((item)=>(
                    <div>
                        <p>{item.taskname}</p>
                        <button onClick={(e)=>props.cc(e,item.taskid)}>mark completed</button>
                        <button>delete</button>
                    </div>
                ))
            }
        </div>
    )
}
export default PendingComponent