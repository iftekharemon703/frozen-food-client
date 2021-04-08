import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';
import './Home.css';

const Home = () => {
    const [foods , setFoods] = useState([]);

    useEffect(() => {
        fetch('https://boiling-cliffs-53901.herokuapp.com/foods')
        .then(res => res.json())
        .then(data => setFoods(data))
    },[])

    return (
        <div className="container home mt-5">
            {
                foods.map(food => <Food  food={food}></Food>)
            }
        </div>
    );
};

export default Home;