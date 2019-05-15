import { connect } from 'react-redux';
import ParentIndexPage from './parent_index_page';
import { fetchChores } from '../../actions/chore_actions';

const mapStateToProps = state => {
    return ({
       
    });
};

const mapDispatchToProps = dispatch => {
    return ({
       fetchChores: () => dispatch(fetchChores())
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(ParentIndexPage);