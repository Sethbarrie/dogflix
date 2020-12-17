import Errors from './errors';
import {connect} from 'react-redux';


const mapStateToProps = state => ({
    errors: state.errors.sessionErrors
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Errors)
