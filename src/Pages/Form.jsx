import React from 'react'
import './Form.css'

import { Link } from 'react-router-dom'
function Form() {
    return (
        <div className='Form-Page'>
            <div className='Logo-Header'>
                <Link to="/">   <img src="assets\AI Planet Logo.png" alt='' className='Logo' /></Link>
            </div>
            <div className='Upload-Form'>
                <div className='Upload'>
                    <p className='New-Hackathon'>New Hackathon Submissions</p>
                    <div className='Title-Upload'>
                        <p className='Title'>Title</p>
                        <input className='Title-Input' type='text' placeholder='Title of your submission' />
                    </div>
                    <div className='Title-Upload'>
                        <p className='Title'>Summary</p>
                        <input className='Title-Input' type='text' placeholder='A short summary of your submission (this will be visible with your submission)' />
                    </div>
                    <div className='Description-Upload'>
                        <p className="Title">Description</p>
                        <textarea className='Description-Input' typeof='text' placeholder='Write a long description of your project.You can describe your idea and approach here.' />
                    </div>
                    <div className='Image-Upload'>
                        <p className='Title'>Cover Image</p>

                        <p className='Resolution'> Minimum Resolution: 360px X 360px</p>
                        <div className='Image-InputTag'>
                            <label for="inputTag">
                                <i class="fa-solid fa-image" className='Image'></i>
                                <input type='file' className='Image-Input' id="inputTag" />
                            </label>
                        </div>
                    </div>
                    <div className='Hackathon-Name'>
                        <p className='Title'>Hackathon Name</p>
                        <input className='Title-Input' placeholder='Enter the name of the hackathon' />
                    </div>
                    <div className='Date-Upload'>
                        <div>
                            <p className='Title'>Hackathon Start Date</p>
                            <input className='Start-Date' type='Date' />
                        </div>
                        <div>
                            <p className='Title'>Hackathon End Date</p>
                            <input className='Start-Date' type='Date' />
                        </div>
                    </div>
                    <div className='Github-Link'>
                        <p className='Title'>Github Repository</p>
                        <input className='Title-Input' placeholder="Enter your submission's public Github Repository link" />
                    </div>
                    <div className='Github-Link'>
                        <p className='Title'>Other Links</p>
                        <input className='Title-Input' placeholder="You Can Upload a video demo or URL of your demo app here." />
                    </div>
                    <div className='End'></div>
                    <div className='Final'><button className="Upload-btn1">Upload Submissions</button></div>
                </div>
            </div>
        </div>
    )
}

export default Form