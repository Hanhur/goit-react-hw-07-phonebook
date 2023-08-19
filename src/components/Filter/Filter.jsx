import React from 'react';
import { FilterField, FilterLabel } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/contactsSlice';

export const Filter = () => {

    const dispatch = useDispatch();

    const onFilterChange = event => {
        const { value } = event.currentTarget;
        dispatch(changeFilter(value));
    }

    return (
        <FilterLabel>
            Find contacts by name
            <FilterField
                type="text"
                name="filter"
                required
                onChange={onFilterChange}
            />
        </FilterLabel>
    );
}
