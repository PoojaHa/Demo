import React from 'react'
import { useState } from 'react'

const Add = ({AddItems}) => {
  const [text,setText] =useState('');

  const handleAdd =(e)=>{
     e.preventDefault();
     AddItems(text)
  }
  return (
    <div className='container'>
      <div className='boxitems'>
         <div className='box'>
          <h1>TODO-LIST</h1>
           <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
              <button onClick={handleAdd}>Add</button>
        </div>
      </div>
    
    </div>
  )
}

export default Add