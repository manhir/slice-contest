const path = require('path')

module.exports = {
    stories: ['../slices/**/*.stories.[tj]s'],
    webpackFinal: async (config, { configType }) => {
        config.resolve.alias['@/components'] = path.resolve(__dirname, '../components')
        return config
    },
}
