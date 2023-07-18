import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    
    const handleRegister = (e) => {

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
                <select className="select select-bordered select-sm w-full max-w-xs mb-5" name='role' required>
                    <option selected>House Renter</option>
                    <option>House Owner</option>
                </select>

                <label htmlFor="">Password</label>
                <input type="password" name="password" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs mb-2" required />

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