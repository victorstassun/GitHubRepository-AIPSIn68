import styled, { css } from 'styled-components';
import { rgb, shade } from 'polished';

interface FormProps {
    hasError: boolean;
}

export const Title = styled.h1`
    color: #3d3d4d;
    font-size: 60px;
`;

export const Repositories = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
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

export const Error = styled.span`
    display: block;
    color: #c53030;
    text-align: center;
`;

export const Form = styled.form<FormProps>`
    width:100%;
    display: flex;
    justify-content: center;
    padding: 7vh;

    input {
        width: 16vw;
        height: 45px;
        border: 0;

        border-bottom: 0.45vh solid black;
        ${ props => props.hasError && css`
            border-color: #c53030;
        ` }

        background-color: transparent;
        transition: background-color 0.3s;


        &::placeholder {
            color: #a8a8b3;
            padding: 1vh;
        }
    }

    button {
        cursor: pointer;
        width: 8vw;
        height: 45px;
        background-color: #79EE76;
        border: 0px;
        margin-left: 1vw;
        border-radius: 5px;

        transition: background-color 0.3s;

        &:hover {
            background: ${shade(0.1, '#79EE76')};
        }
      }
    
`;

export const Align = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
`;

export const Column = styled.div`
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      a {
          text-decoration: none;
      }
      
`;

export const RepositoryProfile = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 40vw;
    background: #fff;
    height: 22vh;
    border-radius: 2vh;
    margin-bottom: 2vh;
    transition: all 0.2s;

    &:hover {
        transform: translateX(2vh);
    }

    img {
        margin-left: 1vw;
    }

    h2 {
        padding-top: 2vh;
        margin-left: 2vw;

        strong {
            color: #3d3d4d;
        }

        p {
            color: #a8a8b3;
        }
    }
`;
