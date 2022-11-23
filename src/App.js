import React from 'react';
import './App.css';
import { useState } from 'react';
import ToDo from './components/ToDo';
import ToDoForm from './components/ToDoForm';
function App() {
  var idd = 0
  
  const [list, setList] = useState([])

  function addTask(tasks){
    console.log(tasks)
    
    let copy = [...list]
    copy = [...list, {id: list.length+1, taskk: tasks, completed: false}]
    setList(copy)
    console.log(list)
    
  }

  

  function handleToggle(id){
      let mapped = list.map((item)=>{
        return id == item.id ? {...item, completed: !item.completed}: {...item}
      })
      setList(mapped)
  }

  function clearTasks(){
    let filtered = list.filter((item)=>(!item.completed))
    setList(filtered)
  }

  return (
    <>
    
    <div className='flex flex-col justify-center items-center '>
    <h1 className='text-7xl m-1 text-white font-lobster my-4' id='hdr'>Todo App</h1>
      <div className='container m-3 w-6/12 font-poppins text-gray-300 h-150 border-2 border-zinc-500 bg-stone-900/40 rounded-md p-10 justify-center '>
        
        <ToDoForm addTask={addTask}/>
        <ToDo toDoList = {list} handleToggle = {handleToggle}/>
        <button className='border rounded-lg p-1.5 m-3' onClick={clearTasks}>Clear Completed</button>
      </div>
    </div>
    </>
  );
}

export default App;
