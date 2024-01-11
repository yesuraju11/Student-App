import React from 'react'
import {Link} from 'react-router-dom'


function Navigation() {
  return (
    <div class="container">
        <nav class="navbar navbar-expand-sm bg-dark py-3">

<div class="container-fluid">
  
  <ul class="navbar-nav">
    <li class="nav-item">
      <p class="text-white mx-5 display-5">Student Management App</p>
    </li>
     <li class="nav-item">
     <Link to={"/addStudent"}><button class="btn btn-success mt-3"> Add Student</button></Link> 
    </li>
    
    
  </ul>
</div>

</nav>
    </div>
  )
}

export default Navigation