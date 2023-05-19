import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signUpUser } from '../../services/SignUp'
import SignUpImg from '../../../public/SignUp.svg'
import { ContainerSignUp, FormContainer, ButtonSignUp, ImageContainer, ErrorForm, LinkLogin } from './SignUp.styled'

const validate = (input) => {
    let errors = {};
    const isValidEmail = (email) => {
        // Validar formato de correo electrónico de Gmail
        // Puedes personalizar esta validación según tus requisitos
        const regex = /^[^\s@]+@gmail\.com$/;
        return regex.test(email);
    };

    const hasNumber = (password) => {
        // Verificar si la contraseña contiene al menos un número
        const regex = /\d/;
        return regex.test(password);
    };
    if (!input.userName) {
        errors.userName = 'El campo userName es obligatorio'
    }
    if (!input.gmail) {
        errors.gmail = 'El campo gmail es obligatorio'
    } else if (!isValidEmail(input.gmail)) {
        errors.gmail = 'El correo electrónico debe tener formato de Gmail.';
    }
    if (!input.password) {
        errors.password = 'El campo password es obligatorio'
    } else if (!hasNumber(input.password)) {
        errors.password = 'La contraseña debe contener al menos un número.';

    }
    if (!input.name) {
        errors.name = 'El campo name es obligatorio'
    }

    return errors;

}


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
        setError(validate({
            ...input,
            [target.name]: target.value
        }))
    }

    const checkForm = () => {
        if (error.gmail || error.name || error.password || error.userName) {
            return true
        }
        if (input.name === '') return true
        return false
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


                    <ErrorForm>{error.name} </ErrorForm>

                    <label >UserName</label>
                    <input
                        type="text"
                        value={input.userName}
                        name="userName"
                        onChange={changeLogin}
                    />
                    {
                        error.userName ? <ErrorForm>{error.userName} </ErrorForm> : ''
                    }
                    <label >Gmail</label>
                    <input
                        type="gmail"
                        value={input.gmail}
                        name="gmail"
                        onChange={changeLogin}
                    />
                    {
                        error.gmail ? <ErrorForm>{error.gmail}</ErrorForm> : ''
                    }
                    <label >Password</label>
                    <input
                        type="password"
                        value={input.password}
                        name="password"
                        onChange={changeLogin}
                    />
                    {
                        error.password ? <ErrorForm>{error.password}</ErrorForm> : ''
                    }

                    <ButtonSignUp onClick={handleSignUp} disabled={checkForm()} >
                        Sign Up
                    </ButtonSignUp>
                    <LinkLogin>Already have an account? <a href="http://localhost:5173/login">Login</a> </LinkLogin>

                </FormContainer>

                <ImageContainer>
                    <img src={SignUpImg} alt="imagenSignUp" />
                </ImageContainer>

            </ContainerSignUp>
        </>
    )
}