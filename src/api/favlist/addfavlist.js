import getAxiosInstance from '../';

const addfavlist = (id) => {
    const axios = getAxiosInstance();
    return axios({
        method: "POST",
        url: '/favlist/add',
        data: {
            movieId: id
        }
    })
}

export default addfavlist;