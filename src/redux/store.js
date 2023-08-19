import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from 'services/contactsApi';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { contactsSlice } from './contactsSlice';

export const store = configureStore({
    reducer: {
        contacts: contactsSlice.reducer,
        [contactsApi.reducerPath]: contactsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(contactsApi.middleware),
});

setupListeners(store.dispatch);