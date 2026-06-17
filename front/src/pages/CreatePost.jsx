import React from 'react'
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
const CreatePost = () => {
    const navigate = useNavigate();
    const handleSubmit = async (e)=>{
        e.preventDefault()
        const formData = new FormData(e.target)
        axios.post("http://localhost:8080/upload",formData)
        .then((res)=>{
            navigate("/");
        })
    }
  return (
    <section className='create-post-section'>
        <h1>Create Post</h1>
        <form onSubmit={handleSubmit}>
            <input type="file" name="image" accept="image/*" />
            <input type="text" name="caption" placeholder="caption"/>
            <button type="submit">Upload</button>
        </form>
    </section>
  )
}

export default CreatePost