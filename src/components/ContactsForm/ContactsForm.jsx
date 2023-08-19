import React, { useEffect } from 'react';
import * as Yup from 'yup';
import {
    useAddContactsMutation,
    useGetContactsQuery,
} from 'services/contactsApi';
import { Formik } from 'formik';
import { HiUserAdd } from 'react-icons/hi';
import {
    Form,
    FormLabel,
    Field,
    AddButton,
    ErrorMessage,
} from 'components/ContactsForm/ContactsForm.styled.js';
import { Notify } from 'notiflix';

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'the name is too short')
        .max(100, 'the name is too long')
        .required('the name is required'),
    phone: Yup.string()
        .min(3, 'the number is too short')
        .max(50, 'the number is too long')
        .required('the number is required'),
});

Notify.init({ position: 'center-top' });

export const ContactsForm = () => {
    const { data } = useGetContactsQuery();

    const [addContact, { isError, isSuccess }] =
        useAddContactsMutation();

    useEffect(() => {
        if (isSuccess) 
        {
            Notify.success(`The contact has been created`);
        }
    }, [isSuccess]);

    useEffect(() => {
        if (isError) 
        {
            Notify.failure(`There was an error on our side. Something is wrong`);
        }
    }, [isError]);

    Notify.init({ position: 'center-top' });

    async function handleSubmit(formData, form) 
    {
        const { name, phone } = formData;

        if (data && data.map(el => (el = el.name)).includes(name)) 
        {
            Notify.failure(`A contact with name ${name} already is in your book`);
        } 
        else if (data && data.map(el => (el = el.phone)).includes(phone)) 
        {
            Notify.failure(`A contact with phone ${phone} already is in your book`);
        } 
        else 
        {
            await addContact({
                name: name,
                phone: phone,
            });
            form.resetForm();
        }
    }

    return (
        <Formik
            initialValues={{ name: '', phone: '' }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
        >
            <Form autoComplete="off">
                <FormLabel htmlFor="name">
                    Name
                    <Field
                        type="text"
                        name="name"
                        title="Name can contain only letters, numbers and hyphen"
                        placeholder="Name"
                    />
                    <ErrorMessage name="name" component="div" />
                </FormLabel>
                <FormLabel htmlFor="number">
                    Phone number
                    <Field
                        type="tel"
                        name="phone"
                        title="Phone number must contain only numbers, spaces, hyphen and +"
                        placeholder="Phone number"
                    />
                    <ErrorMessage name="phone" component="span" />
                </FormLabel>
                <AddButton type="submit">
                    <HiUserAdd />
                    Add contact
                </AddButton>
            </Form>
        </Formik>
    );
}
