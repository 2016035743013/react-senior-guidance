import React, { Component } from 'react'
// connect执行之后是一个高阶组件
import { connect } from 'react-redux'
// 导入actioncreators
import { increment, decrement } from '../../Action/cart'
class CartList extends Component {

    constructor() {
        super();
        this.state = {
            carts: []
        }
    }
    getState = () => {
        
    }
    componentDidMount() {
        console.log(this.props);
    }
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>商品名称</th>
                        <th>价格</th>
                        <th>数量</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.cartList.map(item => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>
                                        <button onClick={
                                            () => {
                                                this.props.decrement(item.id)
                                            }
                                        }>-</button>
                                        {item.count}
                                        <button onClick={
                                            () => {
                                                this.props.increment(item.id)
                                            }
                                        }>+</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        )
    }
}
const mapStatesToProps = (state) => {
    console.log(state);
    // 这里return了什么，在组件里就可以通过this.props来获取
    return {
        cartList: state.Cart
    }
}
//  
// const mapDispatch = dispatch => {
//     return {
//         add: (id) => dispatch(increment(id)),
//         reduce: (id) => dispatch(decrement(id))
//     }
// }
// connect有四个参数，常用的就是前面两个
// 第一个参数是mapstatetoprops，作用就是从store里把state注入到当前组件的props上
// 第二个参数mapdispatchToProps,这个的主要作用是把action生成的方法注入到当前组件的props上面，一般来说也没必要这要用， 直接第二个参数传递一个对象，这里面的对象就是actioncreators，只要传入了actioncreators，在组件内就可以通过this.props.actionCreator来调用，这样的话，在调用之后，那个actioncreator就会自动帮你把内部的action dispatch出去
export default connect(mapStatesToProps,{increment, decrement})(CartList)