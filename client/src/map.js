import { connect } from 'react-redux';
import Inputfield from './components/Inputfield.jsx';

let mapStateToProps = ( state ) => (
    {
        notesArray:[],
    }
)

let mapDispatchToProps = (dispatch) => (
    {
        add: () => dispatch({type:"ADD"}),
        edit: () => dispatch({type:"EDIT"}),
        delete: () => dispatch({type: "DELETE"}),
    }
)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Inputfield)