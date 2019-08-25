import C from '../../Constants';


/**
 * @description setSelectedReader is an action creator for setting the selected reader
 *
 * @param updateAccessLevel
 * @returns {{type: {string}, payload: *}}
 */
const updateAccessLevel = (accessLevels, updated) => {
    const filteredAccessLevels = accessLevels.filter((level) => level.id !== updated.id);
    const newAccessLevels = [...filteredAccessLevels, updated];
    return { type: C.SET_ACCESS_LEVELS, payload: newAccessLevels };
};

export default updateAccessLevel;
