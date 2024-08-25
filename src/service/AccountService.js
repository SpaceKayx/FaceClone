import axios from "axios"
import Cookies from 'js-cookie'


const token = Cookies.get("FaceClone")
const REST_API_BASE_URL = 'http://localhost:8080/account'

axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
axios.defaults.headers.common['Content-Type'] = 'application/json';

export const getAboutMe = () => axios.get(REST_API_BASE_URL + "/aboutme")

export const createPoster = (poster) => axios.post(REST_API_BASE_URL + '/poster/createPoster', poster);
export const getAllPoster = (accountId) => axios.post(REST_API_BASE_URL + '/poster/getAll', accountId)

export const createLike = (likeDTO) => axios.post(REST_API_BASE_URL + "/poster/like", likeDTO)
export const getPosterByPosterId = (posterId) => axios.post(REST_API_BASE_URL + "/poster/getByPosterId", posterId)

export const createComment = (comment) => axios.post(REST_API_BASE_URL + '/comment/createComment', comment);
export const getListCommentByPosterId = (posterId) => axios.post(REST_API_BASE_URL + "/poster/getListCommentByPosterId", posterId)
