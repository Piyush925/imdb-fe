import getAxiosInstance from '../';

const addperson = (values) => {
    const axios = getAxiosInstance();
    return axios({
        method: "POST",
        url: '/addperson',
        data: {
            roleId: values.roleId,
            name: values.name,
            age: values.age
        }
    })
}

export default addperson;