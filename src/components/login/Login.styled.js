import styled from 'styled-components'

const ContainerLogin = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;



`

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 25vw;
  min-width: 350px;
  max-width: 500px;
  padding: 40px;
  background-color: #4169e1;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

  h1{
    color: #fff;
    margin-bottom: 20px;
    font-size: 24px;
  }

  button{
    width: 100%;
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

    }

  input{
  width: 100%;
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

 .errorMessage{
  color: red;
  padding: 0.5rem;
 }

`





export {
  ContainerLogin,
  FormContainer,

}