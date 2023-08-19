import styled from 'styled-components';

export const ListItem = styled.li`
    display: flex;
    &:not(:last-child) 
    {
        margin-bottom: 5px;
    }
`;
export const ListItemName = styled.span`
    margin-left: 5px;
    font-size: 20px;
    align-items: center;
`;

export const DeleteButton = styled.button`
    margin-left: auto;
    padding:5px;
    width: 150px;
    border: 2px solid darkgreen;
    border-radius: 50px;
    background-color: #d8bbbb;
    margin-left: auto;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    transition: all 250ms ease-in-out;
    &:hover 
    {
        box-shadow: rgba(22, 100, 226, 0.24) 0px 3px 8px;
        background-color: lightred;
        border: 2px solid red;
        color: red;
    }
`;
