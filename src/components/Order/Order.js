import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import OrderDetails from '../OrderDetails/OrderDetails';

const Order = () => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext)
    const [orders,setOrders]=useState([]);
    useEffect(()=>{
        fetch('https://rhubarb-surprise-86357.herokuapp.com/orderInfo')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setOrders(data);
        })
    },[])
    return (
        <div className="row">
           {
               orders.map(order=><OrderDetails order={order}></OrderDetails>)
           }
        </div>
    );
};

export default Order;