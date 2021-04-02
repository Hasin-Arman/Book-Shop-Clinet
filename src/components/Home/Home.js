import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import BookInfo from '../BookInfo/BookInfo';

const Home = () => {
    const [books,setBooks]=useState([]);
    const [loggedInUser,setLoggedInUser]=useContext(UserContext)
    useEffect(() => {
        fetch(`https://rhubarb-surprise-86357.herokuapp.com/books`)
        .then(res=>res.json())
        .then(data =>setBooks(data))
    },[])
    return (
        <div className="row">
           
            {
                books.map(book=><BookInfo book={book}></BookInfo>)
            }
            
           
        </div>
    );
};

export default Home;