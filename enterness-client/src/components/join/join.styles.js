'use client'

import styled from "styled-components";

export const Warning = styled.div`
  color: red;
  margin: 8px;
`;

export const Container = styled.div`
    width: 100%;
    height: 100%;
`

export const Content = styled.div`
    width: 100%;
    max-width: 550px; 
    height: 100%;
    margin: 0 auto;
    padding: 2px;
`

export const Form = styled.div`

    form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        row-gap: 6px;
    }

    label{
        width: 100%;
        max-width: 400px;
    }

    input{
        box-sizing: border-box;
        width: 100%;
        max-width: 400px;
        height: 40px;
        border-radius: 10px;
        text-align: center;
        font-size: 20px;

    }    

    button{
        height: 40px;
        width: 100px;
        color: rgb(82, 95, 127);
        border-color: #fff;
        background-color: #fff;
        box-shadow: 0 4px 6px rgba(50, 50, 93, .11), 0 1px 3px rgba(0, 0, 0, .08);
        border: 2px solid #fff;
        border-radius: 4px;
        margin: 8px;

        &:hover {
            cursor: pointer;
            border: 2px solid #1B2F52;
        }
    } 

`