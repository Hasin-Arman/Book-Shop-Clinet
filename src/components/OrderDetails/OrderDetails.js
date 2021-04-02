import React from 'react';

const OrderDetails = (props) => {
    const {_id,email, time, name,description, quantity, price } = props.order;
    return (
        <div className="col-md-4">
            <div className="card text-white bg-primary mb-3 mt-5" style={{width: "21rem"}}>
                <div style={{fontSize:'20px'}} className="card-header">Book ID:{_id}</div>
                <div className="card-body">
                    <h5 className="card-text">Name:{name}</h5>
                    <h5 className="card-text">Email:{email}</h5>
                    <h5 className="card-text">Book Name:{description}</h5>
                    <h5 className="card-text">Quantity:{quantity}</h5>
                    <h5 className="card-text">Price:{price}</h5>
                    <h5 className="card-text">Time:{time}</h5>
                   
                </div>
            </div>
        </div>
    );
};

export default OrderDetails;