import C from '../../Constants';

/**
 * @description accessLevels reducer
 * @param state
 * @param action
 * @returns {*}
 */
export const accessLevels = (state = [], action) => {
    switch (action.type) {
        case C.CLEAR_ACCESS_LEVELS:
            return [];
        case C.SET_ACCESS_LEVELS:
            return action.payload;
        default:
            return state;
    }
};

export default { accessLevels };
