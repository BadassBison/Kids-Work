import { connect } from 'react-redux';
import ParentIndexHeader from './parent_index_header';
import { openModal } from '../../actions/modal_actions'
import { logout } from '../../actions/session_actions'

const mapStateToProps = state => {
    return ({
       currentUser: state.session.family,
       data: summerizedChoreData(state)
    });
};

const summerizedChoreData = state => {

    const now = new Date();
    const summerizedChoreData = {};
    Object.values(state.entities.children).forEach( child => {
        summerizedChoreData[child.id] = {name: child.firstName, Balance: child.balance, Completed: 0, Pending: 0, Open: 0, Overdue: 0};
    });
    Object.values(state.entities.chores).forEach( chore => {
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

    return Object.values(summerizedChoreData);
}

const mapDispatchToProps = dispatch => {
    return {
      openModal: modal => dispatch(openModal(modal)),
      logout: () => dispatch(logout())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ParentIndexHeader)