const path = require('path')
function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    publicPath: '/',
    outputDir: 'dist',
    assetsDir: 'static',
    lintOnSave: true,
    productionSourceMap: false,
    devServer: {
        port: 80,
        open: true,
        overlay: {
            warnings: false,
            errors: true
        },
        proxy: {
            '^/(v1)': {
                target: 'http://101.132.226.213',
                changeOrigin: true,
                secure: false
            }
        }
    },
    configureWebpack: {
        // provide the app's title in webpack's name field, so that
        // it can be accessed in index.html to inject the correct title.
        name: '遂宁12345',
        resolve: {
            alias: {
                '@': resolve('src')
            }
        }
        },
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require('postcss-pxtorem')({ // 把px单位换算成rem单位
                        rootValue: 37.5, // 换算的基数(设计图750的根字体为32)
                        selectorBlackList: ['weui', 'mu'], // 忽略转换正则匹配项
                        propList: ['*']
                    })
                ]
            }
        }
    }
}
