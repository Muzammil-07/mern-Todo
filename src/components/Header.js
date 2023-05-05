import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import modalFunc from './redux/actions/modalFunc';
const Header = () => {
  const myState = useSelector(state=>state.changeState)
  const dispatch =useDispatch()
    const date = new Date().toLocaleDateString();
 
  return (
    <div className='flex flex-col items-center md:flex-row justify-between p-4 '>
    <div><label className='flex items-center '>
      <input type='text' className='bg-slate-600 rounded-lg text-lg pl-2 w-36' placeholder='Search task' />
      <button className=' btn bg-slate-600 h-[28px] w-[40] rounded-e-md'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search -ml-6 hover:text-purple-600" viewBox="0 0 16 16">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
      </svg></button>
    </label>
    </div>
    <p className='align-middle'>{date}</p>
    <button className='btn bg-purple-700 w-36 rounded-md hover:shadow-white shadow-md hover:font-bold' onClick={()=>{dispatch(modalFunc(true))}}>Add new Task</button>
  </div>
  )
}

export default Header