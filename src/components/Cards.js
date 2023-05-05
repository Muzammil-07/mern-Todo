import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo ,updateTodo} from './redux/actions';

const Cards = ({title,des,date,id,isComplete}) => {
    const dispatch = useDispatch();
    return (
        <div className='h-[200px] w-[200px] p-1 text-center rounded-lg hover:bg-purple-700 bg-slate-700 grid grid-cols-1 grid-rows-[1fr_2fr_1fr_1fr]'>
            <div className='text-lg uppercase'>{title}</div>
            <div className='capitalize'>{des}</div>
            <div>{date}</div>
            <div className='grid grid-cols-[1fr_1fr] gap-2 grid-rows-1'>
                <button className='btn hover:font-bold' onClick={()=>{dispatch(updateTodo({isComplete:!isComplete,id:id}))}}>
                <div className='bg-purple-950 rounded-md text-center '>
                    <h4 className='mt-2 text-sm'>
                      {isComplete? "Completed": "Uncomplete"}  
                    </h4>
                </div>
                </button>
                <div className='flex justify-around w-full items-center'>
                    <button onClick={()=>{dispatch(deleteTodo(id))}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash hover:text-black" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                    </svg></button>
                    <button className='btn '><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-three-dots-vertical hover:text-black" viewBox="0 0 16 16">
                        <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                    </svg></button>
                </div>
            </div>
        </div>
    )
}

export default Cards