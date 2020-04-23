import getAxiosInstance from '../';

const deletemovies = (movieId) => {
    const axios = getAxiosInstance();
    return axios({
        method: "DELETE",
        url: '/deletemovies',
        data: {
            movieId: movieId,
        }
    })
}

export default deletemovies;