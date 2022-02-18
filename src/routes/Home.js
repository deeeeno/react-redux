import {useState} from 'react';
import {connect} from 'react-redux';
import {actionCreators} from '../store';
import ToDo from '../components/ToDo';
function Home({toDos,addToDo}){
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

    return <div>
        <h1>To DO</h1>
        <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange}/><button type="submit">Add</button>
        </form>
        <ul>
            {toDos.map((toDo,idx)=><ToDo key={idx} text={toDo.text} id={toDo.id}/>)}
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
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);