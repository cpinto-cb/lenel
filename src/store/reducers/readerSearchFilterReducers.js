import C from '../../Constants';

/**
 * @description readerSearchFilter reducer
 * @param state
 * @param action
 * @returns {*}
 */
export const readerSearchFilter = (state = '', action) => {
    switch (action.type) {
        case C.CLEAR_READER_SEARCH_FILTER:
            return '';
        case C.SET_READER_SEARCH_FILTER:
            return action.payload;
        default:
            return state;
    }
};


export default { readerSearchFilter };
