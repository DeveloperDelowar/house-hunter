import React from 'react';
import image from '../../assets/home.jpeg';
import { Link } from 'react-router-dom';

const HouseDetails = () => {
    return (
        <div className=' w-7/12 mx-auto mt-5 flex flex-col justify-center'>
            <img src={image} alt="" />

            <h2 className='my-4 text-xl'>hello how are you.</h2>

            <h3>Date : </h3>
            <h3>Address : </h3>
            <h3>City : </h3>
            <h3>Bed rooms : </h3>
            <h3>Bath rooms : </h3>
            <h3>Room size : </h3>
            <h3>Availability : </h3>
            <h3>Rent per month : </h3>
            <h3>Phone : </h3>

            <p className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat distinctio alias vero eius, facilis repellat repellendus? Iusto cupiditate debitis nemo.</p>

            <div className='mt-8'>
                <button className="btn btn-active btn-neutral">
                    <Link to='/book/111'>Let's Book</Link>
                </button>
            </div>
        </div>
    );
};

export default HouseDetails;