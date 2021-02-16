const path = require('path')

module.exports = {
    stories: [
        '../slices/**/*.stories.[tj]s',
        '../components/**/*.stories.[tj]s',
    ],
    addons: ['@storybook/addon-knobs'],
    webpackFinal: async (config, { configType }) => {
        // /components in next and storybook
        config.resolve.alias['@/components'] = path.resolve(
            __dirname,
            '../components'
        )

        // module.css in storybook
        const css_regex = '/\\.css$/'
        const cssRule = config.module.rules.find(
            (_) => _.test.toString() === css_regex
        )
        const newConfig = {
            ...config,
            module: {
                ...config.module,
                rules: [
                    ...config.module.rules.filter(
                        (_) => _.test.toString() !== css_regex
                    ),
                    {
                        ...cssRule,
                        exclude: /\.module\.css$/,
                    },
                    {
                        ...cssRule,
                        test: /\.module\.css$/,
                        use: [
                            'style-loader',
                            {
                                loader: 'css-loader',
                                options: {
                                    importLoaders: 1,
                                    modules: true,
                                },
                            },
                        ],
                    },
                ],
            },
        }

        return newConfig
    },
}
