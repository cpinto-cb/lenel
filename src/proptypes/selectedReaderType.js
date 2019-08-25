import { number, shape, string } from 'prop-types';
import accessLevelPropType from './accessLevelPropType';
import readerTypesPropType from './readerTypesPropType';

const selectedReaderType = shape(
    {
        id: number.isRequired,
        typeId: number.isRequired,
        name: string.isRequired,
        accessLevel: accessLevelPropType.isRequired,
        readerType: readerTypesPropType.isRequired
    }
);

export default selectedReaderType;
