import axios from "axios"

const REST_API_BASE_URL = 'http://localhost:8080/signin'



export const selectByUsername = (account) =>
    fetch(REST_API_BASE_URL, {
        method: 'post',
        body: account
    })
    //  axios.post(REST_API_BASE_URL, account)