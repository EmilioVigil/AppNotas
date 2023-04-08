import styled from 'styled-components'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    background-color: rgb(6, 9, 12);
    color: white;
`

const FormContainer = styled.form`
    width: 20rem;
    height: 30rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    border: 1px solid rgba(248, 248, 248, 0.918);

    input{
        border-style: none;
        border-radius: 4px;
        height: 1.5rem;
        &:hover{
            background-color: aliceblue;
        }
    }    

    button{
            padding: 0.7rem;
            border-radius: 5px;
            background-color: transparent;
            color : white;
            transition : all .5s;

            &:hover{
                background-color: white;
                color : black;
            }
    }

`



export {
    Container,
    FormContainer
}