import React from 'react'
import Header from './Header';
import Localtask from './Localtask';
import Globaltask from './Globaltask';

const Main = () => {

  return (
    <div className='text-white '>
      <div className='h-[20vh]'>
     <Header/>
     </div>
     <div className='h-[40vh] overflow-y-scroll p-2 scrollbar-thin scrollbar-track-purple-400 scrollbar-thumb-slate-700'>
     <Localtask/>
     </div>
     <div className='h-[40vh] p-2'>
     <Globaltask/>
     </div>
    </div>
  )
}

export default Main