import { connect, useSelector } from 'react-redux';
import {useParams} from 'react-router-dom';


function Detail(){
    const {id} = useParams();
    const item = useSelector((state)=>state[state.findIndex(ele => ele.id===parseInt(id))])
    return <div>
        <h1>To Do Detail</h1>
        <h3>{item.text}</h3>
    </div>;
}

export default (Detail);