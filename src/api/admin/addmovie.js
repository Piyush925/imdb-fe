import getAxiosInstance from '../';

const addmovies = (values) => {
    const axios = getAxiosInstance();
    return axios({
        method: "POST",
        url: '/addmovie',
        data: {
            name: values.name,
            releaseYear: values.releaseYear,
            Actors: values.Actors,
            Actress: values.Actress,
            director: values.director,
            producer: values.producer
        }
    })
}

export default addmovies;