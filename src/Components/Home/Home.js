import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';

const Home = () => {
    const [foods , setFoods] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/foods')
        .then(res => res.json())
        .then(data => setFoods(data))
    },[])

    return (
        <div>
            {
                foods.map(food => <Food  food={food}></Food>)
            }
        </div>
    );
};

export default Home;