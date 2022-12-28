import './App.css';
import {useState} from "react";

function App() {

  let [todoList,setTodlist]=useState([]);
  let [newTask,setNewtask]=useState("");

  let handlechange=(e)=>
  {
    setNewtask(e.target.value)
    console.log("new task added is :",newTask)
  };

  let addTask=()=>
  {
    let task=
      {
        id:todoList.length===0 ? 1:todoList[todoList.length-1].id+1,
        taskName:newTask,
        isComplete:false,
      };

    setTodlist([...todoList,task])
    console.log("Task object is:",task)
    console.log("Full task list is :",todoList)
  };

  let deleteTask=(item)=>
  {
    let newTodoList=todoList.filter((it)=>it.id!==item );
    console.log("latest list is:",newTodoList)
    setTodlist(newTodoList)
    console.log("deteting")
  }

  //gets id of the element
  let complete=(id)=>
  {
    setTodlist(todoList.map((item)=>
    {
      if(item.id===id)
      {
        return {...item,isComplete:true}
      } 
      else{
        return item
      }
    })
  )};



  return (
    <div className="App text-center">
    <div className='addTask w-75' style={{backgroundColor:"#8888"}}>
      <input type="text" onChange={handlechange}/>
      <button onClick={addTask}>Add Task</button>
    </div>
    <div className='list'>
    {todoList.map((list)=>
    {
      console.log(list.id)
      console.log(list.taskName)
      return (
      <div className='row justify-content-center' style={{backgroundColor: list.isComplete ? "green":"grey" }}>
        <h1>{list.taskName}</h1>
        <button className='btn btn-primary' onClick={()=>complete(list.id)}>complete</button>
        <button className='btn btn-primary' onClick={()=>deleteTask(list.id)}>x</button>
        </div>
      )
    })
    };
    </div>
    </div>
  );
}

export default App;
