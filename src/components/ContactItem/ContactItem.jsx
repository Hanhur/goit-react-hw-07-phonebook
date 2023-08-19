import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, DeleteButton, ListItemName } from './ContactItem.styled';
import { HiUser } from 'react-icons/hi';
import { MdDelete } from 'react-icons/md';
import { useDeleteContactsMutation } from 'services/contactsApi';


export const ContactItem = (contact) => {
    const [deleteContact, { isLoading }] = useDeleteContactsMutation();

    return (
        <ListItem>
            <HiUser />
            <ListItemName>
                {contact.name}: {contact.phone}
            </ListItemName>
            <DeleteButton
                type="button"
                onClick={() => deleteContact(contact.id)}
                disabled={isLoading}
            >
                <MdDelete />
                Delete
            </DeleteButton>
        </ListItem>
    );
}

ContactItem.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
}
