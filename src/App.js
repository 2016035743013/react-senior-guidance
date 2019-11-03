import React from 'react';
import ReactDom from 'react-dom';

class CustomInput extends React.Component {
    render() {
        return (
            <div>
                <input type="text" ref={this.props.inputElement} />
            </div>
        )
    }
    componentDidMount() {
        this.props.inputElement.current.focus()
    }
}

class App extends React.Component {
    constructor() {
        super();
        this.input = React.createRef();
    }
    render() {
        return (
            <>
                <CustomInput inputElement={this.input} />
            </>
        )
    }
}

export default App;