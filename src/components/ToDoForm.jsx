import React, { useState } from "react";

export default function ToDoForm({addTask}){
    const [user, setUser] = useState('')
    function handleChange(evt){
        setUser(evt.currentTarget.value)
    }

    function handleClick(evt){
        evt.preventDefault()
        console.log(user)
        addTask(user)
        setUser('')
    }

    return( 
        <div className="container">
        <label>Enter task: 
        <input type="text" value={user} className='ml-1 border-b-2 bg-transparent border-zinc-300' onChange={handleChange}/>
        </label>
        <button className='border rounded-lg p-1.5 m-3' onClick={handleClick}>Add Task</button>
        </div>
    )
}