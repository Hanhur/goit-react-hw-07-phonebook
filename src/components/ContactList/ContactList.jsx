import React from 'react';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';
import { useGetContactsQuery } from 'services/contactsApi';
import { getFilter } from 'redux/selectors';
import { useSelector } from 'react-redux';

export const ContactList = () => {
    const { data: contacts, isLoading } = useGetContactsQuery();
    console.log('data: ', contacts);
    console.log('isLoading: ', isLoading);

    const filter = useSelector(getFilter);
    console.log(filter);

    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts?.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));

    return (
        <List>
            {isLoading && <h1>Loading...</h1>}
            {contacts && filteredContacts.map(contacts => (<ContactItem key={contacts.id} {...contacts} />))}
        </List>
    );
}
