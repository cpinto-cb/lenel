import C from '../../Constants';

/**
 * @description setReaderSearchFilter is an action creator for setting the widgets list
 *
 * @param Widgets
 * @returns {{type: {string}, payload: *}}
 */
const setReaderSearchFilter = (filter) => ({
    type: C.SET_READER_SEARCH_FILTER,
    payload: filter
});

export default setReaderSearchFilter;
