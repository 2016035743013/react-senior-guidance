import actionType from './actionTypes'
// action有两种写法

// 第一种写成一个对象，这是标准的action，但是，问题是不方便传递动态参数
// export const increment = {
//     type: actionType.CART_AMOUNT_INCREMENT
// }

// 在工作中常用的一种方式是使用actioncreator，他是一个方法，返回一个对象，这个对象才是真正的action

export const increment = (id) => {
    return {
        type: actionType.CART_AMOUNT_INCREMENT,
        payload: {
            id
        }
    }
}

export const decrement = (id) => {
    return {
        type: actionType.CART_AMOUNT_DECREMENT,
        payload: {
            id
        }
    }
} 