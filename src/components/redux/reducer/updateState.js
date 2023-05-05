const initialState=false;
const changeState=(state =initialState,action)=>{
    switch(action.type){
        case "UPDATESTATE":return{
            ...state,
            state:action.payload
        }
        default:return state
    };
}
export default changeState