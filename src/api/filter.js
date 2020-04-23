import getAxiosInstance from './';

const filter = (value) => {
    let url = '';
    if (value.director.length > 0) {
        url = url + '&director="' + String(value.director) + '"'
    }
    if (value.producer.length > 0) {
        url = url + '&producer="' + String(value.producer) + '"'
    }
    if (value.actor.length > 0) {
        url = url + '&actor=["' + value.actor + '"]'
    }
    if (value.actress.length > 0) {
        url = url + '&actress=["' + value.actress + '"]'
    }

    const axios = getAxiosInstance();
    return axios({
        method: "GET",
        url: '/getmovies/query?' + url
    })
}

export default filter;