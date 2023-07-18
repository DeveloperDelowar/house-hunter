
const setAccessToken = (token) =>{
    localStorage.setItem('access-token', token);
}

const getAccessToken = () =>{
    const token = localStorage.getItem('access-token');
    return token;
}

const clearAccessToken = () => {
    localStorage.clear('access-token');
}

export {setAccessToken, getAccessToken, clearAccessToken}