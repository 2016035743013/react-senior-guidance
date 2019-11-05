// createstore是redux提供的一个用于创建store的方法
import {createStore} from 'redux'
// 引入合并后的reducer
import RootReducer from './reducers'

// createstore 的第一个参数必须是reducer，如果是多个， 请在reducers目录下用combineReducers 合并之后在导出
export default createStore(RootReducer);