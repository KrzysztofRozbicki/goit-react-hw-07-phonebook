import { createSlice } from '@reduxjs/toolkit';

const savedContacts = localStorage.getItem('contacts');
const parsedContacts = JSON.parse(savedContacts) || [];
const saveContacts = state => {
  localStorage.setItem('contacts', JSON.stringify(state));
};

const initialState = parsedContacts;

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.push(action.payload);
      saveContacts(state);
    },
    deleteContact: (state, action) => {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
      saveContacts(state);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
