import { useQuery } from "react-query";
import { getAccessToken } from '../Utilities/GetAndSetToken';

const useUser = () => {
    const url = 'http://localhost:5050/api/user/find-user-by-token';

    const { data, isLoading } = useQuery(['user-info'], () => (
        fetch(url, {
            headers: {
                auth: getAccessToken()
            }
        })
        .then(res => res.json())
    ))

    return [data, isLoading];
};

export default useUser;