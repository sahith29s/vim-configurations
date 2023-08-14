export default reducer = (state = 0, action) =>{
    if(action.type == "deposit"){
        return state + action.payLoad
    }
    if(action.type == "withDraw"){
        return state - action.payLoad
    }

    else{
        return state;
    }

}