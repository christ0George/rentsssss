import React, { useEffect, useState } from 'react'
import { Button, MenuItem, Select, TextField } from '@mui/material'
import axios from 'axios'
import Topbar from '../Adminpanel/Topbar'
import Sidebar from '../Adminpanel/Sidebar'
import './Carz.css'



const Carsedit = (props) => {
    var[ca,setCa]=useState([])
    useEffect(()=>{
      axios.get("http://localhost:3005/subview")
      .then(response=>{
        console.log(response.data)
        setCa(response.data)

      })
      .catch(err=>console.log(err))
    },[])


    var[inputs,setInputs]=useState(props.data)
    const inputHandler=(event)=>
    {

        const { name, value } =event.target
        setInputs((inputs) => ({ ...inputs,[name]: value }))
        console.log(inputs)
    }
    const addHandler=()=>{
        if(props.method==='put'){

            axios.put("http://localhost:3005/edit/"+inputs._id,inputs)
            .then(response=>{
                console.log("post data"+response.data)
                alert("Success")
                window.location.reload(false)
            })
            .catch(err=>console.log(err))
        }
    }
  return (
    <div>
      <Topbar/>
      <Sidebar/>
      <h2>Edit Cars</h2>
    
  
  {/* <FormControl sx={{ m: 1, minWidth: 120 }}> */}
  <TextField label="Car id" name="carid" variant="filled" value={inputs.carid}onChange={inputHandler}>
    {
      ca.map((value,index)=>{
        return(
          <MenuItem key={index}
          value={value.carid} >{value.carid}</MenuItem>
        )
      })
    }
    </TextField> <br /><br />
    <TextField label="Company" type="text" name="company" value={inputs.company} onChange={(event) => inputHandler (event)}/><br /><br />
      <TextField label="model" type="text" name="model" value={inputs.model} onChange={(event) => inputHandler (event)}/> <br /><br />
      <TextField label="vehicle no" type="text" name="no" value={inputs.no} onChange={(event) => inputHandler (event)}/> <br /><br />
      <TextField label="color" type="text" name="color" value={inputs.color} onChange={(event) => inputHandler (event)}/> <br /><br />
      <Select label="Fuel" name="fuel" value={inputs.fuel}onChange={inputHandler}>
        <MenuItem value="Petrol">Petrol</MenuItem>
            <MenuItem value="Diesel">Diesel</MenuItem>
            <MenuItem value="CNG">CNG</MenuItem>
      </Select><br /><br />
      <TextField label="rent per day" type="text" name="amount" value={inputs.amount} onChange={(event) => inputHandler (event)}/> <br /><br />
      <TextField label="Description" type="text" name="description" value={inputs.description} onChange={(event) => inputHandler (event)}/> <br /><br />
{/* </FormControl><br/><br/> */}
  <Button variant="contained" onClick={addHandler} >Update</Button>
  </div>
    
  )
}

export default Carsedit