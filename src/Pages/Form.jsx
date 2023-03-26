import React from 'react'
import './Form.css'
import { Link } from 'react-router-dom'
function Form() {
  return (
    <div className='Form-Page'>
        <div className='Logo-Header'>
        <Link to="/">   <img src="assets\AI Planet Logo.png" alt='' className='Logo' /></Link> 
        </div>
    </div>
  )
}

export default Form