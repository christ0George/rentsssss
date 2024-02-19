import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import Carsedit from './Carsedit';
import './Categoryview.css'
import Topbar from '../Adminpanel/Topbar';
import Sidebar from '../Adminpanel/Sidebar';
import{Buffer} from 'buffer';
import Carz from './Carz';

const Cardetails = () => {
  var [category, setCategory] = useState([]);
  var [selected, setSelected] = useState();
  var [update, setUpdate] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:3005/view")
      .then(response => {
        setCategory(response.data)
      })
      .catch(err => console.log(err))
  }, [])
  const updateValues = (row) => {
    setSelected(row)
    setUpdate(true)
  }
  var result =
    <div className='bb'>
      <Topbar/>
      <Sidebar/>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
            <TableCell>Carid</TableCell>
              <TableCell>Company Name</TableCell>
              <TableCell>Color</TableCell>
              <TableCell>Car no</TableCell>
              <TableCell>Fuel</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Model</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Image</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {category.map((row, pos) => {

              return (
                <TableRow
                  key={pos}>
                  
                  <TableCell>{row.carid}</TableCell>
                <TableCell>{row.company}</TableCell>
                <TableCell>{row.color}</TableCell>
                <TableCell>{row.no}</TableCell>
                <TableCell>{row.model}</TableCell>
                <TableCell>{row.amount}</TableCell>
                <TableCell>{row.description}</TableCell>
                  <TableCell><EditIcon onClick={() => updateValues(row)} /></TableCell>
                   {/* <TableCell>
                       <img src={`data:image/jpeg;base64,${Buffer.from(row.image1.data).toString('base64')}`}
                        width="50" height="50" alt="Error"/></TableCell>  */}
                        <TableCell>
                          <img src={`data:image/jpeg;base64,${Buffer.from(row.image1.data).toString('base64')}`}width="50" height="50" alt='error'/>
                        </TableCell>

                </TableRow>

              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>

  if (update)
    result = <Carsedit data={selected} method='put' />
  return (result)
}

export default Cardetails
