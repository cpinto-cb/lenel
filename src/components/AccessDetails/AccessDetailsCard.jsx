import React from 'react';
import { Card } from 'antd';
import { string, shape, number } from 'prop-types';
import accessLevelPropType from '../../proptypes/accessLevelPropType';
import readerTypesPropType from '../../proptypes/readerTypesPropType';
import AccessDetailsForm from './AccessDetailsForm';

const AccessDetailsCard = (props) => {
    // eslint-disable-next-line no-unused-vars
    const { selectedReader } = props;
    const detailsForm = AccessDetailsForm(props);
    return (
        <Card title="Access Details">
            {detailsForm}
        </Card>
    );
};

AccessDetailsCard.propTypes = {
    // eslint-disable-next-line react/no-unused-prop-types
    selectedReader: shape(
        {
            id: number.isRequired,
            typeId: number.isRequired,
            name: string.isRequired,
            accessLevel: accessLevelPropType.isRequired,
            readerType: readerTypesPropType.isRequired
        }
    ).isRequired
};

export default AccessDetailsCard;
