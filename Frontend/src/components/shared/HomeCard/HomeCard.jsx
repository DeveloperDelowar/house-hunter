import React from 'react';
import image from "../../../assets/home.jpeg";
import { Link } from 'react-router-dom';

const HomeCard = () => {
    return (
        <div className="bg-base-100 shadow-md hover:shadow-lg">
            <img src={image} alt="Shoes" />
            <div className="p-5">
                <h2 className="card-title">Shoes!</h2>
                <div className="card-actions justify-center mt-8">
                    <button className="btn btn-neutral btn-sm">
                        <Link to='/house/111'>
                            View Details
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HomeCard;