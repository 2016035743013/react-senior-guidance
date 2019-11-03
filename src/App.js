import React, { Component } from 'react'


class ErrorComponent extends Component {
    constructor() {
        super();
        this.state = {
            hasError: false
        }
    }
    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }
    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // 你可以自定义降级后的 UI 并渲染
            return <h1>Something went wrong.</h1>;
        }
        return this.props.children;
    }
}

export class TestError extends Component {
    render() {

        const test = 'test';
        
        return (
            <>
                testerror
            </>
        )
    }
}

export default class App extends Component {
    constructor() {
        super();
    }
    
    render() {
        return (
            <ErrorComponent>
                <TestError></TestError>
            </ErrorComponent>
        )
    }    
}
