import React from 'react';

const withCopyRight = (YourComponent) => {
    return class WithCoypRight extends React.Component {

        render() {
            console.log(this.props);
            return (
                <h1>
                    <YourComponent {...this.props} />
                    这是高阶组件的内容
                </h1>
            )
        }
    }
}
export { withCopyRight }