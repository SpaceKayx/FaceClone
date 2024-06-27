import axios from "axios"

const BASE_URL_REGISTER = "http://localhost:8080/register";

export const createAccount = (account) => axios.post(BASE_URL_REGISTER, account);