import styled, {createGlobalStyle} from "styled-components";


export default createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        height: 100vh;
        box-sizing: border-box;
        display: flex;
            justify-content: center; 
            align-content: center; 
            flex-wrap: wrap;
    }
  
`

export const AppComponent = styled.div`
    background-color: #D3D3D3;
    height: 70vh;
    width: 80vw;
    display: flex;
    flex-direction: column;
        justify-content: center; 
        align-content: center; 
        flex-wrap: wrap;
    text-align: center;
`

export const Text = styled.p`
    margin: 0;
    padding: 0;
    margin-bottom: 2vh;
`