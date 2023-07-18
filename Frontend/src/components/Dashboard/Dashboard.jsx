import { Link, Outlet } from "react-router-dom";
import img from "../../assets/home.jpeg";
import {BiSolidBuildingHouse} from "react-icons/bi";
import {BsHouseFill} from "react-icons/bs";

const Dashboard = () => {

    return (
        <div className="drawer lg:drawer-open ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Dashboard</label>

                <div className="p-5">
                    <Outlet />
                </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <div className="menu p-4 w-64 h-full bg-base-200 text-base-content">
                    <div className="flex justify-center flex-col items-center mb-5">
                        <div className="avatar">
                            <div className="w-24 rounded-full">
                                <img src={img} />
                            </div>
                        </div>

                        <h2 className="text-lg text-center mt-2 font-bold"> Delowar</h2>
                    </div>

                    <ul className="menu">
                        {/* Sidebar content here */}
                        <li>
                            <Link to='bookings'>
                                <BiSolidBuildingHouse />
                                Booking
                            </Link>
                        </li>
                        <li>
                            <Link to='houses'>
                                <BsHouseFill />
                                Houses
                            </Link>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;