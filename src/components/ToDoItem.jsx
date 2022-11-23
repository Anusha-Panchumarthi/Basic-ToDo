import React from "react";

export default function ToDoItem({todo, handleClick}){
    return(
        <div id={todo.id} key={todo.id + todo.taskk} onClick={handleClick} className={todo.completed?"line-through cursor-pointer":"cursor-pointer"}>{todo.taskk}
        </div>
    );
}