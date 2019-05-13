import { connect } from 'react-redux'
import SubmitField from './submit'

const mapStateToProps = props => {
    return ({
        formType: props.formType
    })
}

export default connect(mapStateToProps, null)(SubmitField)