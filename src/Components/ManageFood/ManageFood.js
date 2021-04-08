import React from 'react';
import { Link } from 'react-router-dom';

const ManageFood = () => {
    return (
        <div className="d-flex">
            <div className="col-md-2 bg-dark">
                <Link to="/manageFood" class="nav-link text-white" href="#">Manage Food</Link>
                <Link to="/addFood" class="nav-link text-white" href="#">Add Food</Link>
            </div>
            <div className="col-md-9">
                <h3>This is Manage Food</h3>
            </div>
        </div>
    );
};

export default ManageFood;