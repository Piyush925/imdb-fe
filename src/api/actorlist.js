import getAxiosInstance from './';

const actorlist = () => {
    const axios = getAxiosInstance();
    return axios({
        method: "GET",
        url: '/getactor'
    })
}

export default actorlist;