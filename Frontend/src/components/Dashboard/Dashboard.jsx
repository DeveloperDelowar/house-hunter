import { Link, Outlet, useNavigate } from "react-router-dom";
import img from "../../assets/home.jpeg";
import { BiSolidBuildingHouse } from "react-icons/bi";
import { BsHouseFill } from "react-icons/bs";
import useUser from "../../Hooks/useUser";
import Loading from "../shared/Loading/Loading";
import { clearAccessToken } from "../../Utilities/GetAndSetToken";

const Dashboard = ({setRefresh, refresh}) => {
    const navigate = useNavigate();
    const [user, loading] = useUser();

    const handleLogout = () => {
        clearAccessToken();
        navigate('/login');
        setRefresh(!refresh);
    }

    if (loading) {
        return <Loading />
    }

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

                        <h2 className="text-lg text-center mt-2 font-bold"> Your Dashboard</h2>
                    </div>

                    <ul className="menu">
                        {
                            user?.role === 'woner' && (
                                <>
                                    <li>
                                        <Link to='/dashboard'>
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
                                </>
                            )
                        }

                        {
                            user?.role === "renter" && (
                                <li>
                                    <Link to='/dashboard'>
                                        <BsHouseFill />
                                        My Bookings
                                    </Link>
                                </li>
                            )
                        }

                    </ul>
                    <button
                        onClick={handleLogout}
                        className="bg-black text-white p-1 text-lg rounded-lg mt-5"
                    >Logout</button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;