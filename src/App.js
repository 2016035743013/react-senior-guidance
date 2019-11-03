
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

// const {Consumer, Provider} = React.createContext('light');
const ThemeContext = React.createContext('light');
const UserContext = React.createContext('useragent');
class Child extends React.PureComponent {
    // static contextType = UserContext;
    // static contextType = ThemeContext;
    render() {
        console.log(this.context);
        return (
            <div>
                {
                    <ThemeContext.Consumer>
                        {
                            context => {
                                return (
                                    <UserContext.Consumer>
                                        {
                                            val => { 
                                                return (
                                                    <span>{val.user}</span>
                                                )
                                            }
                                        }
                                    </UserContext.Consumer>
                                )
                            }
                        }
                    </ThemeContext.Consumer>
                }
            </div>
        )
    }
    handleChange = () => {
        this.context.handle('test');
    }
    componentDidMount() {
    }
}

class Parent extends React.PureComponent {
    static contextType = ThemeContext;
    render() {
        console.log(this.context);
        return (
            <div>
                <Child />
            </div>
        )
    }
}

class App extends React.PureComponent {
    constructor() {
        super();
        this.handle = this.handle.bind(this);
        this.state = {
            name: 'zhang sheng bin '
        }
    }
    handle(val) {
        console.log(val);
        this.setState({
            name: 'cjhcj'
        })
    }
    render() {
        return (
            <div>
                <UserContext.Provider value={{ user: 'user' }}>
                    <ThemeContext.Provider value={{ name: this.state.name, handle: this.handle }}>
                        <Parent />
                    </ThemeContext.Provider>
                </UserContext.Provider>
            </div>
        )
    }
}

export default App;