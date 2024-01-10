import { useState } from "react";

export const Todos = ({ todos }) => {
  return (
    <div>
      {todos.map((todo, key) => {
        return (
          <div key={key}>
            <div>{todo.title}</div>
            <div>{todo.description}</div>

            <button
              onClick={async () => {
                fetch("http://localhost:3000/completed", {
                  method: "PUT",
                  body: JSON.stringify({
                    id: todo._id,
                  }),
                  headers: {
                    "Content-type": "application/json",
                  },
                });
              }}
            >
              {todo.completed === true ? "completed" : "complete"}
            </button>
            <button
              onClick={async () => {
                fetch("http://localhost:3000/delete", {
                  method: "DELETE",
                  body: JSON.stringify({
                    id: todo._id,
                  }),
                  headers: {
                    "Content-type": "application/json",
                  },
                }).then(() => {
                  console.log("failed");
                });
              }}
            >
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
};

