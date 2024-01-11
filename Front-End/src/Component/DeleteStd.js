import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function DeleteStd(props)
 {
    const {id}=useParams();
    const navgate=useNavigate()
   const stdDelete=(()=>
    {
    axios.delete(`http://localhost:8081/student/v1/student/${id}`)
    .then(res=>navgate("/"))
    }
  )

  return (
    <div class="container" >
        <h1 className='text-center m-5'>Are You Sure Delete Student Data.... </h1>
        <img src="https://cdn.dribbble.com/users/1914549/screenshots/5346994/day21.gif" alt="React Image" width={600} height={400} class="deleteimg" />
        <br></br>
        <div className='deletestd'>
        <button class="btn btn-primary m-2 " onClick={stdDelete}>Yes</button> 
        <button class="btn btn-danger m-2 " onClick={()=>navgate("/")}>No</button>
        </div>

    </div>
  )
}

export default DeleteStd