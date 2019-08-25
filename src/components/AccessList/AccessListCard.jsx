import React from 'react';
import { Card } from 'antd';
import { string } from 'prop-types';
import AccessListTable from './AccessListTable';
import readersPropType from '../../proptypes/readersPropType';
import accessLevelsPropType from '../../proptypes/accessLevelsPropType';
import selectedReaderType from '../../proptypes/selectedReaderType';

const AccessListCard = (props) => {
    const {
        readers, readerTypes, accessLevels, readerSearchFilter, selectedReader
    } = props;
    return (
        <Card title="Access List">
            <AccessListTable readers={readers} accessLevels={accessLevels} readerTypes={readerTypes} readerSearchFilter={readerSearchFilter} selectedReader={selectedReader} />
        </Card>
    );
};

AccessListCard.propTypes = {
    readers: readersPropType.isRequired,
    readerTypes: readersPropType.isRequired,
    accessLevels: accessLevelsPropType.isRequired,
    readerSearchFilter: string.isRequired,
    selectedReader: selectedReaderType.isRequired
};

export default AccessListCard;
