import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const AddFood = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL , setImageURL] = useState(null);

    const onSubmit = data => {
        const foodData = {
            name: data.name,
            price: data.price,
            imageURL: imageURL
        }
        const url = `https://boiling-cliffs-53901.herokuapp.com/addFood`;
        fetch(url , {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(foodData)
        })
        .then(res => console.log('server side response', res))
    };
    
    const handleImageUpload = food => {
        const imageData = new FormData();
        imageData.set('key', 'c5ad40e7d62ccba33fad67c5de1000a4');
        imageData.append('image', food.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', 
        imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    return (
        <div className="d-flex">
            <div className="col-md-2 bg-dark">
                <Link to="/manageFood" class="nav-link text-white" href="#">Manage Food</Link>
                <Link to="/addFood" class="nav-link text-white" href="#">Add Food</Link>
            </div>
            <div className="col-md-9">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input name="name" defaultValue="Product Name" ref={register} />
                    <br/>
                    <input name="price" defaultValue="Product Price" ref={register} />
                    <br/>
                    <input name="exampleRequired" type="file" onChange={handleImageUpload} />
                    <br/>
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddFood;