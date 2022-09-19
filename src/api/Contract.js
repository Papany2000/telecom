import axios from 'axios';
import { serverUrl } from '../Component/config'


export const getContracts = async function (page, pageSize) {
    if(page) {
        return axios.get(serverUrl + '/contract' + `${page && '?page=' + page}` + `${pageSize && '&pageSize=' + pageSize}`)
    } else {
        return axios.get(`${serverUrl}/contract`)
    } 
}

export const getContract = function (id) {
    return axios.get(`${serverUrl}/contract/${id}`)
}

export const removeContract = async (id) => axios.delete(`${serverUrl}/contract/${id}`)

export const postContract = async (contract) => axios.post(`${serverUrl}/contract/create`, contract)