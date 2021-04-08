import React from 'react';
import { Link } from 'react-router-dom';
import './Food.css';

const Food = (props) => {
    const { name, price, imageURL, _id} = props.food;
    return (
    <div className="card product-card">
        <div className="card-img-box">
            <img src={imageURL} className="card-img-top" alt="..." />
        </div>
        <div className="card-body">
            <h5 className="card-title mb-4">{name}</h5>
            <div className="d-flex">
                <h4 className="card-text text-success">{price}</h4>
                <Link to={'/check-out/'+_id} className="btn btn-success">Buy Now</Link>
            </div>
        </div>
    </div>
    );
};

export default Food;