import styled from 'styled-components';
import {
    Form as FormikForm,
    ErrorMessage as FormikErrorMessage,
    Field as FormikField,
} from 'formik';

export const Form = styled(FormikForm)`
    padding: 15px 10px;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    gap: 15px;
    font-size: 18px;
    border: 4px solid darkgreen;
    background-color: #4cc3a5;
    border-radius: 50px;
`;

export const FormLabel = styled.label`
    width: auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 18px;
    font-weight: 600;
`;
export const Field = styled(FormikField)`
    padding: 5px;
    width: 300px;
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

export const AddButton = styled.button`
    padding: 10px;
    width: 150px;
    border: 2px solid darkgreen;
    border-radius: 50px;
    background-color: #b0d69b;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    transition: all 250ms ease-in-out;
    &:hover
    {
        box-shadow: rgba(22, 100, 226, 0.24) 0px 3px 8px;
        background-color: green;
        border: 2px solid lightgreen;
        color: #fff;
    }
`;

export const ErrorMessage = styled(FormikErrorMessage)`
    color: red;
`;
