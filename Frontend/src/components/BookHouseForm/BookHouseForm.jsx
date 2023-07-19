import { useEffect, useState } from "react";
import useUser from "../../Hooks/useUser";
import Loading from "../shared/Loading/Loading";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import useModal from "../../Hooks/useModal";

const BookHouseForm = () => {
    const {id} = useParams();
    const [user, loading] = useUser();
    const [userInfoLoading, setLoading] = useState(false);
    const [userInfo, setUserInfo] = useState({});
    const [house, setHouse] = useState({});
    const navigate = useNavigate();
    const {successFullModal} = useModal();

    useEffect(() => {
        fetch(`http://localhost:5050/api/user/find-user-by-email?email=${user?.email}`)
            .then(res => res.json())
            .then(res => {
                setLoading(false);
                setUserInfo(res?.data);
            })
    })

    useEffect(() => {
        // set Loading
        setLoading(true);

        fetch(`http://localhost:5050/api/house/${id}`)
            .then(res => res.json())
            .then(res => {
                // set Loading
                setLoading(false);
                setHouse(res?.data);
            })
    }, []);

    const handleForm = (e) => {
        setLoading(true);
        e.preventDefault();

        const data = {
            phone : e.target.phone.value,
            renterEmail: userInfo?.email,
            wonerEmail: house?.wonerEmail,
            HomeId: id,
        }

        axios.post('http://localhost:5050/api/booking', data)
        .then(res => {
            setLoading(false);
            successFullModal('Booking successful');
            navigate('/dashboard');
        })
    }

    if (loading || userInfoLoading) {
        return <Loading />
    }

    return (
        <div className=' h-screen flex items-center justify-center'>
            <form className=' shadow-md w-[350px] p-3' onSubmit={handleForm}>
                <h3 className='text-2xl font-bold mb-2 text-center'>Let's Book</h3>

                <label htmlFor="">Name</label>
                <input type="text" value={userInfo?.name} placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs mb-2" />

                <label htmlFor="">Email</label>
                <input type="text" value={userInfo?.email} placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs mb-2" />

                <label htmlFor="">Phone</label>
                <input type="text" name='phone' placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs mb-2" required/>

                <div className='flex justify-center'>
                    <button className="btn btn-neutral mt-5">Booked</button>
                </div>
            </form>
        </div>
    );
};

export default BookHouseForm;