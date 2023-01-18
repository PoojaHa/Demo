
import { useState } from 'react';
import './App.css';
import Task from './Components/Add';
import List from './Components/List';

function App() {
  const [list,setList]=useState([]);

  const AddItems =(text)=>{
  const AddingItems =[...list,{id:Math.round(Math.random()*9999),text}]
  setList(AddingItems)
}
return (
    <div className="App">
     <Task AddItems={AddItems}/>
     <List list={list} setList={setList}/>
    </div>
  );
}

export default App;
