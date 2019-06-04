import { connect } from 'react-redux';
import ChoreDisplay from './chore_display';
import { closeModal } from '../../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    return ({
        chore: state.entities.chores[ownProps.choreId]
    });
};

const mapDispatchToProps = dispatch => {
    return (
        {
            closeModal: () => dispatch(closeModal())
        }
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ChoreDisplay);