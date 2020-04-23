import getAxiosInstance from './';

const signup = (values) => {
    const axios = getAxiosInstance();
    return axios({
        method: "POST",
        url: '/signup',
        data: {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            password: values.password,
            role: values.role
        }
    })
}

export default signup;