import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import Navigation from './Navigation';
import { redirect, useNavigate } from 'react-router-dom';
function AddStudent()
 {

   /* useEffect(()=>
  {
      axios.get("http://localhost:8081/student/v1/stdGet/") 
      .then(res=>console.log(res)) 
  })*/
  
    const navgate=useNavigate()
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNum:"",
        gender:"",
        address:""
      });

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
      await axios.post('http://localhost:8081/student/v1/post', {

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
      <Navigation/>
       <h1 className='text-center'>Add New Student Data</h1> 
       <div className='container '>
            <form onSubmit={submit} class='formData'>
                <div class="form-group">
                    <label>Frist Name :</label>
                    <input type='text' class="form-control" name='firstName' value={user.firstName} onChange={onInputChange} required ></input>
                </div>
                <div class="form-group">
                    <label>Last Name :</label>
                    <input type='text' class="form-control" name='lastName' value={user.lastName} onChange={onInputChange}  required></input>
                </div>
                <div class="form-group">
                    <label>Email:</label>
                    <input type='text' class="form-control" name='email' value={user.email} onChange={onInputChange}  required></input>
                </div>
                <div class="form-group">
                    <label>Phone Number :</label>
                    <input type='text' class="form-control" name='phoneNum' value={user.phoneNum} onChange={onInputChange}  required></input>
                </div>
                <div class="form-group">
                    <label>Gender :</label>
                    <input type='text' class="form-control" name='gender'  value={user.gender}  onChange={onInputChange}  required></input>
                </div>
                <div class="form-group">
                    <label>Address ({"city/Village"}):</label>
                    <input type='text' class="form-control" name='address' value={user.address} onChange={onInputChange}  required></input>
                </div>
                <br></br>
                
                <button class="m-5 btn btn-primary">Save</button>
              
                <button class="m-5 btn btn-danger"onClick={()=>navgate("/")}>Cancel</button>
             </form>
       </div>

    </div>
  )
}

export default AddStudent