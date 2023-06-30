'use client'

import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    height: 100px;
`

export const Content = styled.div`
    width: 100%;
    max-width: 1100px;
    padding: 10px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button{
        height: 40px;
        width: 80px;
        color: rgb(82, 95, 127);
        border-color: #fff;
        background-color: #fff;
        box-shadow: 0 4px 6px rgba(50, 50, 93, .11), 0 1px 3px rgba(0, 0, 0, .08);
        border: 2px solid #fff;
        border-radius: 4px;

        &:hover {
            cursor: pointer;
            border: 2px solid #1B2F52;
        }
    }    
`

export const Logo = styled.div`
    height: 100%;
    width: 200px;
    display: flex;

    img{
        height: 60px;
        width: 150px;
    }

    p{
        font-size: 24px;
        font-weight: bolder;
        color: #326584;
        align-self: end;
        padding: 0; 
        margin: 0px 0px 4px 0px;
    }
`

