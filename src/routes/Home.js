import {useState} from 'react';
import {connect} from 'react-redux';
import {actionCreators} from '../store';
function Home({toDos,addToDo,delToDo}){
    const [text,setText] = useState("");
    const onChange = (e)=>{
        const text = e.target.value;
        setText(text);
    }
    const onSubmit = (e)=>{
        e.preventDefault();
        addToDo(text);
        setText("");
        //dispatch(actionToDo({type:"ADD",text:text}));
    };
    const onDelToDo = (e)=>{
        delToDo(parseInt(e.target.parentNode.id));
    }
    return <div>
        <h1>To DO</h1>
        <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange}/><button type="submit">Add</button>
        </form>
        <ul>
            {
                toDos.map((toDo,idx)=><li key={idx} id={toDo.id}>{toDo.text}<button onClick={onDelToDo}>DELETE</button></li>)
            }
        </ul>
    </div>;
}

//state<->props mapping
function mapStateToProps(state,ownProps){
    return {toDos:state};
}
function mapDispatchToProps(dispatch,ownProps){
    return {
        addToDo : (text)=> dispatch(actionCreators.actionToDo("ADD",text)),
        delToDo : (text)=> dispatch(actionCreators.actionToDo("DELETE",text))
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);