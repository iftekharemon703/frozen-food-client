import React from 'react';
import { Link } from 'react-router-dom';

const Admin = () => {
    return (
        <div className="col-md-2 bg-dark">
            <Link to="/manageFood" class="nav-link text-white" href="#">Manage Food</Link>
            <Link to="/addFood" class="nav-link text-white" href="#">Add Food</Link>
        </div>
    );
};

export default Admin;