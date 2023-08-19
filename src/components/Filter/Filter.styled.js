import styled from 'styled-components';

export const FilterLabel = styled.label`
    width: auto;
    display: flex;
    flex-direction: column;
    margin: auto;
    gap: 10px;
    font-size: 24px;
    font-weight: 600;
    justify-content: center;
    align-items: center;
`;

export const FilterField = styled.input`
    margin-bottom: 30px;
    height: 30px;
    width: 400px;
    border: 2px solid darkgreen;
    background-color: #dee3ba;
    border-radius: 4px;
    outline: none;
    font-size: 14px;
    transition: border 250ms ease-in-out;
    &:hover,
    &:focus 
    {
        border: 2px solid lightgreen;
    }
`;
