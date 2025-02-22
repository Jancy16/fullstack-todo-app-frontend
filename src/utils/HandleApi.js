import axios from 'axios'
const baseurl ="https://fullstack-todo-app-backend-b6ba.onrender.com"
const getAlltodo = (SetToDo) =>{
    axios.get(baseurl).then(({data})=>{
        console.log('data--->',data);
        SetToDo(data)
    })
}
const addtodo =(text,setText,SetToDo)=>{
    axios.post(`${baseurl}/save`,{text})
    .then((data)=>{
        console.log(data);
        setText("")
        getAlltodo(SetToDo)
    })
    .catch((err)=>console.log(err))
}
    const updatetodo =(todoId,text,setText,SetToDo,setisUpdating)=>{
        axios.post(`${baseurl}/update`,{_id:todoId,text})
        .then((data)=>{
            
            setText("")
            setisUpdating(false)
            getAlltodo(SetToDo)
           
        })
        .catch((err)=>console.log(err))
    }
    const deletetodo =(_id,SetToDo)=>{
        axios.post(`${baseurl}/delete`,{_id})
        .then((data)=>{
            console.log(data)
            getAlltodo(SetToDo)
           
        })
        .catch((err)=>console.log(err))
    }

export{getAlltodo,addtodo,updatetodo,deletetodo}