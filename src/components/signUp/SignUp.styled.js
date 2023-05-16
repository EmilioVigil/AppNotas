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

    input{
        width: 20rem;
        padding: 10px;
        margin-bottom: 20px;
        border-radius: 5px;
        border: none;
        font-size: 16px;
    }

 label{
        color: #fff;
        padding-bottom: 1rem;
    }

 p{
   color: #fff;
    margin-top: 1rem;
   a{
    color:white;
   }
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

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  img{
      max-width: 100%;
      max-height: 100%;

  }
`

export {
    ContainerSignUp,
    FormContainer,
    ButtonSignUp,
    ImageContainer
}