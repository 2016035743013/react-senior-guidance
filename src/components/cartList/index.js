import React, { Component } from 'react'

import { increment, decrement } from '../../Action/cart'

export default class CartList extends Component {

    constructor() {
        super();
        this.state = {
            carts: []
        }
    }
    getState = () => {
        this.setState({
            carts: this.props.cartList.getState().Cart
        })
    }
    componentDidMount() {
        this.getState();
        this.props.cartList.subscribe(this.getState);
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
                        this.state.carts.map(item => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>
                                        <button onClick={
                                            () => {
                                                this.props.cartList.dispatch(decrement(item.id))
                                            }
                                        }>-</button>
                                        {item.count}
                                        <button onClick={
                                            () => {
                                                this.props.cartList.dispatch(increment(item.id))
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
