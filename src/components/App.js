
import React, { useState } from "react";
function App(){
    const[item, setItem] = useState('')
    const[todos, setTodos] =useState([])

    const handleItem =(event)=>{
        event.preventDefault()
      
        if(item){
            setTodos([...todos, item ])
            setItem("")
        }
    }

    return <div className="container">
        <h1 style={{textAlign: "center",marginTop:"20px"}}>Our list of Todos</h1>
    <div className="form">
    <form>
        <label>Enter item</label> <br />
        <input type="text" value={item} onChange={(event) =>
        {
            setItem(event.target.value)
        }}/>
        <button onClick={handleItem}>Add</button>
    </form>
</div>
{
 todos.map((todo, index)=>(
<div className="item-parent">
        <div className="item">
            <h4>{todo}</h4>
        </div>
    </div>
))
}
</div>

};

export default App;