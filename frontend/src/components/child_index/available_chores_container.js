import { connect } from 'react-redux';
import AvailableChores from './available_chores';

const mapStateToProps = state => {
    console.log(state.entities.chores)
    return ({
       chores: Object.values(state.entities.chores)
    });
};

const mapDispatchToProps = dispatch => {
    return ({
       
    });
};

export default connect(mapStateToProps, null)(AvailableChores);