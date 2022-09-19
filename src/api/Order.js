import axios from 'axios';
import { serverUrl } from '../Component/config'


export const getOrders = async function (page, pageSize) {
    if(page) {
        return axios.get(serverUrl + '/orders' + `${page && '?page=' + page}` + `${pageSize && '&pageSize=' + pageSize}`)
    } else {
        return axios.get(`${serverUrl}/orders`)
    } 
}

export const getOrder = function (id) {
    return axios.get(`${serverUrl}/orders/${id}`)
}

export const removeOrder = async (id) => axios.delete(`${serverUrl}/orders/${id}`)

export const postOrder = async (order) => axios.post(`${serverUrl}/orders/create`, order)