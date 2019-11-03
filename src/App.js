import React, { Component } from 'react'

// 在开发环境中还是会报错，但是如果打包之后就能够正确的识别边界，正确的进行错误的渲染
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
        console.log(test);
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
