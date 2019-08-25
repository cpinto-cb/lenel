import C from '../../Constants';

/**
 * @description setSelectedReader is an action creator for setting the selected reader
 *
 * @param selectedReader
 * @returns {{type: {string}, payload: *}}
 */
const setSelectedReader = (selectedReader) => ({
    type: C.SET_SELECTED_READER,
    payload: selectedReader
});

export default setSelectedReader;
