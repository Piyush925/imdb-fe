import getAxiosInstance from './';

const signin = (values) => {
    const axios = getAxiosInstance();
    return axios({
        method: "PUT",
        url: '/login',
        data: {
            email: values.email,
            password: values.password,
            role: values.role
        }
    })
}

export default signin;