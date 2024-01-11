import { useEffect, useState } from "react";
export const Todos = ({ todos, setTodos }) => {
  return (
    <div className="todo-main">
      <div className="author">benhur</div>
      {todos.map((todo, key) => {
        return (
          <div key={key} className="singleTodo">
            <div className="outputText">
              <div className="title" style={{textDecoration: todo.completed? "line-through rgba(0, 0, 0, 0.4)" : "none"}}>{todo.title} </div>
            <div className="description" style={{textDecoration: todo.completed ? "line-through rgba(0, 0, 0, 0.4)" : "none"}}>{todo.description}</div>
            </div>
            
            <div className="btn-elem">
              <button className="complete-btn"
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
                {todo.completed === true ? "Completed" : "Complete"}
              </button>
              <button
              className="remove-btn"
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
