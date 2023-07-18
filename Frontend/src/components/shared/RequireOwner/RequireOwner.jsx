import { useNavigate } from 'react-router-dom';
import useUser from '../../../Hooks/useUser';
import Loading from "../Loading/Loading";

const RequireOwner = ({children}) => {
    const navigate = useNavigate();
    const [user, loading] = useUser();

    if (loading) {
        return <Loading />
    }


    if (!user?.role === 'owner') {
        navigate('/login');
        return;
    }

    return children;
};

export default RequireOwner;