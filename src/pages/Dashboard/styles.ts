import styled from 'styled-components';
import { rgb, shade } from 'polished';

export const Title = styled.h1`
    color: #3d3d4d;
    font-size: 60px;
`;

export const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;

    img {
        width: 90px;
        height: 90px;
        border-radius: 50%;
    }
`;

export const Form = styled.form`

    width:100%;
    display: flex;
    justify-content: center;
    padding: 7vh;

    input {
        width: 12vw;
        height: 45px;
        border: 0;
        border-bottom: 2px solid black;
        background-color: transparent;
        transition: background-color 0.3s;

        &::placeholder {
            color: #a8a8b3;
            padding: 1vh;
        }
    }

    button {
        cursor: pointer;
        width: 6vw;
        height: 45px;
        background-color: #79EE76;
        border: 0px;
        margin-left: 1vw;
        border-radius: 5px;

        transition: background-color 0.3s;

        &:hover {
            background: ${shade(0.2, '#79EE76')};
        }
      }
    
`;

export const Align = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-itens: center;
`;

export const Column = styled.div`
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-itens: center;
`;

export const RepositoryProfile = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 5vh;
    width: 100%;
    heitgh: 120px;


    h2 {
        padding-top: 2vh;
        margin-left: 1vw;

        strong {
            color: #3d3d4d;
        }

        p {
            color: #a8a8b3;
        }
    }
`;
