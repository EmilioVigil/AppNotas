import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;

`

const ContainerButton = styled.div`
    width: 25vw;
    border-right: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    
    button{
    width: 5rem;
    padding: 10px;
    margin-top: 1rem;
    border-radius: 5px;
    border: none;
    background-color: #4169E1;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    opacity: .9;
    transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
    background-color: #4169E1;
    color: #fff;
    opacity: 1;
  }
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
  Container,
  ContainerButton,
  ImageContainer
}