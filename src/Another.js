import React from 'react'
import { withCopyRight } from './copyRight'


// 让cra支持@装饰器写法
// 1.不管你是要配置什么，我们最好的方式是使用react-app-rewired这个包来对cra创建的项目进行轻微的配置调整
// 2.安装好之后，在package.json里吧scripts里的react-scripts替换成react-app-rewired
// 3.在根目录下创建一个config-overrides.js
// // module.exports = (configs) => {
//     //如果没有使用customiza-cra 那么就在这可以对config进行配置
//     return configs;
// }
// 4.如果想要配置更方便，可以在安装customize-cra，然后把config-overrides.js改成这样
// const {
//     override,
//     addDecoratorsLegacy
// } = require("customize-cra");
// module.exports = override(
//     addDecoratorsLegacy()
// )


@withCopyRight
class Another extends React.Component {
    render() {
        return (
            <div>
                {this.props.name}
            </div>
        )
    }
}
export default Another;