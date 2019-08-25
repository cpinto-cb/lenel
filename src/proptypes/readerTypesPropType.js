import {
 arrayOf, number, shape, string
} from 'prop-types';

const readerTypesPropType = arrayOf(shape(
    {
        id: number.isRequired,
        name: string.isRequired
    }
));

export default readerTypesPropType;
