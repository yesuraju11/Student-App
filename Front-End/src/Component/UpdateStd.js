import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ListStudentData from './ListStudentData'
import { useState } from 'react';
import axios from 'axios';
import Navigation from './Navigation';
import { redirect, useNavigate } from 'react-router-dom';


function UpdateStd(props)
{
  const {id}=useParams();

  const navgate=useNavigate()

  const [user, setUser] = useState({
    id:{id},
    firstName: "",
    lastName: "",
    email: "",
    phoneNum:"",
    gender:"",
    address:""
  });

  useState(()=>
    {
    axios.get(`http://localhost:8081/student/v1/student/${id}`)
    .then(res=>setUser(res.data))
    }
  )

  const onInputChange = (e) => {
    setUser({ ...user,[e.target.name] : e.target.value });
  };

       
 const submit= async (event)=>
 {
    event.preventDefault();
   const stdData={
       firstName:user.firstName,
       lastName:user.lastName,
       email:user.email,
       phoneNum:user.phoneNum,
       gender:user.gender,
       address:user.address 
    }
    //console.log(user);
  await axios.put(`http://localhost:8081/student/v1/student/${id}`, {
        id:id,
        firstName:user.firstName,
        lastName:user.lastName,
        email:user.email,
        phoneNum:user.phoneNum,
        gender:user.gender,
        address:user.address
      })
      .then(function (response) 
      {
        console.log(response.data);
        console.log(user);
      })
      .catch(function (error) 
      {
        console.log(error);
      });
      alert("Are Submit Your Data")
   navgate("/")
 }
 
return (

<div className='container'>
 
 <h1 className='text-center'>Update Student Data</h1> 
       <div>
        <form onSubmit={submit} class='formData'>
            <div class="form-group">
                <label>Frist Name :</label>
                <input type='text' class="form-control" name='firstName' value={user.firstName} onChange={onInputChange} ></input>
            </div>
            <div class="form-group">
                <label>Last Name :</label>
                <input type='text' class="form-control" name='lastName' value={user.lastName} onChange={onInputChange}></input>
            </div>
            <div class="form-group">
                <label>Email:</label>
                <input type='text' class="form-control" name='email' value={user.email} onChange={onInputChange}></input>
            </div>
            <div class="form-group">
                <label>Phone Number :</label>
                <input type='text' class="form-control" name='phoneNum' value={user.phoneNum} onChange={onInputChange}></input>
            </div>
            <div class="form-group">
                <label>Gender :</label>
                <input type='text' class="form-control" name='gender'  value={user.gender}  onChange={onInputChange}></input>
            </div>
            <div class="form-group">
                <label>Address {"City/Village"} :</label>
                <input type='text' class="form-control" name='address' value={user.address} onChange={onInputChange}></input>
            </div>
            <br></br>
            
            <button class="m-5 btn btn-primary">Save</button>
           
            <button class="m-5 btn btn-danger " onClick={()=>navgate("/")}>Cancel</button>
        </form>
       </div>
 
    </div>
  )

}

export default UpdateStd