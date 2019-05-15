import { connect } from 'react-redux';
import ChildLinks from './child_links';
import { updateFilter } from '../../actions/filter_actions';

const mapStateToProps = state => {
    return ({
       childNames: Object.values(state.entities.children).map(child=>({name: child.firstName, id: child.id}))
    });
};

const mapDispatchToProps = dispatch => {
    return ({
       updateFilter: (filter) => dispatch(updateFilter(filter))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(ChildLinks);