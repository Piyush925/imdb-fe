import getAxiosInstance from './';

const list = (options) => {
    const axios = getAxiosInstance();
    return axios({
        method: "GET",
        url: '/getlist/' + options
    })
}

export default list;