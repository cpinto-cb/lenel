import { combineReducers } from 'redux';

import { readers } from './readersReducers';
import { readerTypes } from './readerTypesReducers';
import { accessLevels } from './accessLevelsReducers';
import { readerSearchFilter } from './readerSearchFilterReducers';
import { selectedReader } from './selectedReaderReducers';
// Build a single reducer for the store
export const singleReducer = combineReducers({
    accessLevels,
    readers,
    readerTypes,
    readerSearchFilter,
    selectedReader
});

export default singleReducer;
