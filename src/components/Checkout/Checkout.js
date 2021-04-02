import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { UserContext } from '../../App';

const Checkout = () => {
   const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    const [book,setBook]=useState({});
    const{id}=useParams();
    useEffect(()=>{
        fetch(`https://rhubarb-surprise-86357.herokuapp.com/book/${id}`)
        .then (res=>res.json())
        .then(data=>setBook(data[0]))
    },[])
    const handleCheckout=(id)=>{
      const date =new Date().toDateString('dd/mm/yyyy');
      const order={
        time:date,
        email:loggedInUser.email,
        name:loggedInUser.displayName,
        description:book.name,
        quantity:1,
        price:book.price
      }
      fetch(`https://rhubarb-surprise-86357.herokuapp.com/addOrder`,{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(order)
      })
      .then(res=>console.log('order placed'))
    }
    return (
        <div className="container">
            <h3 style={{marginTop:"50px",color:'green'}}>Checkout</h3>
        <div style={{marginTop:"50px"}} className="row">
            
          <div className="col-md-4">
            <h3 style={{color:'tomato'}}>Description</h3>
            <h4>{book.name}</h4>
          </div>
          <div className="col-md-4">
                <h3 style={{color:'tomato'}}>Quantity</h3>
                <h4>1</h4>
          </div>
          <div className="col-md-4">
                <h3 style={{color:'tomato'}}>Price</h3>
                <h4>{book.price}</h4>
                <br/>
                <br/>
                <button onClick={()=>handleCheckout(book._id)} className="btn btn-info">Checkout</button>
          </div>
        </div>
        </div>
    );
};

export default Checkout;