import { Link, useLocation, useNavigate } from 'react-router-dom';
import useModal from './../../Hooks/useModal';
import axios from "axios";
import {setAccessToken} from "../../Utilities/GetAndSetToken";
import { useState } from 'react';
import Loading from "../shared/Loading/Loading";

const Register = () => {
    const [isLoading, setLoading] = useState(false);
    const {simpleMessageDisplay} = useModal();

        // After login 
        const location = useLocation();
        const navigate = useNavigate();
        let from = location.state?.from?.pathname || "/";
    
    const handleRegister = (e) => {
        // Set loading
        setLoading(true);

        e.preventDefault();
        const t = e.target;

        const name = t.name.value;
        const email = t.email.value;
        const phone = t.phone.value;
        const role = t.role.value;
        const password = t.password.value;
        const cPassword = t.cPassword.value;

        if(password !== cPassword){
            simpleMessageDisplay('Password and Comfirm password not matched.');
            return;
        }

        // Add data to db;
        const data = {
            name,
            email,
            phone,
            role, 
            password
        }

        const url = 'http://localhost:5050/api/user/create-account';

        axios.post(url, data)
        .then(res => {
            if(res.data?.token){
                // set loading 
                setLoading(false);
                // Set access token
                setAccessToken(res.data?.token);

                navigate(from);
            }
            else{
                // set loading 
                setLoading(false);
                // Set error message
                simpleMessageDisplay(res.data?.message);
            }
        })
        .catch(err => {
            // set loading 
            setLoading(false);
            // set error message
            console.log(err);
            simpleMessageDisplay(err.message);
        })
    }

    // set loading 
    if(isLoading){
        return <Loading />
    }

    return (
        <div className=' h-screen flex items-center justify-center'>
            <form className=' shadow-md w-[350px] p-3' onSubmit={handleRegister}>
                <h3 className='text-2xl font-bold mb-2 text-center'>Register</h3>

                <label htmlFor="">Name</label>
                <input type="text" name='name' placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs mb-2" required />

                <label htmlFor="">Email</label>
                <input type="email" name='email' placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs mb-2" required />

                <label htmlFor="">Phone</label>
                <input type="tel" name='phone' placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs mb-2" required />

                <label htmlFor="">Role</label>
                <select className="select select-bordered select-sm w-full max-w-xs mb-5" name='role' required defaultValue='renter'>
                    <option value='renter'>House Renter</option>
                    <option value='woner'>House Owner</option>
                </select>

                <label htmlFor="">Password</label>
                <input type="password" name="password" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs mb-2" required />

                <label htmlFor="">Confirm Password</label>
                <input type="password" name="cPassword" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs mb-2" required />

                <p>
                    Already have an account?
                    <Link to='/login' className=' underline'>Login</Link>
                </p>


                <div className='flex justify-center'>
                    <button className="btn btn-neutral mt-5">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Register;