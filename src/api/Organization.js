import axios from 'axios';
import { serverUrl } from '../Component/config'


export const getOrganizations = async function (page, pageSize) {
    if(page) {
        return axios.get(serverUrl + '/organization' + `${page && '?page=' + page}` + `${pageSize && '&pageSize=' + pageSize}`)
    } else {
        return axios.get(`${serverUrl}/organization`)
    } 
}

export const getOrganization = function (id) {
    return axios.get(`${serverUrl}/organization/${id}`)
}

export const removeOrganization = async (id) => axios.delete(`${serverUrl}/organization/${id}`)

export const postOrganization = async (organization) => axios.post(`${serverUrl}/organization/create`, organization)