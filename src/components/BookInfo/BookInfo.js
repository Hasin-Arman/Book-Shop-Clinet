import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

const BookInfo = (props) => {
    const { _id,name, authorName, imageUrl,price } = props.book;
    let history=useHistory();
    const loadBook=(id)=>{
     history.push(`checkout/${id}`)
    }
    return (
        <div className="col-md-4">
            
            <div className="card bg-info row mt-5" style={{width:"16rem",height:"25rem"}}>
                <img style={{height:'250px'}} src={imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text"><b>{name}</b></p>
                    <small>{authorName}</small>
                    <br/>
                    <b>{price}</b>
                   <button style={{marginLeft:'30px'}} onClick={()=>loadBook(_id)} className="btn btn-secondary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default BookInfo;