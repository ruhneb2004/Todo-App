import { useEffect, useRef, useState } from "react";
const name = "Benhur"
export const Todos = ({ todos, setTodos }) => {
  const [titleChange,setTitleChange] = useState(Array(todos.length).fill(""));
  const [readOnly,setReadOnly] = useState(Array(todos.length).fill(false))
  const [desChange,setDesChange] = useState(Array(todos.length).fill(""));
  const textAreaTitle = useRef();
  const textAreaDes = useRef();
  
  const handleChange = (key,elemChange,setChange,e) => {
    const newChange = [...elemChange];
    newChange[key] = e.target.value;
    console.log(newChange)
    setChange(newChange);
  }

  useEffect(() => {
    setTitleChange(todos.map((todo) => todo.title));
  }, [todos]);
   useEffect(() => {
    setDesChange(todos.map((todo) => todo.description));
  }, [todos]);

  const saveTodoOnBlur = (todo,key) => {
    fetch("http://localhost:3000/update", {
                    method: "PUT",
                    body: JSON.stringify({
                      id: todo._id,
                      title:titleChange[key],
                      description:desChange[key]
                    }),
                    headers: {
                      "Content-type": "application/json",
                    },
                  }).then(async(res)=>{
                    const data = await res.json();
                    console.log(data.msg)
                  })
                  console.log("done")
  }

  return (
    <div className="todo-main" onClick={()=>{
    }}>
      <div className="author">benhur</div>


      {todos.map((todo, key) => {
        return (
          <div key={key} className="singleTodo">
            


            <div className="outputText" style={{width:"100%"}} >
              <textarea spellCheck="false" className="editTit" style={{width:"90%" , textDecoration: todo.completed? "line-through rgba(0, 0, 0, 0.4)" : "none"}} readOnly={readOnly[key]} 
              value={titleChange[key]}
              onChange={(e) => {
                handleChange(key,titleChange,setTitleChange,e)
              }}
              ref={textAreaTitle}
              onBlur={()=>{
                console.log(titleChange[key])
                console.log(todo._id)
                saveTodoOnBlur(todo,key);
              }}/>
              <textarea spellCheck="false" ref={textAreaDes} className="editDes" style={{width:"93%" , textDecoration: todo.completed ? "line-through rgba(0, 0, 0, 0.4)" : "none"}} 
              readOnly={readOnly[key]} 
              value={desChange[key]}
              onChange={(e)=> {
                handleChange(key,desChange,setDesChange,e)
              }}
              onBlur={()=>{
                console.log("Benhur")
                saveTodoOnBlur(todo,key);
              }}
              
              />
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
                  const newReadOnly = [...readOnly];
                  newReadOnly[key] = true;
                  setReadOnly(newReadOnly);
                }
              }
              >
                {console.log(key)}
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
                  const newReadOnly = [...readOnly];
                  newReadOnly[key] = false;
                  setReadOnly(newReadOnly);
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



{/* <div className="outputText">
              <div className="title" style={{textDecoration: todo.completed? "line-through rgba(0, 0, 0, 0.4)" : "none"}} 
              onClick={()=>{
                const newEditable = Array(todos.length).fill(false)
                newEditable[key] = true;
                setEditable(newEditable);
                textAreaTitle.current.focus();
                console.log(textAreaTitle)
              }}>{todo.title} </div>
            <div className="description" style={{textDecoration: todo.completed ? "line-through rgba(0, 0, 0, 0.4)" : "none"}} 
            onClick={()=>{
              const newEditable = Array(todos.length).fill(false)
              newEditable[key] = true;
              setEditable(newEditable);
              console.log(textAreaDes.current)
              textAreaDes.current.focus();
              }}>{todo.description}</div>
            </div> */}
