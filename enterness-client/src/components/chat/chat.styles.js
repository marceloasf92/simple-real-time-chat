'use client'

import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: calc(100% - 100px)
`

export const Content = styled.div`
    width: 100%;
    max-width: 550px; 
    height: 100%;
    margin: 0 auto;
    padding: 2px;
    display: flex;
    flex-direction: column;
    row-gap: 6px;
`

export const Feed = styled.div`
    width: 100%;
    max-width: 550px; 
    height: 100%;
    margin: 0 auto;
    padding: 2px;
    background: linear-gradient(356deg, rgba(255, 255, 255, 1) 1%, rgba(93, 139, 176, 0.2) 50%);
    border-radius: 8px;
    overflow-y: auto;
    
    ul {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 10px;
        overflow-y: auto;

        .nameUser{
            font-size: 10px;
            margin-left: 10px;
            color: #000;
            width: fit-content;
            padding: 4px;
            font-weight: 700;

        }

        .moveRight{
           align-self: end;

           div{
            background: rgb(50,84,141);
            border-radius: 8px 0px 8px 8px;
            color: #fff;
            padding: 10px;
            width: fit-content;
            align-self: flex-end;
            margin-right: 8px;
            white-space: pre;
            min-width: 100px;
            max-width: 300px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            
           }

        }

        li > div {
            background: rgb(24,44,78);
            border-radius: 0px 8px 8px 8px;
            color: #fff;
            padding: 10px;
            width: fit-content;
            align-self: flex-end;
            margin-left: 8px;
            min-width: 100px;
            max-width: 300px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        

    }


    ul::-webkit-scrollbar {
        width: 2px; 
    }

    ul::-webkit-scrollbar-thumb {
    background-color: #7590d1; 
    border-radius: 5px; 
    }

    ul::-webkit-scrollbar-track {
    background-color: #aeb9cd;
    }

`

export const Form = styled.div`

    form{
        display: flex;
        justify-content: center;
        align-items: center;
        column-gap: 6px;
    }


    input{
        box-sizing: border-box;
        width: 100%;
        height: 40px;
        border-radius: 4px;

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

        &:hover {
            cursor: pointer;
            border: 2px solid #1B2F52;
        }
    } 

`