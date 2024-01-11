import { useState } from "react";
export const CreateTodo = ({ setTodos, todos }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (

      <div className="main">
        <div className="app-name">Todo App</div>
        <input
          className="titleInput"
          type="text"
          spellCheck="false"
          placeholder="Put it in and Do it (In a good way😇)"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />{" "}
        <input
          type="text"
          className="desInput"
          placeholder="Watchu wanna do?"
          spellCheck="false"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />{" "}
        <button
         className="add-btn"
          onClick={() => {
            fetch("http://localhost:3000/todo", {
              method: "POST",
              body: JSON.stringify(
                {
                  title: title,
                  description: description,
                },
                {
                  new: true,
                },
              ),
              headers: {
                "Content-type": "application/json",
              },
            }).then(() => {
              try {
                fetch("http://localhost:3000/todos").then(async (res) => {
                  const data = await res.json();
                  setTodos(data.todos);
                });
              } catch (err) {
                console.log(err);
              }
            });
          }}
        >
          Add Todo
        </button>
      </div>
      
  );
};
