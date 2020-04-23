import getAxiosInstance from '../';

const addwatchlist = (id) => {
    const axios = getAxiosInstance();
    return axios({
        method: "POST",
        url: '/watchlist/add',
        data: {
            movieId: id
        }
    })
}

export default addwatchlist;