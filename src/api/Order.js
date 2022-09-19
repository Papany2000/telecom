import axios from 'axios';
import { serverUrl } from '../Component/config'


export const getOrders = async function (contractId) {
    if(contractId) {
        return axios.get(serverUrl + '/orders' + `${contractId && '?contractId=' + contractId}`)
    } else {
        return axios.get(`${serverUrl}/orders`)
    } 
}

export const getOrder = function (id) {
    return axios.get(`${serverUrl}/orders/${id}`)
}

export const removeOrder = async (id) => axios.delete(`${serverUrl}/orders/${id}`)

export const postOrder = async (order) => axios.post(`${serverUrl}/orders/create`, order)