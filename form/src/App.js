import React,{useState} from "react";

export default function App(){

    const handleSubmit =(e) =>{
        e.PreventDefault()
        console.log('Form submitted Successfully')
    }
    const [formdata, setFormData] = useState({ fname: '',  lname:'' })
  const handleData = (e)=>{
    setFormData({...formdata,[e.target.name]:[e.target.value]})
  } 
    
  return (
    <div>
      <h1>Form By React</h1>
      <form action=""onSubmit={handleSubmit} >
        <label htmlFor="">First Name : </label>
        <input type="text" value={formdata.fname} name="fname" onChange={handleData} ></input>
        <br></br>
        <label htmlFor="">Last Name </label>
        <input type="text" value={formdata.lname} name="lname" onChange={handleData} ></input>
        <input type="submit" ></input>
      </form>
    </div>
  )
}