const URLBASE = 'http://localhost:3000/create/users'
import axios from "axios";

export const signUpUser = async (credentials) => {
    const response = await axios.post(URLBASE, credentials);
    const data = response.data;
    return data;
}