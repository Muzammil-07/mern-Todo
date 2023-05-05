const initialState={
    arr:[]
};

const changeTodo=(state=initialState,action)=>{
switch(action.type){
    case "ADD": return{
        ...state, 
        arr:[...state.arr,action.payload],
   
        
};
    case "DELETE":
        let newList = state.arr.filter((doc)=>{return doc.id !== action.payload}
      
    )
      // console.log(newList)
        return{
            ...state,
            arr:newList
      };
      case "UPDATE":{
        let id=action.payload.id;
        let brr =state.arr;
        let ind;
        brr.map((doc,index)=>{
       if(doc.id==id)
       return ind =index;
        })
     let a= brr[ind].isComplete=action.payload.isComplete;
     console.log(brr);
     return{
      ...state,
      arr:brr
     }
      }


    default:return state;

}
}
export default changeTodo;