import React, { Component, Fragment } from 'react'

import { CartList } from './components/index'
class App extends Component {
    constructor() {
        super();
    }

    render() {

        return (
            <div>
                <CartList cartList = {this.props.store} />
            </div>
        )
    }
}
export default App
