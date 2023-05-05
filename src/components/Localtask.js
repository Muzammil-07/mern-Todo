import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Cards from './Cards';
const Localtask = () => {
    const myState=useSelector(state=>state.changeTodo);
    const [view,setView]=useState("<h1>Hello World</h1>");
    
    useEffect(()=>{
     let subscribe = true;
     if(subscribe){
      var arr=myState.arr;
     
       setView(
        <div className='flex gap-2 flex-wrap justify-center'> 
            {
                arr.map((doc,index)=>{
                  return(
                    <Cards title={doc.title} des={doc.des} date={doc.date} isComplete={doc.isComplete} key={index} id={doc.id}/>
                  )
                })
            }
        </div>
       )
     }
     return()=>{subscribe=false}
    },[myState])

  return (
    <div>
        <h1 className='text-2xl text-purple-600 font-bold'>Local Tasks</h1>
      {view}
    </div>
  )
}

export default Localtask