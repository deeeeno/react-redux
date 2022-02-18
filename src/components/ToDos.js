import {connect} from 'react-redux';
import {actionCreators} from '../store';
function ToDos({toDos,delToDo}){
    const onClick = (e)=>{
        const targetId = parseInt(e.target.parentNode.id);
        delToDo(targetId);
    }
    return <ul>
        {
        toDos.map((toDo,idx)=><li key={idx} id={toDo.id}>{toDo.text}<button onClick={onClick}>DELETE</button></li>)
        }
    </ul>;
}

function mapDispatchToProps(dispatch,ownProps){
    return{
        ...ownProps,
        delToDo: (text)=>dispatch(actionCreators.actionToDo("DELETE",text))
    }
}
export default connect(null,mapDispatchToProps)(ToDos);