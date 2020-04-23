import getAxiosInstance from '../';

const getwatchlist = () => {
    const axios = getAxiosInstance();
    return axios({
        method: "GET",
        url: '/watchlist/get',
    })
}

export default getwatchlist;