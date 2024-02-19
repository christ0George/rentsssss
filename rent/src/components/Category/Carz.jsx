import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import './Carz.css'
// import { Home } from '@mui/icons-material';
import Topbar from '../Adminpanel/Topbar';
import Sidebar from '../Adminpanel/Sidebar';

const Carz = () => {
  var[inputs,setInputs]=useState({
    "carid": '',
      "company": '',
      "model": '',
      "no": '',
      "color": '',
      "fuel": '',
      "amount": '',
      "description": ''
  })
  var[selectedimage,setSelectedimage]=useState(null);
  

  const inputHandler =(event) =>{
    const{name,value}=event.target
    setInputs((inputs)=>({...inputs,[name]:value}))
    console.log(inputs)
  }

  const savedata=()=>{
    const formdata=new FormData();
    formdata.append('name',inputs.carid);
    formdata.append('company',inputs.company);
    formdata.append('model',inputs.model);
    formdata.append('no',inputs.no);
    formdata.append('color',inputs.color);
    formdata.append('fuel',inputs.fuel);
    formdata.append('amount',inputs.amount);
    formdata.append('description',inputs.description);
    formdata.append('image1',selectedimage)
    fetch('http://localhost:3005/new',
    {
        method:'post',
        body:formdata,
    })
    .then((response)=>response.json())
    .then((data)=>{
        alert("record saved")
    })
    .catch((err)=>{
        console.log("error")
    })
}

  //   const addHandler=() =>{
  //     console.log("Clicked")

  //     console.log(inputs)
  //     axios.post("http://localhost:3005/new",inputs)
  //     .then((response)=>{
  //       alert("Record Saved")
  //     })
  //     .catch(err=>console.log(err))
      
  // }

  const handleimage =(event)=>{
    const file = event.target.files[0];
    setSelectedimage(file)
    inputs.image1=file;
    }

    


  return (

    <div>
      <Topbar/>
      <Sidebar/>
    <div className="addproduct">
    <h2>Car Details</h2>  
    <TextField label="Car id" type="text" name="carid"value={inputs.carid} onChange={(event) => inputHandler (event)}/> <br /><br />
      
      <TextField label="Company" type="text" name="company" value={inputs.company} onChange={(event) => inputHandler (event)}/><br /><br />
      <TextField label="Model" type="text" name="model" value={inputs.model} onChange={(event) => inputHandler (event)}/> <br /><br />
      <TextField label="Vehicle no" type="text" name="no" value={inputs.no} onChange={(event) => inputHandler (event)}/> <br /><br />
      <TextField label="COlor" type="text" name="color" value={inputs.color} onChange={(event) => inputHandler (event)}/> <br /><br />
      <Select label="Fuel" name="fuel" value={inputs.fuel}onChange={inputHandler}>
        <MenuItem value="Petrol">Petrol</MenuItem>
            <MenuItem value="Diesel">Diesel</MenuItem>
            <MenuItem value="CNG">CNG</MenuItem>
      </Select><br /><br />
      <TextField label="Rent per day" type="text" name="amount" value={inputs.amount} onChange={(event) => inputHandler (event)}/> <br /><br />
      <TextField label="Description" type="text" name="description" value={inputs.description} onChange={(event) => inputHandler (event)}/> <br /><br />
        <br /><br />
        <label>Upload file</label>
        <input type="file" onChange={handleimage}></input>
        <br /><br />
      
      <button className="addproduct-btn" onClick={()=>{savedata()}}>ADD</button>
    </div>
    </div>
  )
}

export default Carz