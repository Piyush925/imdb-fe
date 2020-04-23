import getAxiosInstance from './';

const paticularmoviedetails = (movieId) => {
    const axios = getAxiosInstance();
    return axios({
        method: "GET",
        url: '/getmovie/' + movieId
    })
}

export default paticularmoviedetails;