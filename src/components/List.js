import {useState, useEffect} from 'react'
import FormList from './todoList/FormList'
import Form from './todoList/Form'
import "../App.css"

function List() {

    const[items, setItems] = useState([
        {mission: "Make your bed!", completed: true},
        {mission: "Have breakfast", completed: false},
        {mission: "Go to the gym", completed: false},
        {mission: "Study", completed: false},
    ])

    useEffect(() => {}, [items])
    

  return (
    <div className='asd'>
      
    <div className="index">
        <h1>TODO List</h1>
        <hr/>
        <Form items ={items} setItems={setItems}/>
        <FormList items ={items} setItems={setItems} />
    </div>
    
    </div>
  )
}

export default List