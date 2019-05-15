import { connect } from 'react-redux';
import MainLinks from './main_links';
import { updateFilter } from '../../actions/filter_actions';

const mapStateToProps = state => {
    return ({
        choreTypes: ["Open", "Pending Review", "Completed", "Overdue"]
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        updateFilter: (filter) => dispatch(updateFilter(filter))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(MainLinks);