import { connect } from 'react-redux';
import CurrentChores from './current_chores';

const mapStateToProps = state => {
    return ({
       chores: filterChores(state)
    });
};

const filterChores = state => {
    let choreFilter = state.ui.filter.chore_status;
    let childFilter = state.ui.filter.child;
    const now = new Date();
    const chores = Object.values(state.entities.chores).filter(chore => {
        let takeChore1 = true;
        let takeChore2 = true;

        if (choreFilter) {
            if (choreFilter === "Open" && 
            (chore.status === "ASSIGNED" || chore.status === "CHOSEN")) {
                if (chore.deadline && now > chore.deadline) {
                    takeChore1 = false;
                }
            } else if (choreFilter === "Pending Review" && 
                chore.status === "PENDING_REVIEW") {
                takeChore1 = true;
            } else if (choreFilter === "Completed" &&
                chore.status === "COMPLETED") {
                takeChore1 = true;
            } else if (choreFilter === "Pending Review" &&
                chore.status === "PENDING_REVIEW") {
                takeChore1 = true;
            } else if (choreFilter === "Overdue" &&
                (chore.status === "ASSIGNED" || chore.status === "CHOSEN")) {
                if (chore.deadline && now < chore.deadline) {
                    takeChore1 = false;
                } else {
                    takeChore1 = false;
                }
            } else {
                takeChore1 = false;
            }
        }

        if (childFilter) {
            if (childFilter === chore.childId) {
                takeChore2 = true;
            } else {
                takeChore2 = false;
            }
        }

        return (takeChore1 && takeChore2);

    });
    return chores;
};

const mapDispatchToProps = dispatch => {
    return ({
       
    })
}

export default connect(mapStateToProps, null)(CurrentChores);