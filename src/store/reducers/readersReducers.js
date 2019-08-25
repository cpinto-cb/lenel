import C from '../../Constants';

/**
 * @description readers reducer
 * @param state
 * @param action
 * @returns {*}
 */
export const readers = (state = [], action) => {
    switch (action.type) {
        case C.CLEAR_READERS:
            return [];
        case C.SET_READERS:
            return action.payload;
        default:
            return state;
    }
};


export default { readers };