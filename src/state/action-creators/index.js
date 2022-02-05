export const depositMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: "deposit",
            payload: amount
        })
    }
}

export const whithdrawMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: "whithdraw",
            payload: amount
        })
    }
}