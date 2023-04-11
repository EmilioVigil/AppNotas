import { useNavigate } from "react-router-dom";
import { useState } from "react";

// Importamos los servicios
import { loginUser } from "../../services/Login";

// Style
import { Container, FormContainer } from "./Login.styled";


export function Login() {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [userLogin, setUserLogin] = useState(null);
    const [errorMessage, setErrorMessage] = useState('')
    const navitate = useNavigate()
    // Loguemaos al usuario
    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const user = await loginUser({ userName, password })

            setUserLogin(user);
            setUserName('');
            setPassword('');
            return navitate("/home")


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
                <h1>App Notes</h1>
                <FormContainer onSubmit={handleLogin}>
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

            </Container>
        </>
    )
}