const path = require("path")//导入path模块

const resolve = dir => path.resolve(__dirname, dir)
const CracoLessPlugin = require("craco-less")
module.exports = {
    babel: {
        plugins: [
            ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
        ],
    },
    webpack: {
        alias: {
            '@': resolve('src'),
            '@components': resolve('src/components'),
            '@pages': resolve('src/pages'),
            '@config': resolve('src/config'),
            '@layouts': resolve('src/layouts'),
            '@services': resolve('src/services'),
            '@utils': resolve('src/utils'),
            '@context': resolve('src/context'),
            '@assets': resolve('src/assets'),
        },
    },
    // 自定义主题颜色
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            'primary-color': '#722ed1',
                            'link-color': '#722ed1',
                            
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },

    ],
};