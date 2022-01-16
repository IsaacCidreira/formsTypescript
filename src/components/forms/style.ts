import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    &:not(:first-child){
        margin-top: 17px;
    }
        small{
            color: ${({theme})=> theme.colors.secundary};
            margin-top: 4px;
            font-size: 10px;
            font-weight: bold;
            width: 300px;
        }
`