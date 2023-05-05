import React, { useEffect, useState } from 'react'
import './styles/Home.css'
import { useSelector,useDispatch } from 'react-redux'
import modalFunc from './redux/actions/modalFunc'
import { addTodo,deleteTodo } from './redux/actions'
import Modal from './Modal'
import Main from './Main'


const Home = () => {

  const dispatch = useDispatch();
  const myState= useSelector(state=>state.changeTodo)
  const mystate1 = useSelector(state=>state.changeState)

  const [state,setState]=useState(false);
  useEffect(()=>{
    setState(mystate1.state)
  },[mystate1.state])

  return (
    <>
    <div className='relative z-0 container1 bg-slate-950'>
        <div className='leftBar  bg-slate-900 text-white'>
        <div className='p-2'>
        <h1 className='text-2xl text-center mb-4'>To-Do List</h1>
        <button className='btn bg-purple-700 w-full h-12 text-lg rounded-lg' onClick={()=>{dispatch(modalFunc(true));setState(mystate1.state)}}> Add Task</button>
        </div>
        <div>

        </div>
        </div>
        <div className='main '>
      <Main/>
        </div>
        <div className='rightBar bg-slate-900'>

        </div>
    </div>
   {
    state?<Modal/>:<></>
   }
    </>
  )
}

export default Home