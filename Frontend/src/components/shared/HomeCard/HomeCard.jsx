import React from 'react';
import image from "../../../assets/home.jpeg";

const HomeCard = () => {
    return (
        <div className="bg-base-100 shadow-md hover:shadow-lg">
            <img src={image} alt="Shoes"/>
            <div className="p-5">
                <h2 className="card-title">Shoes!</h2>
                <div className="card-actions justify-center mt-8">
                <button className="btn btn-neutral btn-sm">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default HomeCard;