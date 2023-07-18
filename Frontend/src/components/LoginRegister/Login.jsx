import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className=' h-screen flex items-center justify-center'>

            <form className=' shadow-md w-[350px] p-3'>
                <h3 className='text-2xl font-bold mb-2 text-center'>Login</h3>

                <label htmlFor="">Email</label>
                <input type="email" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs mb-2" required />

                <label htmlFor="">Password</label>
                <input type="password" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs mb-2" required />

                <p>
                    Need and account?
                    <Link to='/register' className=' underline'> register</Link>
                </p>


                <div className='flex justify-center'>
                    <button className="btn btn-neutral mt-5">Login</button>
                </div>
            </form>
        </div>
    );
};

export default Login;