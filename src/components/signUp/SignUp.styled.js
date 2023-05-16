import styled from 'styled-components'

const ContainerSignUp = styled.div`
    display : flex;
    flex-direction: row;
    height: 100vh;
`
const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 350px;
    max-width: 500px;
    padding: 40px;
    background-color: #4169e1;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

    h2{
        color : #fff;
        margin-bottom: 20px;
        font-size: 24px;
    }

`

const ButtonSignUp = styled.button`
    width: 20rem;
    padding: 10px;
    margin-top: 1rem;
    border-radius: 5px;
    border: none;
    background-color: #fff;
    color: black;
    font-size: 16px;
    cursor: pointer;

    transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
    background-color: #fff;
    color: #4169e1;
  }
`

export {
    ContainerSignUp,
    FormContainer,
    ButtonSignUp
}