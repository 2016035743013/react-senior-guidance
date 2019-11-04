import actionTypes from '../Action/actionTypes'
const initState = [
    {
        id: 1,
        name: 'apple',
        price: 88888,
        count: 10
    },
    {
        id: 2,
        name: 'orange',
        price: 88,
        count: 12
    },

]

export default (state = initState, action) => {
    switch (action.type) {
        case actionTypes.CART_AMOUNT_INCREMENT:
            return state.map(item => {
                if (item.id === action.payload.id) {
                    item.count += 1;
                }
                return item;
            })
        case actionTypes.CART_AMOUNT_DECREMENT:
            return state.map(item => {
                if (item.id === action.payload.id) {
                    item.count -= 1;
                }
                return item;
            })
        default:
            return state;
    }
}