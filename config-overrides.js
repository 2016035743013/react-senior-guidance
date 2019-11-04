// module.exports = (configs) => {
//     //如果没有使用customiza-cra 那么就在这可以对config进行配置
//     return configs;
// }

const {
    override,
    addDecoratorsLegacy
} = require("customize-cra");
module.exports = override(
    addDecoratorsLegacy()
)