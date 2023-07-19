import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Loading from "../../shared/Loading/Loading";
import useUser from './../../../Hooks/useUser';

const AddNewHouse = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [user, userLoading] = useUser();

    const handleSubmit = (e) => {
        // set loading
        setLoading(true);

        e.preventDefault();
        const t = e.target;
        const name = t.name.value;
        const address = t.address.value;
        const city = t.city.value;
        const bedRooms = t.bedRooms.value;
        const bathRooms = t.bathRooms.value;
        const roomSize = t.roomSize.value;
        const rent = t.rent.value;
        const phone = t.phone.value;
        const picture = t.picture.value;
        const description = t.description.value;
        const availablityDate = t.availablityDate.value;

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
            wonerEmail : user?.email
        }


        // Add date to db
        const url = `http://localhost:5050/api/house/add-new-house`;

        axios.post(url, data)
            .then(() => {
                // Set loading
                setLoading(false);

                navigate('/dashboard/houses');
            })
            .catch(err => {
                setLoading(false);
                console.log(err);
            });

    }

    if(loading || userLoading){
        return <Loading />
    }

    return (
        <div className=' flex items-center justify-center'>
            <form className=' shadow-md w-[350px] p-3' onSubmit={handleSubmit}>
                <h3 className='text-2xl font-bold mb-2 text-center'>Add New House</h3>

                <label htmlFor="">Name</label>
                <input type="text" name='name' placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs mb-2" required />

                <label htmlFor="">Address</label>
                <input type="text" name='address' placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs mb-2" required />

                <label htmlFor="">City</label>
                <input type="text" name='city' placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs mb-2" required />

                <label htmlFor="">Bed rooms</label>
                <input type="number" name='bedRooms' max={10} min={1} placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs mb-2" required />

                <label htmlFor="">Bath rooms</label>
                <input type="number" name="bathRooms" max={10} min={1} placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs mb-2" required />

                <label htmlFor=""> Room size</label>
                <input type="number" name='roomSize' placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs mb-2" required />

                <label htmlFor="">Rent per/mon</label>
                <input type="number" name='rent' placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs mb-2" required />

                <label htmlFor="">Phone</label>
                <input type="tel" name='phone' placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs mb-2" required />

                <label htmlFor="">Availability Date</label>
                <input type="date" name='availablityDate' placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs mb-2" required />

                <label htmlFor="">Picture URL</label>
                <input type="text" name='picture' className="file-input file-input-bordered file-input-sm w-full max-w-xs mb-5" required />

                <label htmlFor="">Description</label>
                <textarea name='description' placeholder="Description here" className="textarea textarea-bordered textarea-sm w-full max-w-xs" required ></textarea>

                <div className='flex justify-center'>
                    <button className="btn btn-neutral mt-5">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default AddNewHouse;