import React, { Component, Fragment } from 'react'



function TrItems(props) {
    return (
        <Fragment>
            <td>
                hello
            </td>
            <td>
                world
            </td>
        </Fragment>
    )
}

export default class App extends Component {
    constructor() {
        super();
    }

    render() {

        return (
            <table border='1px solid black'>
                <tr>
                    <TrItems />
                </tr>
            </table>
        )
    }
    componentDidMount() {
    }
}
