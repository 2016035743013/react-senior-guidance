import React, { Component } from 'react'



// 你可以直接获取 DOM button 的 ref：


export default class App extends Component {
    constructor() {
        super();
    }

    render() {
        this.inputRef = React.createRef();
        return (
            <>
                <input type="text" ref={this.inputRef}/>
            </>
        )
    }
    componentDidMount() {
        console.log(this.inputRef)
    }
}
