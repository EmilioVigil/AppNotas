const URLBASE = 'http://localhost:3000/login'
import axios from "axios";
const loginUser = async (credentials) => {
    const response = await axios.post(URLBASE, credentials);
    const data = response.data;
    return data;
}


export {
    loginUser
}