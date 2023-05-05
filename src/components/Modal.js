
import React, { useEffect, useState } from 'react'
import './styles/Home.css'
import { useSelector,useDispatch } from 'react-redux'
import { addTodo,deleteTodo } from './redux/actions'
import modalFunc from './redux/actions/modalFunc'



const Modal = () => {
    const myState= useSelector(state=>state.changeTodo)
    const myState1 = useSelector(state=>state.changeState)
    const [title,setTitle]=useState('');
    const [des,setDes]=useState('');
    const[spec,setSpec]=useState('local')
    const [state,setState]=useState(true)
    const dispatch = useDispatch();
    var date= new Date().toLocaleDateString();

    useEffect(()=>{
setState(myState1.state)
    },[myState1])
    const handleAdd=()=>{
      if(title==''|| des==""){
        alert("Please add values")
      }else{
      if(spec=="local"){

        dispatch(
          addTodo({
            title:title,
            des:des,
            isComplete:false,
            date,
            id:Math.round(Math.random()*1000) 
          })

        )
        setState(false)
      }else {
        alert("you are global")
      }

      }

      }
  return (
    <div className={state?'fixed  z-1 top-[20%] md:right-[30%] md:w-[450px]  shadow-md shadow-black text-white bg-slate-600  rounded-xl':'hidden'}>
      <div className='flex justify-end'>
        <button className='m-4 hover:text-xl' onClick={()=>{dispatch(modalFunc(false)); setState(false)}} >X</button>
      </div>
      <div className='flex flex-col gap-3 justify-around h-full items-center'>
      <h2 className='text-center mt-4 text-lg'>Add Task</h2>
      <label className='text-2xl'>
        Task title &nbsp;
        <input type='text' placeholder='title' className='bg-transparent border border-spacing-2 border-blue-50' onChange={(e)=>{setTitle(e.target.value)}}/>
      </label>
      <label className='text-2xl'>
      Task des
         &nbsp;
        <input type='text' placeholder='description' className='bg-transparent  border border-spacing-2 border-blue-50 mt-2' onChange={(e)=>{setDes(e.target.value)}}/>
      </label>
      <label className='text-2xl'>
        Task type
        &nbsp;
      <select defaultValue="localTask" className='w-[260px] bg-transparent ' onChange={(e)=>{setSpec(e.target.value)}}>
        <option value="local" defaultChecked={true} className='text-black'>Local task</option>
        <option value='global' className='text-black'>Global Task</option>
      </select>
      </label>
      <button className='bg-purple-800 w-[250px] h-[50px] mt-4' onClick={()=>{handleAdd()}}>Add Task </button>
     <div>
      Note
      <ol className='list-disc mb-4'>
        <li>Local Task Will be save in your Local device</li>
        <li>Global Task Will be save on Database</li>
      </ol>
      </div>
      </div>

    </div>
  )
}

export default Modal