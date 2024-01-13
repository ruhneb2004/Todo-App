// import { useEffect, useState } from "react";
// const name = "Benhur"
// export const Todos = ({ todos, setTodos }) => {
//   const [titleEditable,setTitleEditable] = useState(Array(todos.length).fill(false));
//   const [desEditable,setDesEditable] = useState(Array(todos.length).fill(false));
//   return (
//     <div className="todo-main" onClick={()=>{
//       console.log("name")
//     }}>
//       <div className="author">benhur</div>


//       {todos.map((todo, key) => {
//         return (
//           <div key={key} className="singleTodo">
            
//             {titleEditable[key] === false ? 
//             (<div className="outputText">
//               <div className="title" style={{textDecoration: todo.completed? "line-through rgba(0, 0, 0, 0.4)" : "none"}} 
//               onClick={()=>{
//                 const newTitleEditable = [...titleEditable];
//                 newTitleEditable[key] = true;
//                 setTitleEditable(newTitleEditable);
//                 // console.log(setTitleEditable)
//               }}>{todo.title} </div></div>):(<div className="outputText" style={{width:"100%"}} >
//               <textarea className="editTit" style={{width:"90%"}} 
//               onBlur={()=>{
//                 const newTitleEditable = [...titleEditable];
//               newTitleEditable[key] = false;
//               setTitleEditable(newTitleEditable);
//               }}/></div>)}


//             {desEditable[key] === false ? 
//             (<div className="outputText">
//               <div className="description" style={{textDecoration: todo.completed? "line-through rgba(0, 0, 0, 0.4)" : "none"}} 
//               onClick={()=>{
//                 const newDesEditable = [...desEditable];
//                 newDesEditable[key] = true;
//                 setDesEditable(newDesEditable);
//                 // console.log(setTitleEditable)
//               }}>{todo.description} </div></div>):(<div className="outputText" style={{width:"100%"}} >
//               <textarea className="editDes" style={{width:"90%"}} 
//               onBlur={()=>{
//                 const newDesEditable = [...desEditable];
//               newDesEditable[key] = false;
//               setDesEditable(newDesEditable);
//               }}/></div>)}


//             {/* <div className="description" style={{textDecoration: todo.completed ? "line-through rgba(0, 0, 0, 0.4)" : "none"}} 
//             onClick={()=>{
//               const newEditable = [...editable];
//                 newEditable[key] = true;
//                 setEditable(newEditable);
//               }}>{todo.description}</div>
//             </div>)
//             :(
            
//               <textarea className="editDes" style={{width:"93%"}} 
//               onBlur={()=>{
//                 const newEditable = [...editable];
//               newEditable[key] = false;
//               setEditable(newEditable);
//               }}/>
//               </div>)} */}

//             <div className="btn-elem">
//               <button className="complete-btn"
//                 onClick={() => {
//                   fetch("http://localhost:3000/completed", {
//                     method: "PUT",
//                     body: JSON.stringify({
//                       id: todo._id,
//                     }),
//                     headers: {
//                       "Content-type": "application/json",
//                     },
//                   }).then(()=>{
//                     fetch("http://localhost:3000/todos").then(async (res) => {
//                     const data = await res.json();
//                     setTodos(data.todos)
//                   });
//                   })
//                 }}
//               >
//                 {console.log(key)}
//                 {todo.completed === true ? "Completed" : "Complete"}
//               </button>
//               <button
//               className="remove-btn"
//                 onClick={() => {
//                   try {
//                     fetch("http://localhost:3000/delete", {
//                       method: "DELETE",
//                       body: JSON.stringify({
//                         id: todo._id,
//                       }),
//                       headers: {
//                         "Content-type": "application/json",
//                       },
//                     }).then(()=>{
//                       fetch("http://localhost:3000/todos")
//                       .then(async(res)=>{
//                         const data = await res.json();
//                         setTodos(data.todos)
//                       })
//                     })
                    
//                   } catch (err) {
//                     console.log(err);
//                   }
//                 }}
//               >
//                 Remove
//               </button>
//             </div>
              
//           </div>
//         );
//       })}
//     </div>
//   );
// };
