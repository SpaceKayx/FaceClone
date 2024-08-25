import axios from "axios"

const BASE_URL_PAYMENT = "http://localhost:8080/booking/pay"
const BASE_URL_PAYMENT_STATUS = "http://localhost:8080/booking/payment-status"
export const payment = () => axios.post(BASE_URL_PAYMENT)
export const paymentstatus = (vnp_ResponseCode) =>
    //  axios.post(BASE_URL_PAYMENT_STATUS,  vnp_ResponseCode)
axios({
    method: 'post',
    url: BASE_URL_PAYMENT_STATUS,
    data: vnp_ResponseCode,
    headers: {
        'Content-Type': 'application/json'
      }
  });