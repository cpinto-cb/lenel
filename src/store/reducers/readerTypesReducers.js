import C from '../../Constants';

/**
 * @description readerTypes reducer
 * @param state
 * @param action
 * @returns {*}
 */
export const readerTypes = (state = [], action) => {
    switch (action.type) {
        case C.CLEAR_READER_TYPES:
            return [];
        case C.SET_READER_TYPES:
            return action.payload;
        default:
            return state;
    }
};

export default { readerTypes };

