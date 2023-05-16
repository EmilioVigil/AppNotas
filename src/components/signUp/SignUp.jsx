import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signUpUser } from '../../services/SignUp'
import SignUpImg from '../../../public/SignUp.svg'
import { ContainerSignUp, FormContainer } from './SignUp.styled'


export function SignUp() {
    const navigate = useNavigate()
    const [input, setInput] = useState({
        userName: '',
        name: '',
        gmail: '',
        password: ''
    })

    const [signUpCorrect, setSignUpCorrect] = useState('')
    const [errorServer, setErrorServer] = useState('')

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
            setTimeout(() => {
                setSignUpCorrect('Congratulations! Your registration has been successfully completed.')
            }, 3000)

            return navigate('/login')
        } catch (e) {
            setErrorServer('Wrong Credentials')
        }
    }

    return (
        <>
            <ContainerSignUp>
                {
                    signUpCorrect ? <p>{signUpCorrect}</p> : ''
                }
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
                    {
                        errorServer ? <p>{errorServer}</p> : ''
                    }
                    <button onClick={handleSignUp} >
                        Sign Up
                    </button>
                    <p>Already have an account? <a href="http://localhost:5173/login">Login</a> </p>

                </FormContainer>

                <div>
                    <img src={SignUpImg} alt="imagenSignUp" />
                </div>

            </ContainerSignUp>
        </>
    )
}