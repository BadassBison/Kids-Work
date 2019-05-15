import { connect } from 'react-redux';
import ChildIndexPage from './child_index_page';
import { fetchChildChores } from '../../actions/chore_actions';

const mapStateToProps = state => {
    
    return ({
       childId: state.session.family.childId
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        fetchChildChores: childId => dispatch(fetchChildChores(childId))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(ChildIndexPage);