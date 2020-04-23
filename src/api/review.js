import getAxiosInstance from './';

const review = (values) => {
    const axios = getAxiosInstance();
    return axios({
        method: "PUT",
        url: '/review',
        data: {
            movieId: values.movieId,
            review: values.review
        }
    })
}

export default review;