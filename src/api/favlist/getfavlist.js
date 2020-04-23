import getAxiosInstance from '../';

const getfavlist = () => {
    const axios = getAxiosInstance();
    return axios({
        method: "GET",
        url: '/favlist/get',
    })
}

export default getfavlist;