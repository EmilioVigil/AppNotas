import { useNavigate } from "react-router-dom";
import { useState } from "react";

// Importamos los servicios
import { loginUser } from "../../services/Login";

// Style
import { Container, FormContainer, ImageContainer } from "./Login.styled";
import notas from '../../../public/notas.svg'

export function Login() {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [userLogin, setUserLogin] = useState(null);
    const [errorMessage, setErrorMessage] = useState('')
    const browse = useNavigate()

    // Loguemaos al usuario
    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const user = await loginUser({ userName, password })

            setUserLogin(user);
            setUserName('');
            setPassword('');

            // localStorage
            window.localStorage.setItem(
                'loggedNoteappUser', JSON.stringify(user)
            )

            return browse(`/home`)


        } catch (e) {
            setUserName('');
            setPassword('');
            setErrorMessage('Wrong credentials')
            setTimeout(() => {
                setErrorMessage(null)
            }, 7000)
        }


    }


    return (
        <>
            <Container>
                <FormContainer onSubmit={handleLogin}>
                    <h1>Notas App</h1>
                    <label >UserName</label>
                    <input
                        type="text"
                        value={userName}
                        name="UserName"
                        onChange={({ target }) => setUserName(target.value)}
                    />

                    <label htmlFor="">Password</label>
                    <input
                        type="password"
                        name="Password"
                        value={password}
                        onChange={({ target }) => setPassword(target.value)}
                    />
                    {
                        errorMessage ? <p className="errorMessage">{errorMessage}</p> : ''
                    }
                    <button type="submit">Login</button>
                </FormContainer>
                <ImageContainer>
                    <img src={notas} alt="imagenNota" />
                </ImageContainer>
            </Container>
        </>
    )
}

