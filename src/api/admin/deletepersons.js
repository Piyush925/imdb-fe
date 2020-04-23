import getAxiosInstance from '../';

const deletepersons = (values) => {
    const axios = getAxiosInstance();
    return axios({
        method: "DELETE",
        url: '/deleteperson',
        data: {
            roleId: values.roleId,
            name: values.name,

        }
    })
}

export default deletepersons;