export const depositMoney = (amount) => {
    return (dispatch) =>{
        dispatch({
            type : "deposit",
            payLoad : amount
        })
    }
}

export const withDrawMoney = (amount) =>{
    return (dispatch) =>{
        dispatch({
            type : "withDraw",
            payLoad : amount
        })
    }
}