import actionType from './actionTypes'

export const userIncrement = (id) => {
    return {
        type: actionType.USER_INCREMENT,
        id: id
    }
}
export const userDecrement = (id) => {
    return {
        type: actionType.USER_DECREMENT,
        id: id
    }
}