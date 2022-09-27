import axios from 'axios';
import { serverUrl } from '../Component/config'


export const getOrganizations = async function (page, limit) { 
    //throw new Error('это моя ошибка')
    if(page) {
        return axios.get(serverUrl + '/organization' + `${page && '?page=' + page}` + `${limit && '&limit=' + limit || 10}`)
    } else {
        return axios.get(`${serverUrl}/organization`)
    } 
}

export const getOrganization = function (id) {
    return axios.get(`${serverUrl}/organization/${id}`)
}

export const removeOrganization = async (id) => axios.delete(`${serverUrl}/organization/${id}`)

export const postOrganization = async (organization) => axios.post(`${serverUrl}/organization/create`, organization)