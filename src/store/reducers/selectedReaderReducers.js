import C from '../../Constants';
import defaultValue from '../../data/selectedReader';
/**
 * @description selectedReader reducer
 * @param state
 * @param action
 * @returns {*}
 */
export const selectedReader = (state = defaultValue, action) => {
    switch (action.type) {
        case C.CLEAR_SELECTED_READER:
            return defaultValue;
        case C.SET_SELECTED_READER:
            return action.payload;
        default:
            return state;
    }
};

export default { selectedReader };
