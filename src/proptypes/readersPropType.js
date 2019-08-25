import {
 arrayOf, number, shape, string
} from 'prop-types';

const readersPropType = arrayOf(shape(
    {
        id: number.isRequired,
        typeId: number.isRequired,
        name: string.isRequired
    }
));

export default readersPropType;
