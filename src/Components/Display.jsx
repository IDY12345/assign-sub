import React, { useState } from 'react'
import './Display.css'
import { Link } from 'react-router-dom'
function Display() {
  const [click, setClick] = useState(true)
  const [click1, setClick1] = useState(false)
  const handleClick = () => {
    setClick(false)
    return
  }

  const handleClick1 = () => {
    setClick1(true)
  }

  return (
    <div className='Display-Component'>
      <div className='Display-Header'>
        <button className={click ? 'Submissions-all' : 'Submissions-all active'} onClick={handleClick1} >All Submissions</button>
        <button className={click1 ? 'Submissions-fav' : 'Submissions-fav active'} onClick={handleClick}>Favourite Submissions</button>
        <span class="Search-div">
          <i class="fas fa-search" id="Search-icon"></i>
          <input type='text' placeholder='Search' class="Search"></input>
        </span>
        <span >
          <select className='Select' id="Days" name='Version'>
            <option value="Newest" className='New'>Newest</option>
            <option value="Oldest" className='Old'>Oldest</option>
          </select>
        </span>
      </div>
      <div className='Display-Panel'>
        <Link to="/Hackathon">
          <button className='button-container'>
            <div className='Container'>
              <div className='Event-Display'>
                <img src="assets\InterviewMe.png" alt="" className='Image-Display' />
                <p className='Event-Name'>Event Name</p>
              </div>

              <div className='Summary'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur corrupti doloribus architecto, dolorum rerum ab?</div>
            </div>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Display