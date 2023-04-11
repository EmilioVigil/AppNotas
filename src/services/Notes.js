const URLBASE = 'http://localhost:3000'
import axios from "axios";
// Traer todas las notas de un usuario
const getAllNotes = async () => {
    const req = await axios.get(URLBASE)
    const data = req.data
    return data;
}

const createNote = (data) => {
    const req = fetch.post(URLBASE, data)
    const response = req.then(res => res.json());
    return response;

}

const updateNote = (id, data) => {
    const req = fetch.put(`${URLBASE}/${id}`, data)
    const response = req.then(res => res.json());
    return response;
}

const deleteNote = (id) => {
    const req = fetch.delete(`${URLBASE}/${id}`);
    const response = req.then(res => res.json());
    return response;
}

export {
    getAllNotes,
    createNote,
    updateNote,
    deleteNote
}