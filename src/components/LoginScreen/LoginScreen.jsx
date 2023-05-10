import { useNavigate } from "react-router-dom";
import Noteimg from '../../../public/notas.svg'

import { ImageContainer, ContainerButton } from './LoginScreen.styled'

export function LoginScreen() {

    const navigate = useNavigate();

    const handleRouteLogin = (e) => {
        e.preventDefault();
        return navigate('/login')
    }


    const handleRouteSignUp = (e) => {
        e.preventDefault();
        return navigate('/singup')
    }

    return (
        <>
            <ContainerButton>
                <button onClick={handleRouteLogin} >
                    Login
                </button>
                <button onClick={handleRouteSignUp} >
                    SignUp
                </button>
            </ContainerButton>
            <ImageContainer>
                <img src={Noteimg} alt="imagen-principal" />
            </ImageContainer>
        </>
    )
}
