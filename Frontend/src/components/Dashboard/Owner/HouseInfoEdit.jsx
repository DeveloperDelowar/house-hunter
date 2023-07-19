import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const HouseInfoEdit = () => {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [bedRooms, setBedRooms] = useState('');
    const [bathRooms, setBathRooms] = useState('');
    const [roomSize, setroomSize] = useState('');
    const [rent, setRent] = useState('');
    const [phone, setPhone] = useState('');
    const [picture, setPicture] = useState('');
    const [description, setDescription] = useState('');
    const [availablityDate, setAvailablityDate] = useState('');

    useEffect(() => {
        fetch(`http://localhost:5050/api/house/${id}`)
            .then(res => res.json())
            .then(res => {
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
                    availablityDate, } = res.data;

                setName(name);
                setAddress(address);
                setCity(city);
                setBedRooms(bedRooms);
                setBathRooms(bathRooms);
                setroomSize(roomSize)
                setRent(rent);
                setPhone(phone);
                setPicture(picture);
                setDescription(description);
                setAvailablityDate(availablityDate);
            })
    }, []);

    const handleSubmit = (e) => {
        const data = {
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
        }

        // axios.patch('http://localhost:5050/api/house/update-info', data)
        // .then(res => {
        //     console.log(res);
        // })
    }

    return (
        <div className=' flex items-center justify-center'>
            <form className=' shadow-md w-[350px] p-3' onSubmit={handleSubmit}>
                <h3 className='text-2xl font-bold mb-2 text-center'>Update House Info</h3>

                <label htmlFor="">Name</label>
                <input type="text" value={name} name='name' placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs mb-2"
                    onChange={(e) => setName(e.target.value)}
                    required />

                <label htmlFor="">Address</label>
                <input type="text" value={address} name='address' placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs mb-2"
                    onChange={(e) => setAddress(e.target.value)}
                    required />

                <label htmlFor="">City</label>
                <input type="text" value={city} name='city' placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs mb-2"
                    onChange={(e) => setCity(e.target.value)}
                    required />

                <label htmlFor="">Bed rooms</label>
                <input type="number" value={bedRooms} name='bedRooms' max={10} min={1} placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs mb-2"
                    onChange={(e) => setBedRooms(e.target.value)}
                    required />

                <label htmlFor="">Bath rooms</label>
                <input type="number" value={bathRooms} name="bathRooms" max={10} min={1} placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs mb-2"
                    onChange={(e) => setBathRooms(e.target.value)}
                    required />

                <label htmlFor=""> Room size</label>
                <input type="number" value={roomSize} name='roomSize' placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs mb-2"
                    onChange={(e) => setroomSize(e.target.value)}
                    required />

                <label htmlFor="">Rent per/mon</label>
                <input type="number" value={rent} name='rent' placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs mb-2"
                    onChange={(e) => setRent(e.target.value)}
                    required />

                <label htmlFor="">Phone</label>
                <input type="tel" value={phone} name='phone' placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs mb-2"
                    onChange={(e) => setPhone(e.target.value)}
                    required />

                <label htmlFor="">Availability Date</label>
                <input type="date" value={availablityDate} name='availablityDate' placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs mb-2"
                    onChange={(e) => setAvailablityDate(e.target.value)}
                    required />

                <label htmlFor="">Picture URL</label>
                <input type="text" value={picture} name='picture' className="file-input file-input-bordered file-input-sm w-full max-w-xs mb-5"
                    onChange={(e) => setPicture(e.target.value)}
                    required />

                <label htmlFor="">Description</label>
                <textarea name='description' value={description} placeholder="Description here" className="textarea textarea-bordered textarea-sm w-full max-w-xs"
                    onChange={(e) => setDescription(e.target.value)}
                    required ></textarea>

                <div className='flex justify-center'>
                    <button className="btn btn-neutral mt-5">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default HouseInfoEdit;