import axios from 'axios';
import { serverUrl } from '../Component/config'


export const getContracts = async function (organizationId) {
    if(organizationId) {
        return axios.get(serverUrl + '/contract' + `${organizationId && '?organizationId=' + organizationId}`)
    } else {
        return axios.get(`${serverUrl}/contract`)
    } 
}

export const getContract = function (id) {
    return axios.get(`${serverUrl}/contract/${id}`)
}

export const removeContract = async (id) => axios.delete(`${serverUrl}/contract/${id}`)

export const postContract = async (contract) => axios.post(`${serverUrl}/contract/create`, contract)