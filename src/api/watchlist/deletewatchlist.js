import getAxiosInstance from '../';

const deletewatchlist = (id) => {
    const axios = getAxiosInstance();
    return axios({
        method: "DELETE",
        url: '/watchlist/delete',
        data: {
            movieId: id
        }
    })
}

export default deletewatchlist;