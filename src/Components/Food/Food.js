import React from 'react';
import { Link } from 'react-router-dom';

const Food = (props) => {
    const { name, price, imageURL, _id} = props.food;
    return (
        <div className="container">
            <div class="col-md-3 col-sm-12 mt-5">
                <div class="p-4 border bg-light text-center">
                    <img src={imageURL} alt=""/>
                    <h4>{name}</h4>
                    <h5>{price}</h5>
                    <Link to={'/check-out/'+_id}>
                        <button className="btn btn-success">Buy Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Food;