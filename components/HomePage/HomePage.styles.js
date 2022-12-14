import styled from 'styled-components'

export const HomePageContainer = styled.div`

    color: white;

    height: 100vh;
    width: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 1rem;

    h1{
        font-family: 'Barlow Condensed', sans-serif;
        font-size: 3rem;
        letter-spacing: 4px;
        margin: 0;
        font-weight: bold;
    }
    
    span {
        font-family: 'Barlow Condensed', sans-serif;
        font-size: 1.5rem;
        position: absolute;
        bottom: 2rem;
        right: 2rem;
    }
`