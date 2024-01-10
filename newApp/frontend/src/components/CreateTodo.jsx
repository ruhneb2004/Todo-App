import { useState } from "react";
export const CreateTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="main-cover">
      <div className="main">
        <input
          className="inBox"
          type="text"
          placeholder="title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />{" "}
        <br />
        <input
          type="text"
          placeholder="description"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />{" "}
        <br />
        <button
          onClick={() => {
            fetch("http://localhost:3000/todo", {
              method: "POST",
              body: JSON.stringify({
                title: title,
                description: description,
              }),
              headers: {
                "Content-type": "application/json",
              },
            }).then(async (res) => {
              const data = await res.json();
              console.log(data);
            });
          }}
        >
          Add Todo
        </button>
      </div>
    </div>
  );
};
