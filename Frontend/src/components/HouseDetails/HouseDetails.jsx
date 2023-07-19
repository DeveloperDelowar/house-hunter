import React, { useEffect, useState } from 'react';
import image from '../../assets/home.jpeg';
import { Link, useParams } from 'react-router-dom';
import Loading from '../shared/Loading/Loading';

const HouseDetails = () => {
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    const [house, setHouse] = useState({});

    useEffect(() => {
        // set Loading
        setLoading(true);

        fetch(`http://localhost:5050/api/house/${id}`)
            .then(res => res.json())
            .then(res => {
                // set Loading
                setLoading(false);
                setHouse(res);
            })
    }, []);

    if(loading){
        return <Loading />
    }

    const {
        name,
        address,
        city,
        bedRooms,
        bathRooms,
        roomSize,
        rent,
        phone,
        picture,
        description,
        availablityDate,
    } = house.data

    return (
        <div className=' w-7/12 mx-auto mt-5 flex flex-col justify-center'>
            <img src={picture} alt="" />

            <h2 className='my-4 text-xl'>{name}</h2>
            <h3>Address : {address}</h3>
            <h3>City : {city}</h3>
            <h3>Bed rooms : {bedRooms}</h3>
            <h3>Bath rooms : {bathRooms}</h3>
            <h3>Room size : {roomSize}</h3>
            <h3>Availability : {availablityDate}</h3>
            <h3>Rent per month : ${rent}</h3>
            <h3>Phone : {phone}</h3>

            <p className='mt-4'>{description}</p>

            <div className='mt-8'>
                <button className="btn btn-active btn-neutral">
                    <Link to='/book/111'>Let's Book</Link>
                </button>
            </div>
        </div>
    );
};

export default HouseDetails;