import './App.css';
import {useState} from "react";

function App() {
  let planets=[
    {name:"Earth",isGasy:false},
    {name:'Mars',isGasy:false},
    {name:'Uranus',isGasy:true},
    {name:'Netpune',isGasy:false},
    {name:'Saturn',isGasy:true},
    {name:'Pluto',isGasy:false}
  ];

  let [counter,setCounter]=useState(0)
  let [message,setMessge]=useState("")
  let [show,setShow]=useState(true)
  let [password,setPassword]=useState("")

  let increment=()=>
  {
    setCounter(counter+1)
  }

  let decrement=()=>
  {
    setCounter(counter-1)
  }

  let setZero=()=>
  {
    setCounter(0)
  }
  // setTimeout(changeIt,2000);

  let showhide=()=>
  {
      show===false ? setShow(true):setShow(false)
  }
  

  return (
    <div className="App">

      {planets.map((planet,key)=>
      {
        return  <h2>{planet.name}<small>-{planet.isGasy? "is Gasy":"is Not Gasy"}</small></h2>

      })}
      <h1>{counter}</h1>
      <button onClick={increment}>Click me</button>
      <h1>{show===false? message:null}</h1>
      {show===false ? <input type="text" onChange={(e)=>{setMessge(e.target.value);}}/>:<input type="password" onChange={(e)=>{setMessge(e.target.value);}}/>}
      <button onClick={showhide}>show/hide</button>
      <div className='row'>
        <button onClick={increment}>Increment</button>
        <button onClick={setZero}>Set to Zero</button>
        <button onClick={decrement}>Decrement</button>
      </div>
      <h2>Counter Value: {counter}</h2>
    </div>
  );
}

export default App;
