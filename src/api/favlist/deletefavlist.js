import getAxiosInstance from '../';

const deletefavlist = (id) => {
    const axios = getAxiosInstance();
    return axios({
        method: "DELETE",
        url: '/favlist/delete',
        data: {
            movieId: id
        }
    })
}

export default deletefavlist;