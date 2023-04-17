import react, { useState } from "react";
import Card from "./UI/Card";


function AddUser(){

const [name,setName]=useState('');
const [age,setAge]=useState('');

const handelSubmit=(event)=>{
    event.preventDefault();
    console.log(name,age)
};
const handelChangeName=(event)=>{
    setName(event.target.value)
};
const handelChangeAge=(event)=>{
    setAge(event.target.value)
};
    return(
       <div>
        <Card>
            <form onSubmit={handelSubmit}>
                <label for="name">Name</label>
                <input 
                    id='username'
                    type="text"
                    value={name}
                    onChange={handelChangeName} 
                    />
                <label for="age">Age</label>
                <input 
                    id='age'
                    type="number" 
                    value={age}
                    onChange={handelChangeAge}  
                />
                <button type="submit">Add User</button>
            </form>
        </Card>
       </div>
    );
}

export default AddUser;