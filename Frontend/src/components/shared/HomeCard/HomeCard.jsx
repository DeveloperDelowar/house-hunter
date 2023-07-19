import { Link } from 'react-router-dom';

const HomeCard = ({ houseInfo }) => {
    const { _id, picture, name, } = houseInfo;
    return (
        <div className="bg-base-100 shadow-md hover:shadow-lg">
            <img src={picture} alt="Shoes" />
            <div className="p-5">
                <h2 className="card-title">
                    {name?.length > 20 ? name.slice(0, 20) + '..' : name}
                </h2>
                <div className="card-actions justify-center mt-8">
                    <button className="btn btn-neutral btn-sm">
                        <Link to={`/house/${_id}`}>
                            View Details
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HomeCard;