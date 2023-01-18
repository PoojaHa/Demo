import React from 'react'
import { useState } from 'react'
import EditForm from './EditForm'

const ListShow = ({item,handleDelete,UpdateText}) => {
  const [open,setOpen] =useState(false)

    const handleDeleteItem=()=>{
        handleDelete(item.id)
    }
    const handleEditItem =()=>{
        setOpen(!open)
    }

    const handleSave =()=>{
        setOpen(false)
    }
     
    
    let content =<p className='ptext'>{item.text}</p>
    if(open){
        content =<EditForm item={item} UpdateText={UpdateText} handleSave={handleSave}/>
    }
    
   
  return (
    <div className='list'>
    <div className='content'>{content}</div>
    <button onClick={handleDeleteItem} className="btn1">Delete</button>
    <button onClick={handleEditItem} className="btn2">Edit</button>
    </div>
  )
}

export default ListShow