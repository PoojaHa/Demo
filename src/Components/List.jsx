import React from 'react';
import ListShow from './ListShow';

const List = ({list,setList}) => {

const handleDelete = (itemid) => {
      const filterArr = list.filter((list)=>{
        return  itemid!= list.id
      })
      setList(filterArr)
}

const UpdateText= ((id,text)=> {
    const updateTitle = list.map((lists)=>{
        if(lists.id === id){
            return {...lists,text}
        }
        return lists
    })
    console.log(updateTitle)
    setList(updateTitle)
})
    
    const renderitems =list.map((item)=>{
        return <ListShow key={item.id} item={item} handleDelete={handleDelete} UpdateText={UpdateText}/>
    })
  return (
    <div className='listItems'>
        {renderitems}
    </div>
  )
}

export default List