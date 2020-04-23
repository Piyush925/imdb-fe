import getAxiosInstance from './';

const persons = (id) => {
    const axios = getAxiosInstance();
    return axios({
        method: "GET",
        url: '/getperson/' + id
    })
}

export default persons;