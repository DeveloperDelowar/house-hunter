import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import useUser from './../../../Hooks/useUser';
import Loading from "../../shared/Loading/Loading";
import useModal from './../../../Hooks/useModal';

const Houses = () => {
    const navigate = useNavigate();
    const [refresh, setRefresh] = useState(false);
    const [user, userLoading] = useUser();
    const [loading, setLoading] = useState(false);
    const [houses, setHouses] = useState([]);
    const { deleteModal } = useModal();

    useEffect(() => {
        // Set loading
        setLoading(true);

        const url = `http://localhost:5050/api/house?email=${user?.email}`
        axios.get(url)
            .then(res => {
                setHouses(res?.data?.data);
                // Stop loading
                setLoading(false);
            });
    }, [user, refresh]);

    // Delete house
    const deleteHouse = (id) => {
        deleteModal(() => {
            // set loading
            setLoading(true);

            const url = `http://localhost:5050/api/house/my-houses/${id}`;

            axios.delete(url)
                .then(() => {
                    // set loading
                    setLoading(false);

                    setRefresh(!refresh)
                })
                .catch(err => {
                    // set loading
                    setLoading(false);

                    console.log(err);
                })
        });
    }

    // Set loading
    if (userLoading || loading) {
        return <Loading />
    }

    return (
        <div>
            <div className='flex items-center justify-between mb-5'>
                <h2 className='text-xl'>House</h2>

                <button className="btn btn-neutral btn-sm">
                    <Link to='add-new'>
                        Add New
                    </Link>
                </button>
            </div>

            {/* Display Houses */}
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#No</th>
                            <th>IMG</th>
                            <th>Name</th>
                            <th>Rent per/mo</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            houses?.map((house, index) => {
                                const { picture, rent, name, _id } = house;

                                return (<tr key={house?._id}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <img
                                            src={picture}
                                            alt="house"
                                            className=' w-16'
                                        />
                                    </td>

                                    <td>
                                        {name?.length > 20 ?
                                            name.slice(0, 20) + '..' : name}
                                    </td>

                                    <td>{rent}</td>

                                    {/* Action button */}
                                    <td>
                                        <button 
                                        onClick={()=> navigate(`update/${_id}`)}
                                        className="btn btn-active btn-neutral btn-sm mr-2">Edit</button>

                                        <button
                                            onClick={() => deleteHouse(_id)}
                                            className="btn btn-error btn-sm text-white">Delete</button>
                                    </td>
                                </tr>)
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Houses;