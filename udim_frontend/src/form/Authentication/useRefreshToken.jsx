import axios from './axios';
import useAuth from './useAuth';

const useRefreshToken = () => {
    const { auth, setAuth } = useAuth();
    const existingToken = auth.refresh_token;

    const refresh = async () => {
        const response = await axios.post('/auth/refresh', {}, {
            headers: {
                'Authorization': `Bearer ${existingToken}`
            },
            withCredentials: true
        });

        setAuth(prev => {
            console.log(JSON.stringify(prev));
            console.log(response.data.accessToken);
            return { ...prev, token: response.data.access_token };
        });

        return response.data.access_token;
    };

    return refresh;
};

export default useRefreshToken;
