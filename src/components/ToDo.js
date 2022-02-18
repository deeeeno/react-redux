import { connect } from "react-redux";
import { actionCreators } from "../store";
import {Link} from 'react-router-dom';



function ToDo({text,id,deleteToDo}){
    return <li id={id}>
        <Link to={`/detail/${id}`}>
        {text}
        </Link><button onClick={deleteToDo}>DELETE</button>
       
    </li>
}

function mapDispatchToProps(dispatch,ownProps){
    return{
        deleteToDo : ()=>dispatch(actionCreators.actionToDo("DELETE",parseInt(ownProps.id)))
    }
}

export default connect(null,mapDispatchToProps)(ToDo);