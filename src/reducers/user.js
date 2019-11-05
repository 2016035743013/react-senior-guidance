
import actionTypes from '../Action/actionTypes'

const initState = [
    {
        id: 1,
        count: 0
    },
    {
        id: 2,
        count: 1
    }
]

export default (state = initState, action) => {
    console.log(state);
    switch (action.type) {
        case actionTypes.USER_DECREMENT:
            return state.map(val => {
                val.count -= 1;
            });
        case actionTypes.USER_INCREMENT:
            return state.map(val => {
                val.count += 1;
            });
        default: return state;
    }
}