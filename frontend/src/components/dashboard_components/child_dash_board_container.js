import { connect } from 'react-redux';
import ChildDashBoard from './child_dash_board';
import { fetchChildChores } from '../../actions/chore_actions';

const summerizedChoreData = state => {

    const now = new Date();
    const summerizedChoreData = {};
    Object.values(state.entities.children).forEach(child => {
        summerizedChoreData[child.id] = { name: child.firstName, Balance: child.balance, Completed: 0, Pending: 0, Open: 0, Overdue: 0 };
    });
    Object.values(state.entities.chores).forEach(chore => {
        if (chore.status === "COMPLETED") {
            summerizedChoreData[chore.childId]["Completed"] += 1;
        } else if (chore.status === "PENDING_REVIEW") {
            summerizedChoreData[chore.childId]["Pending"] += 1;
        } else if (chore.status === "ASSIGNED" || chore.status === "CHOSEN") {
            if (chore.deadline && now > chore.deadline) {
                summerizedChoreData[chore.childId]["Overdue"] += 1;
            } else {
                summerizedChoreData[chore.childId]["Open"] += 1;
            }
        }
    });
    return summerizedChoreData;
};

const mapStateToProps = state => {
    return ({
        currentUser: state.session.family,
        data: summerizedChoreData(state)
    });
};

const mapDispatchToProps = dispatch => ({
    fetchChildChores: (childId) => dispatch(fetchChildChores(childId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChildDashBoard);