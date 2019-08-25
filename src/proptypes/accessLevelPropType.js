import { number, shape, string } from 'prop-types';

const accessLevelPropType = shape(
    {
        id: number.isRequired,
        name: string.isRequired,
        readerId: number.isRequired,
        Description: string
    }
);


export default accessLevelPropType;
