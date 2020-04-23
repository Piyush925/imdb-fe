import getAxiosInstance from './';

const fetchDashboardData = () => {
    const axios = getAxiosInstance();
    return axios({
        method: "GET",
        url: '/getmovie'
    })
}

export default fetchDashboardData;