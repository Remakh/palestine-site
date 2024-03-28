import axios from "axios";

// axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://127.0.0.1:8000/api'



const getEvents = async () => {

    const response = await axios.get(`/events/`)
    return response
}

const getEvent = async (id) => {
    const event = await axios.get(`/events/${id}`)
    return event
}

const createEvent = async (form, config) => {
    try {
        const formData = new FormData();

        formData.append("name", form.name);
        formData.append("description", form.description);
        formData.append("date", form.date );
        formData.append("time", form.time);
        formData.append("location", form.location);
        formData.append("imagePath", form.imagePath, form.imagePath.name);
    
        const response = await axios.post('/event-add/', formData, config)
        return response
    } catch (err) {
        if (err.response) {
            console.error('Server Error:', err.response.status);
            console.error('Response Data:', err.response.data);
      } else if (err.request) {
        console.error('Request Error:', err.request);
      } else {
        console.error('Error:', err.message);
      }
    }
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

export { getEvents, getEvent, createEvent, loginCall, logoutCall }