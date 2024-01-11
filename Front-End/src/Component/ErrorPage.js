import React from 'react'
import Navigation from './Navigation'
import { useNavigate } from 'react-router-dom'

function ErrorPage() {
    const navgate=useNavigate()

  return (
    <div className='container'>
        
        <img src="https://freefrontend.com/assets/img/html-funny-404-pages/CodePen-404-Page.gif" alt="img" width={1000} height={500} class="img" />
       <h4 className='text-center bg-danger bg-gradient p-3'><button onClick={()=>navgate("/")}>Please Run The Server OR Refresh </button> </h4>
    </div>
  )
}

export default ErrorPage