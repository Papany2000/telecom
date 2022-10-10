import axios from 'axios';
import { serverUrl } from '../Component/config'





export const login = async (loginParams) =>  axios.post(`${serverUrl}/login`, loginParams)