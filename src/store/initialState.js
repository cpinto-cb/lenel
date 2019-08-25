import accessLevels from '../data/accessLevels';
import readers from '../data/readers';
import readerTypes from '../data/readerTypes';
import selectedReaderInitialValue from '../data/selectedReader';

export const initialState = {

    accessLevels: accessLevels || [],
    readers: readers || [],
    readerTypes: readerTypes || [],
    readerSearchFilter: '',
    selectedReader: selectedReaderInitialValue
};

export default { initialState };
