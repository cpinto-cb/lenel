import { Component } from 'react';
import { connect } from 'react-redux';
import { Form } from 'antd';
import AccessDetailsCard from './AccessDetailsCard';
import store from '../../store/store';
import updateAccessLevel from '../../store/actions/updateAccessLevel';
import accessLevelsPropType from '../../proptypes/accessLevelsPropType';
import setSelectedReader from '../../store/actions/setSelectedReader';
import selectedReaderType from '../../proptypes/selectedReaderType';

class AccessDetailsContainer extends Component {
    handleSave = (newLevel) => {
        const { accessLevels, selectedReader } = this.props;
        const newSelectedReader = { ...selectedReader, accessLevel: newLevel };
        store.dispatch(updateAccessLevel(accessLevels, newLevel));
        store.dispatch(setSelectedReader(newSelectedReader));
    };

    render() {
        return (AccessDetailsCard({ ...this.props, handleSave: this.handleSave }));
    }
}

const mapStateToProps = (state) => ({
    selectedReader: state.selectedReader,
    accessLevels: state.accessLevels,
    readers: state.readers
});

AccessDetailsContainer.propTypes = {
    accessLevels: accessLevelsPropType.isRequired,
    selectedReader: selectedReaderType.isRequired,
};

export default connect(mapStateToProps)(Form.create()(AccessDetailsContainer));
