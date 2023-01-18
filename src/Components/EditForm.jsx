import React from 'react'
import { useState } from 'react'

const EditForm = ({item,UpdateText,handleSave}) => {
    const [text,setText] =useState(item.text);

    const SaveEditFrorm=(e)=>{
        e.preventDefault();
        UpdateText(item.id,text);
         handleSave();
     }
     console.log(text)
  return (
    <div className='edit'>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
        <button onClick={SaveEditFrorm} className="btn1">Save</button>
    </div>
  )
}

export default EditForm