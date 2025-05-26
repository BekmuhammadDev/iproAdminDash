import React from 'react'
import './notfound.css'
import { useNavigate } from 'react-router-dom'
const Notfound = () => {
    const navigate =useNavigate()
    const token =sessionStorage.getItem("token")
  return (
    <div className='body'>
 <div class="box">
   <h2 className='h2'>404</h2>
   <p>Page Not Found</p>
   <button className='button' onClick={()=>!token?navigate("/"):navigate("/dashboard")}>Ortga</button>
</div>
    </div>
  
  )
}

export default Notfound