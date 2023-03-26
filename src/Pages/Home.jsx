import React from 'react'
import './Home.css'
import Display from '../Components/Display'
import { Link } from 'react-router-dom'
function Home() {
    return (

        <div className='Home-Page'>
            <div className='Logo-Header'>
                <Link to="/"><img src="assets\AI Planet Logo.png" alt='' className='Logo' /></Link>
                <div className='Upload-Header'>
                <img src='assets\waves1.png' alt="" className='Waves' />
                    <h1 className='Hackathon-Submissions'>Hackathon Submissions</h1>
                    <p className='Intro'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit quam facilis itaque sapiente reiciendis, qui ipsam blanditiis soluta maiores corporis ipsum quidem quaerat! Corrupti, voluptates!
                    </p>

                    <Link to="/Upload"><button className="Upload-btn">Upload Submissions</button></Link>

                    <img src='assets\Hand holding bulb 3D.png' alt='' className='Bulb' />
                </div>

            </div>
            <div className='Display-Comp'>
            <Display />
            </div>
        </div>

    )
}

export default Home