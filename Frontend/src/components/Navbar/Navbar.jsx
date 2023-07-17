import React from 'react';
import { BiUserCircle } from "react-icons/bi";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="normal-case text-xl">House Hunter</a>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                    <input type="text" placeholder="Search..." className="input input-bordered input-sm w-full max-w-xs" autoFocus />
                </div>
                <div className="dropdown dropdown-end">
                    <div className="avatar placeholder">
                        <div className="bg-neutral-focus text-neutral-content rounded-full w-8 cursor-pointer">
                            <span className="text-xs" title='Dashboard'>AA</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;