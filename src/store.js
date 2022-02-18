import {createStore} from "redux";

const ADD = "ADD"
const DELETE = "DELETE";

export const actionToDo = (type=ADD,text)=>{
    return{
        type:type,
        text:text
    }
}
const initState = [];
const reducer = (state = initState, action)=>{
    switch(action.type){
        case ADD:
            return [...state,{text:action.text,id:Date.now()}];
        case DELETE:
            return state.filter((st)=>st.id!==action.text);
        default:
            return state;
    }
};
const store = createStore(reducer);
export const actionCreators = {
    actionToDo
}
export default store;
//export const store = createStore(reducer);
