import React from 'react';
import { Input } from 'antd';
import { func } from 'prop-types';

const { Search } = Input;

export const AccessSearch = ({ onSearch }) => (
        <Search
            placeholder="Search readers..."
            onSearch={onSearch}
            style={{ width: 200 }}
        />
);
AccessSearch.propTypes = {
     onSearch: func.isRequired
 };

 export default AccessSearch;
