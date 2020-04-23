import axios from 'axios';

const getAxiosInstance = () => {
    const instance = axios.create({
        baseURL: "http://localhost:8000",
        headers: { 'x-access-token': JSON.parse(localStorage.getItem('token')) }
    })
    instance.interceptors.response.use((response) => {
        if (response.status === 401) {
            localStorage.removeItem("token")
            return response
        }
        else {
            return response
        }
    }, error => {
        throw error
    })
    return instance;
};

export default getAxiosInstance;