import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
    name: 'contactsApi',
    initialState: {
        filter: '',
    },
    reducers: {
        changeFilter(state, action) {
            state.filter = action.payload;
        },
    },
});

export const { changeFilter } = contactsSlice.actions;
