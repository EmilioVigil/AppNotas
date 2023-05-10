import { useNavigate } from "react-router-dom";
import { useState } from "react";

// Importamos los servicios
import { loginUser } from "../../services/Login";
// Style
import { ContainerLogin, FormContainer } from "./Login.styled";

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
            <ContainerLogin>
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

            </ContainerLogin>



        </>
    )
}

