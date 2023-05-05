export const addTodo = (props)=>{
    return{
        type:"ADD",
        payload:props
    }
}
export const deleteTodo = (props)=>{
    return{
        type:"DELETE",
        payload:props
    }
}
export const updateTodo = (props)=>{
  
    return{
        type:"UPDATE",
        payload:props
    }
}