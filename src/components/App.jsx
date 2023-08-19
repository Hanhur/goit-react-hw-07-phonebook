import React from 'react';
import { GlobalStyle } from 'components/Globalstyle.js';
import { Layout, Header, MainHeader } from './Layout.js';
import { ContactsForm } from 'components/ContactsForm/ContactsForm.jsx';
import { Filter } from 'components/Filter/Filter.jsx';
import { ContactList } from './ContactList/ContactList.jsx';

const App = () => {
    return (
        <Layout>
            <GlobalStyle />
            <MainHeader>Phonebook</MainHeader>
            <ContactsForm />
            <Header>Contacts</Header>
            <Filter />
            <ContactList />
        </Layout>
    );
}

export { App }
