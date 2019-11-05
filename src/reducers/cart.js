// 为了避免actionType重复，所以一般会把actionType放在一个文件里统一进行管理，也可以避免写错actionType
import actionTypes from '../Action/actionTypes'

// 对于这个购物车来说，这里有个初始化的状态
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

// 创建购物车的reducer，reducer的固定写法是两个参数，第一个是state并有一个初始值，第二个是action
export default (state = initState, action) => {
    // 根据不同的action.type,处理不同的结果，每次返回一个新的state，返回的类型要一样
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
        // 一定要有default，当actionType不对的时候，不做任何处理
        default:
            return state;
    }
}