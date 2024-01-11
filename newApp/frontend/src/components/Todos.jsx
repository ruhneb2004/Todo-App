import { useState } from "react";

export const Todos = ({ todos, setTodos }) => {
  return (
    <div className="todo-main">
      {todos.map((todo, key) => {
        return (
          <div key={key} className="singleTodo">
            <div>{todo.title}</div>
            <div>{todo.description}</div>
          <div>
            <button
              onClick={() => {
                fetch("http://localhost:3000/completed", {
                  method: "PUT",
                  body: JSON.stringify({
                    id: todo._id,
                  }),
                  headers: {
                    "Content-type": "application/json",
                  },
                }).then(()=>{
                  fetch("http://localhost:3000/todos").then(async (res) => {
                  const data = await res.json();
                  setTodos(data.todos)
                });
                })
              }}
            >
              {todo.completed === true ? "completed" : "complete"}
            </button>
            <button
              onClick={() => {
                try {
                   fetch("http://localhost:3000/delete", {
                    method: "DELETE",
                    body: JSON.stringify({
                      id: todo._id,
                    }),
                    headers: {
                      "Content-type": "application/json",
                    },
                  }).then(()=>{
                    fetch("http://localhost:3000/todos")
                    .then(async(res)=>{
                      const data = await res.json();
                      setTodos(data.todos)
                    })
                  })
                   
                } catch (err) {
                  console.log(err);
                }
              }}
            >
              Remove
            </button>
          </div>
            
          </div>
        );
      })}
    </div>
  );
};
