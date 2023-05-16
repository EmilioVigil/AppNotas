import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signUpUser } from '../../services/SignUp'
import SignUpImg from '../../../public/SignUp.svg'
import { ContainerSignUp, FormContainer, ButtonSignUp, ImageContainer } from './SignUp.styled'


export function SignUp() {
    const navigate = useNavigate()
    const [input, setInput] = useState({
        userName: '',
        name: '',
        gmail: '',
        password: ''
    })

    // Manejo de errores
    const [error, setError] = useState({
        name: '',
        userName: '',
        gmail: '',
        password: ''
    })

    const changeLogin = ({ target }) => {
        setInput({
            ...input,
            [target.name]: target.value
        })
    }

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            const signUp = await signUpUser(input)
            return navigate('/login')
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <>
            <ContainerSignUp>

                <FormContainer>

                    <h2>Sign Up</h2>
                    <label >Name</label>
                    <input
                        type="text"
                        value={input.name}
                        name="name"
                        onChange={changeLogin}
                    />
                    <label >UserName</label>
                    <input
                        type="text"
                        value={input.userName}
                        name="userName"
                        onChange={changeLogin}
                    />
                    <label >Gmail</label>
                    <input
                        type="gmail"
                        value={input.gmail}
                        name="gmail"
                        onChange={changeLogin}
                    />
                    <label >Password</label>
                    <input
                        type="password"
                        value={input.password}
                        name="password"
                        onChange={changeLogin}
                    />

                    <ButtonSignUp onClick={handleSignUp} >
                        Sign Up
                    </ButtonSignUp>
                    <p>Already have an account? <a href="http://localhost:5173/login">Login</a> </p>

                </FormContainer>

                <ImageContainer>
                    <img src={SignUpImg} alt="imagenSignUp" />
                </ImageContainer>

            </ContainerSignUp>
        </>
    )
}