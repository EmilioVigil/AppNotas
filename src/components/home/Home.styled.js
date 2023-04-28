import styled from "styled-components";

const NoteContainer = styled.div`
    padding: 2rem;
    margin: 0;
    border: 1px solid black;
    width: max-content;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    text-align: center;
`

const Container = styled.div`
    
    form{
        display: none;
    }

    .create{
        display: flex;
    }

`


export {
    NoteContainer,
    Container
}