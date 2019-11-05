
// 在实际的项目中由于只有单一的store，但是状态会有很多的分类，但是createstore的参数又只接受一个reducer，所以，redux笔记聪明的提供了一个用于合并多个reducer的方法，注意：不要手动合并
import { combineReducers } from 'redux'

// 导入cart reducer，如果有多个，继续引入
import Cart from './cart'

// 导入合并后的reducer
export default combineReducers({
    // 把多个reducer作为combinereducers对象参数传入，在外部就可以通过store.getstate().cart来获取到cartReducer里面的state
    Cart
})