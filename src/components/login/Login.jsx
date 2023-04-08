import { redirect } from "react-router-dom";

const loginUser = async (payload) => {
    const response = await fetch.post('http://localhost:3000/', payload)
    return response;
}
// Style
import { Container, FormContainer } from "./Login.styled";


export function Login() {


    const handleSubmit = async (e) => {
        console.log(e)
        redirect('/home')
    }

    return (
        <>
            <Container>
                <h1>App Notes</h1>
                <FormContainer action="" className="form-container">
                    <label htmlFor="">UserName</label>
                    <input type="text" name="userName" />
                    <label htmlFor="">Password</label>
                    <input type="password" name="password" />
                    <button onSubmit={handleSubmit} >Login</button>
                </FormContainer>

            </Container>
        </>
    )
}