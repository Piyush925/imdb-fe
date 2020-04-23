import getAxiosInstance from './';

const rating = (value) => {
    const axios = getAxiosInstance();
    return axios({
        method: "PUT",
        url: '/rating',
        data: {
            movieId: value.id,
            rating: value.rating
        }
    })
}

export default rating;
