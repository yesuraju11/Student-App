import axios from 'axios';
import React, {useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'

const ListStudentData = () => 
{
  const navgate=useNavigate()

    //console.log('http://localhost:8081/student/v1/stdGet/');
  
  const [data,setData]=useState([])
  useState(()=>
  {
      axios.get('http://localhost:8081/student/v1/stdGet/') 
      .then(res=>setData(res.data))
      .catch(err=>navgate("/error")) 
  })
  
  let info;
  if (data.length==0) 
  {
    info="No Student's Data"
  }
  

  return (
    <div class="container" >
      <h1 className="text-center my-5">List Of Students Data</h1>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Frist Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Gender</th>
            <th>City</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
         {
          data.map(
            (e, index)=>
            <tr>
              <td>{++index}</td>
              <td>{e.firstName}</td>
              <td>{e.lastName}</td>
              <td>{e.email}</td>
              <td>{e.phoneNum}</td>
              <td>{e.gender}</td>
              <td>{e.address}</td>
              <td>
                <Link to={`/update/${e.id}`}><button  class="btn btn-info">Update </button></Link>
                <Link to={`/delete/${e.id}`}> <button style={{marginLeft: "10px"}} class="btn btn-danger"  >Delete</button></Link>
              </td>
            </tr>
          )
         }
        </tbody>
      </table>
      <h3 className='text-center'>{info}</h3>

    </div>
   
  )
}

export default ListStudentData
