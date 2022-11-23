
import React from "react";
import ToDoItem from "./ToDoItem";
export default function ToDo({toDoList, handleToggle}){
    
    function handleClick(e){
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }

    return(
        <div className="container h-2/5">
        <ul>
            {toDoList.map((item)=>{
                return(
                    <ToDoItem todo={item} handleClick={handleClick}/>
                )
            })}
        </ul>
        </div>
    );
}

