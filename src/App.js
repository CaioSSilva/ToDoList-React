import { useState } from "react";
import './App.css'
function App() {
  let [value, setValue] = useState("")
  let [task, setTask] = useState([])
  
  function adicionaTask(){
    if(value !== ''){
      setTask([...task,value])
      setValue("")
    }
  }
  function removeTask(index){
    let taskArr = [...task]
    taskArr.splice(index,1)
    setTask(taskArr)
  }
  return (
    <>
      <div className="search-container">
        <input className="text-input" value={value} required type={'text'} onChange={input => setValue(input.target.value)} maxLength={40}/>
        <button onClick={adicionaTask}><img src={'https://cdn-icons-png.flaticon.com/512/1237/1237946.png'}/></button>
      </div>
      <div className="tasks-container">
        {task.map((item,index) =>
          <li key={index}>
            <h2>{item}</h2>
            <button onClick={()=> removeTask(index)}>Remover</button>
          </li>
        )}
      </div>
    </>
  );
}

export default App;
