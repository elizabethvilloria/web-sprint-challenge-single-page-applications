import React from 'react';
import { Link } from "react-router-dom";


const HomePage = () => {
    return (
        <div className='homepage'>
            <h1>Welcome to the Pizza Portal!</h1>
            <Link to="/pizza" id="order-pizza">Order Pizza</Link>
        </div>
    )
}

export default HomePage;