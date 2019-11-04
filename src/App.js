import React, { Component, Fragment } from 'react'

import Another from './Another'
class App extends Component {
    constructor() {
        super();
    }

    render() {

        return (
            <div>
                <Another name='another' />
            </div>
        )
    }
}
export default App
