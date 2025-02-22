import { useEffect, useState } from "react";
import ToDo from "./components/todo";
import { addtodo, getAlltodo,updatetodo,deletetodo } from "./utils/HandleApi";

function App() {
  const [todo,SetToDo] = useState([])
  const[text,setText] = useState("")
  const[isUpdating,setisUpdating] = useState(false)
  const[todoId,settodoId]= useState("")
  useEffect(()=>{
    getAlltodo(SetToDo)},[])
    const updateMode = (_id ,text)=>{
      setisUpdating(true)
      setText(text)
      settodoId(_id)
    }
  return (
    <div className="App">
      <div className="container">
        <h1>ToDo App</h1>
        <div className="top">
          <input type="text" placeholder="Add ToDo.."
          value={text}
          onChange={(e)=>setText(e.target.value)}/>
          <div className="add" 
          onClick={isUpdating ? 
          ()=> updatetodo(todoId,text,setText,SetToDo,setisUpdating)
          :()=>addtodo(text,setText,SetToDo)}>
            {isUpdating ? "Update": "Add"}</div>
        </div>
        <div className="list">
          {todo.map((item)=><ToDo 
          key={item._id}
          text={item.text}
          updateMode={()=>updateMode(item._id,item.text)}
          deletetodo={()=>deletetodo(item._id,SetToDo)}/>)}
        </div>
      </div>
      </div>

    
  );
}

export default App;
