import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://127.0.0.1:8000/api'

const getEvents = async () => {

    const response = await axios.get(`/events/`)
    return response
}

const getEvent = async (id) => {
    const event = await axios.get(`/event/${id}`)
    return event
}

const createEvent = async (request) => {
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);
    const response = await axios.post('/event-add/', request.formData)

}

const  loginCall = async (formData) => {
    const response = await axios.post('/login/', formData)
    const authToken = response.data.token;
    localStorage.setItem('authToken', authToken); 
    return authToken;
}

const logoutCall = async () => {
    const response = await axios.post('/logout/')
    return response
}

const userDetail = async () => {
    const response = await axios.get('/user/')
    return response
}

export { getEvent, getEvent, createEvent, loginCall, logoutCall, userDetail }