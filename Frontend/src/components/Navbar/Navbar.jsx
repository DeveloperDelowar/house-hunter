import { Link } from "react-router-dom";
import { RiLoginCircleLine } from "react-icons/ri";
import {BiUserCircle} from "react-icons/bi";
import { getAccessToken } from "../../Utilities/GetAndSetToken";
import { useEffect, useState } from "react";

const Navbar = ({refresh}) => {
    const [token, setToken] = useState('');

    useEffect(()=>{
        const token = getAccessToken();
        setToken(token);
    }, [refresh]);

    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="normal-case text-xl font-bold">
                    <Link to='/'>
                        House Hunter
                    </Link>
                </a>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control mr-5">
                    <input type="text" placeholder="Search..." className="input input-bordered input-sm w-full max-w-xs" autoFocus />
                </div>
                <div className="dropdown dropdown-end">
                    <div className="avatar placeholder">
                       {!token && <h3>
                            <Link to='/login' className="flex items-center">
                                <RiLoginCircleLine className="mr-1 mt-1" />
                                <span>Login</span>
                            </Link>
                        </h3>}

                        {token && <div className="bg-neutral-focus text-neutral-content rounded-full w-8 cursor-pointer">
                            <Link to='/dashboard'>
                                <span className="text-xs" title='Dashboard'>
                                    <BiUserCircle />
                                </span>
                            </Link>
                        </div>}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;