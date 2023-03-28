import React, { useState,useEffect } from 'react'
import './Display.css'
import { Link } from 'react-router-dom'
import { collection, getFirestore ,getDocs,doc,deleteDoc } from 'firebase/firestore'
import { app } from '../firebase'
function Display() {
  const db=getFirestore(app);
  const collectionRef=collection(db,"Submissions")
  const [postList, setPostList] = useState([])
  const [click, setClick] = useState(true)
  const [click1, setClick1] = useState(false)
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  })
  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };
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
        {postList.map((post)=>{
          return(
            <Link to={`/Hackathon/${post.id}`}>
            <button className='button-container'>
              <div className='Container'>
                <div className='Event-Display'>
                  <img src={post.image} alt="" className='Image-Display' />
                  <p className='Event-Name'>{post.title}</p>
                </div>
                <div className='Summary'>{post.summary}</div>
              </div>
            </button>
          </Link>
          )
        })}
        
        
      </div>
    </div>
  )
}

export default Display