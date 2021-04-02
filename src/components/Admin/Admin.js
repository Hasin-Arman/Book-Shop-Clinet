import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import './Admin.css'

const Admin = () => {
    const [imageUrl,setImageUrl]=useState(null);
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data =>{
        const bookData={
            name:data.name,
            price:data.price,
            authorName:data.authorName,
            imageUrl:imageUrl
        }

        fetch('https://rhubarb-surprise-86357.herokuapp.com/addBook',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(bookData)
        })
        .then(res =>console.log('server side response'))
    }

    const handleImageUpload=(event)=>{
        console.log(event.target.files[0])
        const imageData=new FormData();
        imageData.set('key','fbbf1388b4563f23ffce756136098599');
        imageData.append('image',event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
              console.log(response)
            setImageUrl(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
        
    }
    return (
        <div className="row">
            <div style={{paddingTop:'200px'}} className="col-md-4">
                <ul>
                    <li>   <Link style={{fontSize:'30px'}} to="/manageBooks">Manage Books</Link></li>
                    <li>  <Link style={{fontSize:'30px'}} to="/editBooks">Edit Books</Link></li>
                </ul>
  
            </div>
            <div className="col-md-8">
            <h1>Add Book</h1>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <h3>Book Name</h3>
                <input name="name" placeholder="Enter Your Name" ref={register} />
                <br/>
                <h3>Author Name</h3>
                <input name="authorName"  placeholder="Enter Book Author Name"  ref={register} />
                <br/>
                <h3>Add price</h3>
                <input name="price"  placeholder="Enter Book Price" ref={register} />
                <br/>
                <h3>Add book cover photo</h3>
                <input type="file" onChange={handleImageUpload} name="exampleRequired" />
                <br/>
                <br/>
                <input type="submit" />
            </form>
            </div>
        </div>
    );
};

export default Admin;