import axios from "axios";

// axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://127.0.0.1:8000/api'



const getEvents = async () => {

    const response = await axios.get(`/events/`)
    return response
}

const getEvent = async (id) => {
    const event = await axios.get(`/event/${id}`)
    return event
}

const createEvent = async (data, config) => {
    const response = await axios.post('/event-add/', data, config)
    console.log(response)
    return response

}

const  loginCall = async (formData) => {
    const response = await axios.post('/token-auth/', formData)
    const authToken = response.data.token;
    return authToken;

}

const logoutCall = async (config) => {
    const response = await axios.post('/logout/', null, config)
    return response
}

// const userDetail = async () => {
//     const response = await axios.get('/user/')
//     return response
// }

export { getEvent, getEvent, createEvent, loginCall, logoutCall }