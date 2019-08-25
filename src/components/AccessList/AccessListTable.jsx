import React from 'react';
import { Table, Icon } from 'antd';
import { string } from 'prop-types';
import { AccessSearch } from './Search';
import store from '../../store/store';
import setReaderSearchFilter from '../../store/actions/readerSearchFilterActions';
import setSelectedReader from '../../store/actions/setSelectedReader';
import readersPropType from '../../proptypes/readersPropType';
import readerTypesPropType from '../../proptypes/readerTypesPropType';
import accessLevelsPropType from '../../proptypes/accessLevelsPropType';
import selectedReaderType from '../../proptypes/selectedReaderType';

const AccessListTable = (props) => {
    const {
        readers, readerTypes, accessLevels, readerSearchFilter, selectedReader
    } = props;

    const columns = [
        {
            title: 'Name',
            dataIndex: 'accessLevel',
            render: ((accessLevel) => accessLevel.name)
        },
        {
            title: 'Reader Type',
            dataIndex: 'readerType',
            render: ((readerType) => readerType.name)
        },
        {
            title: 'Reader(s)',
            dataIndex: 'name',
        },
        {
            title: '',
            dataIndex: 'id',
            render: ((id) => (id === selectedReader.id ? <Icon type="check-circle" /> : <></>))
        }


    ];

    const data = accessLevels.map((level) => {
        const reader = readers.find((readerItem) => level.readerId === readerItem.id);
        const readerType = readerTypes.find((type) => type.id === reader.typeId);
        const accessLevel = accessLevels.find((lvl) => lvl.readerId === reader.id);
        return { ...reader, readerType, accessLevel };
    });

    const filteredData = data.filter((reader) => {
        const filter = readerSearchFilter.toLowerCase();
        return reader.name.toLowerCase().includes(filter)
            || reader.readerType.name.toLowerCase().includes(filter)
            || reader.accessLevel.name.toLowerCase().includes(filter);
    });

    return (
        <>
            <AccessSearch onSearch={(filter) => { store.dispatch(setReaderSearchFilter(filter)); }} />
            <Table pagination={false} columns={columns} dataSource={filteredData} size="middle" rowKey="id" onRowClick={(row) => store.dispatch(setSelectedReader(row))} selectedReader={selectedReader} />
        </>
    );
};

AccessListTable.propTypes = {
    readers: readersPropType.isRequired,
    readerTypes: readerTypesPropType.isRequired,
    accessLevels: accessLevelsPropType.isRequired,
    readerSearchFilter: string.isRequired,
    selectedReader: selectedReaderType.isRequired

};


export default AccessListTable;
