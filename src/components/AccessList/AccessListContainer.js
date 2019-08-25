import { Component } from 'react';
import { connect } from 'react-redux';
import AccessListCard from './AccessListCard';

class AccessListContainer extends Component {
    render() {
        return (AccessListCard(this.props));
    }
}

const mapStateToProps = (state) => ({
    readers: state.readers,
    readerTypes: state.readerTypes,
    accessLevels: state.accessLevels,
    readerSearchFilter: state.readerSearchFilter,
    selectedReader: state.selectedReader
});

export default connect(mapStateToProps)(AccessListContainer);
