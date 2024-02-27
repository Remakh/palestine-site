import axios from "axios";

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";
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

const login = async (formData) => {
    console.log(formData)
    const response = await axios.post('/login/', formData)
    console.log(response)
    return response
}

const logout = async () => {
    const response = await axios.post('/logout/', formData)
    return response
}

const user = async () => {
    const response = await axios.get('/user/')
    return response
}

export { getEvent, getEvent, createEvent, login, logout, user }