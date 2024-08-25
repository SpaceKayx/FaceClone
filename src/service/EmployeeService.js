import axios from "axios";
import Cookies from 'js-cookie'

const token = Cookies.get("FaceClone")
const REST_API_BASE_URL = 'http://localhost:8080/api/accounts'
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
axios.defaults.headers.common['Content-Type'] = 'application/json';

export const listEmployees = () => axios.get(REST_API_BASE_URL)

export const createEmployee = (employee) => axios.post(REST_API_BASE_URL, employee)

export const selectById = (id) => axios.get(REST_API_BASE_URL + "/" + id)

export const updateEmployee = (id, employee) => axios.put(REST_API_BASE_URL + '/' + id, employee)

export const deleteEmployee = (id) => axios.delete(REST_API_BASE_URL + '/' + id)

export const selectByUsername = (username) => axios.get(REST_API_BASE_URL + '/byUsername/' + username)

