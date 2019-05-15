import { connect } from 'react-redux';
import ParentDashBoard from './parent_dash_board';
import { fetchChildChores, fetchChores } from '../../actions/chore_actions';
import { summerizedChoreData } from '../../util/chore_util';

const mapStateToProps = state => {
    let unassignedChores = 0;
    Object.values(state.entities.chores).forEach(chore => {
        if (chore.status === "UNASSIGNED") {
            unassignedChores += 1;
        }
    });

    return ({
        currentUser: state.session.family,
        data: summerizedChoreData(state),
        unassignedChores
    });
};

const mapDispatchToProps = dispatch => ({
    fetchChildChores: (childId) => dispatch(fetchChildChores(childId)),
    fetchChores: () => dispatch(fetchChores())
});

export default connect(mapStateToProps, mapDispatchToProps)(ParentDashBoard);