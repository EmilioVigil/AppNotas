import { useNavigate } from "react-router-dom";
import { useState } from "react"
import { Link } from "react-router-dom"
import axios from 'axios'
import { Button, FormContainer, Input, Title, BackButton } from './CreateNote.styled.js'

export function CreateNote() {

    const [input, setInput] = useState({
        title: '',
        content: ''
    })

    const [createNote, setCreateNote] = useState(false)
    const browse = useNavigate()

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmitCreate = async (e) => {
        e.preventDefault()
        const user = JSON.parse(window.localStorage.getItem('loggedNoteappUser'))
        const token = `bearer ${user.token}`
        const config = {
            headers: { Authorization: token }
        }

        const response = await axios.post('http://localhost:3000/create/note', input, config)
        setInput({
            title: '',
            content: ''
        })

        if (response.data) {
            setTimeout(() => {
                setCreateNote(!createNote)
            }, 4000);
        }

        return browse('/home')
    }


    return (
        <div>

            <FormContainer>
                <Title>Create Note</Title>
                <label>
                    Charge new note:
                </label>
                <Input
                    type="text"
                    name="title"
                    value={input.title}
                    onChange={handleChange}
                />
                <label>
                    Note content:
                </label>
                <textarea
                    name="content"
                    value={input.content}
                    onChange={handleChange}
                ></textarea>
                <Button
                    type='submit'
                    onClick={handleSubmitCreate}>
                    Create Note
                </Button>

            </FormContainer>
            <Link to={'/home'}>
                <BackButton>Volver a la pagina principal</BackButton>
            </Link>
        </div>
    )
}