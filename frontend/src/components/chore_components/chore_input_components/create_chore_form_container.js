import { connect } from 'react-redux'
import CreateChoreForm from './create_chore_form'
import { withRouter } from 'react-router-dom'
import { createUnassignedChore, createAssignedChore } from '../../../actions/chore_actions'
import { closeModal } from '../../../actions/modal_actions'

const mapStateToProps = (state, ownProps) => {
    return({
        children: Object.values(state.entities.children).map(child => {
            return(
                {
                    name: child.firstName,
                    id: child.id
                }
            )
        })
    })
}


const mapDispatchToProps = dispatch => {
    return({
        createUnassignedChore: chore => dispatch(createUnassignedChore(chore)),
        closeModal: () => dispatch(closeModal()),
        createAssignedChore: chore => dispatch(createAssignedChore(chore))
    })
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateChoreForm))