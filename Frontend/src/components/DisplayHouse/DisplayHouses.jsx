import { AiFillFilter } from 'react-icons/ai';
import Range from '../shared/Range/Range';
import HomeCard from '../shared/HomeCard/HomeCard';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '../shared/Loading/Loading';

const DisplayHouses = () => {
    const [loading, setLoading] = useState(false);
    const [houses, setHouses] = useState([]);

    useEffect(() => {
        setLoading(true);

        axios.get('http://localhost:5050/api/house')
            .then(res => {
                setLoading(false);
                setHouses(res.data?.data)
            });
    }, []);

    if (loading) {
        return <Loading />
    }

    return (
        <div className="drawer lg:drawer-open ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden btn-neutral">
                    Filter
                    <AiFillFilter />
                </label>

                <div className='m-5 grid-cols-1 grid gap-4 md:grid-cols-3'>
                    {
                        houses?.map((house) => <HomeCard 
                        key={house._id}
                         houseInfo={house} />)
                    }
                </div>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <form className="menu p-4 w-72 h-full bg-base-200 text-base-content">


                    <div className='mb-32'>
                        <div className='mb-10'>
                            <h3 className='text-center text-xl mb-3'>Rent per/mon: </h3>
                            <div className='flex items-center justify-between'>
                                <div>
                                    <label htmlFor="">Min : </label>
                                    <input type="number" className="input input-bordered input-sm w-20" min={1} />
                                </div>

                                <div>
                                    <label htmlFor="">Max : </label>
                                    <input type="number" className="input input-bordered input-sm w-20" />
                                </div>
                            </div>
                        </div>

                        <div className='mb-5 flex items-center space-x-2'>
                            <label htmlFor="">Max Room Size: </label>
                            <input type="number" className="input input-bordered input-sm w-20" />

                            <span>/feet</span>
                        </div>

                        <div className='mb-5 flex items-center space-x-2'>
                            <label htmlFor="">City: </label>
                            <input type="text" className="input input-bordered input-sm w-48 " />
                        </div>

                        <div className='mb-5 flex items-center'>
                            <h3 className='mr-3'>Bed Rooms : </h3>
                            <Range />
                        </div>

                        <div className='mb-5 flex items-center'>
                            <h3 className='mr-3'>Bath Rooms : </h3>
                            <Range />
                        </div>
                    </div>

                    <div className='flex justify-center'>
                        <button className="btn btn-neutral">Filter <AiFillFilter /></button>
                    </div>

                </form>

            </div>
        </div>
    );
};

export default DisplayHouses;