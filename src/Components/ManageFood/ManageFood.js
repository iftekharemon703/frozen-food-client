import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ManageSingleFood from '../ManageSigleFood/ManageSingleFood';

const ManageFood = () => {
    const [foods, setFoods] = useState([])

    useEffect(() => {
        fetch('https://boiling-cliffs-53901.herokuapp.com/foods')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])
    return (
        <div className="d-flex">
            <div className="col-md-2 bg-dark">
                <Link to="/manageFood" class="nav-link text-white" href="#">Manage Food</Link>
                <Link to="/addFood" class="nav-link text-white" href="#">Add Food</Link>
            </div>
            <div className="col-md-9">
                {
                    foods.map(food =><ManageSingleFood food={food} ></ManageSingleFood>)
                }
            </div>
        </div>
    );
};

export default ManageFood;