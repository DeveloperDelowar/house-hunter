import { Link, useLocation, useNavigate } from 'react-router-dom';
import { setAccessToken } from '../../Utilities/GetAndSetToken';

const Login = ({setRefresh, refresh}) => {

    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        const url = `http://localhost:5050/api/user/login`;

        fetch(url, {
            method : "POST",
            headers : {
                'content-type' : "application/json"
            },
            body : JSON.stringify({email, password})
        })
        .then(res => res.json())
        .then(res => {

            if(res?.token){
                navigate(from);
                setAccessToken(res?.token);
                setRefresh(!refresh);
            }

        });

    }
    return (
        <div className=' h-screen flex items-center justify-center'>

            <form className=' shadow-md w-[350px] p-3' onSubmit={handleLogin}>
                <h3 className='text-2xl font-bold mb-2 text-center'>Login</h3>

                <label htmlFor="">Email</label>
                <input type="email" name='email' placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs mb-2" required />

                <label htmlFor="">Password</label>
                <input type="password" name='password' placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs mb-2" required />

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