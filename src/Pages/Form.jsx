import React,{useState,useEffect} from 'react'
import './Form.css'
import {addDoc, collection, getFirestore} from 'firebase/firestore'
import { Link } from 'react-router-dom'
import { app,storage } from '../firebase'
import {
    ref,
    uploadBytes,
    getDownloadURL,
    listAll,
    list,
  } from "firebase/storage";
  import {v4} from 'uuid'
function Form() {
    const db=getFirestore(app)
    const formRef=collection(db,"Submissions");
    const [title, setTitle] = useState("")
    const [summary, setSummary] = useState("")
    const [description, setDescription] = useState("")
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [Hackathon, setHackathon] = useState("")
    const [github, setGithub] = useState("")
    const [other, setOther] = useState("")
    const [id, setiId] = useState(0)

    const [imageUpload, setImageUpload] = useState(null)
    const [imageUrl, setImageUrl] = useState([])
    const [image, setImage] = useState("")
    
  const imagesListRef = ref(storage, "images/");
  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrl((prev) => [url]);
        setImage(url);
      });
    });
  };
  useEffect(() => {

    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrl((prev) => [...prev, url]);
        });
      });
    });
  }, []);

    const handleSubmit=async()=>
    {
        await addDoc(formRef,{id,title,summary,description,startDate,endDate,Hackathon,github,other,imageUrl,image})
    }

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
                        <input className='Title-Input' type='text' placeholder='Title of your submission' onChange={(event)=>
                        {
                            setTitle(event.target.value);
                            setiId(7);
                        }}/>
                    </div>
                    <div className='Title-Upload'>
                        <p className='Title'>Summary</p>
                        <input className='Title-Input' type='text' placeholder='A short summary of your submission (this will be visible with your submission)' onChange={(event)=>
                        {
                            setSummary(event.target.value)
                        }}/>
                    </div>
                    <div className='Description-Upload'>
                        <p className="Title">Description</p>
                        <textarea className='Description-Input' typeof='text' placeholder='Write a long description of your project.You can describe your idea and approach here.' onChange={(event)=>
                        {
                            setDescription(event.target.value)
                        }}/>
                    </div>
                    <div className='Image-Upload'>
                        <p className='Title'>Cover Image</p>

                        <p className='Resolution'> Minimum Resolution: 360px X 360px</p>
                        <div className='Image-InputTag'>
                        {imageUrl.map((url) => {
        return <img src={url} />;
      })}
                            <label for="inputTag">
                                <i class="fa-solid fa-image" className='Image'></i>
                                <input type='file' className='Image-Input' id="inputTag" onChange={(event)=>
                        {
                            setImageUpload(event.target.value);
                            uploadFile()
                        }}/>
                            </label>
                        </div>
                    </div>
                    <div className='Hackathon-Name'>
                        <p className='Title'>Hackathon Name</p>
                        <input className='Title-Input' placeholder='Enter the name of the hackathon' onChange={(event)=>
                        {
                            setHackathon(event.target.value)
                        }}/>
                    </div>
                    <div className='Date-Upload'>
                        <div>
                            <p className='Title'>Hackathon Start Date</p>
                            <input className='Start-Date' type='Date' onChange={(event)=>
                        {
                            setStartDate(event.target.value)
                        }}/>
                        </div>
                        <div>
                            <p className='Title'>Hackathon End Date</p>
                            <input className='Start-Date' type='Date' onChange={(event)=>
                        {
                            setEndDate(event.target.value)
                        }}/>
                        </div>
                    </div>
                    <div className='Github-Link'>
                        <p className='Title'>Github Repository</p>
                        <input className='Title-Input' placeholder="Enter your submission's public Github Repository link" onChange={(event)=>
                        {
                            setGithub(event.target.value)
                        }}/>
                    </div>
                    <div className='Github-Link'>
                        <p className='Title'>Other Links</p>
                        <input className='Title-Input' placeholder="You Can Upload a video demo or URL of your demo app here." onChange={(event)=>
                        {
                            setOther(event.target.value)
                        }}/>
                    </div>
                    <div className='End'></div>
                    <div className='Final'><button className="Upload-btn1" onClick={handleSubmit}>Upload Submissions</button></div>
                </div>
            </div>
        </div>
    )
}

export default Form