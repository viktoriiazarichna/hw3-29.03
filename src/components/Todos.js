import React from 'react';


export function TodoList ({todos}) {


    return (
        <>
            {todos.map(todo => (

                <>
                    <div key={todo.id}></div>
                    <h3> {todo.title}  </h3>
                    <p>  {todo.completed.toString()} </p>
                </>

            ))}
            </>
    )
}