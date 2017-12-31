//webpack.dll.conf.js
process.env.NODE_ENV = 'production'
const path = require('path');
var utils = require('./utils')
var vueLoaderConfig = require('./vue-loader.conf')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const webpack = require('webpack');
//vue项目默认有一个static目录.我就把导出目录放在了static/dll/目录下
// const srcPath = path.join(__dirname, '../static/dll/');
const srcPath = path.join(__dirname, '../../static/dll');
//需要编译的模块
const vendors = [
    // 'vue/dist/vue.esm.js',
    // 'vue-router',
    // 'vue-localstorage',
    // 'material-design-icons/iconfont/material-icons.css',
    // 'iview/dist/styles/iview.css',
    // 'iview/src/components/tag/tag.vue',
    // 'muse-ui/src/appBar'
    'Vue',
    './sinda',
    './router',
    './store',
    'element-ui',
    'element-ui/lib/theme-chalk/index.css',
    'element-ui/lib/theme-chalk/display.css',
    'axios',
    'qs',
    'v-distpicker',
    'vue-router',
    '../components/merchandise/merchandise',
    '../components/merchandise/allProduct/allProduct.vue',
    '../components/merchandise/taxationService/taxationService.vue',
    '../components/merchandise/taxationService/productdetail.vue',
    '../components/merchandise/joinUs/joinUs.vue',
    '../components/merchandise/shop/shop.vue',
    '../components/merchandise/order/failurePay.vue',
    '../components/merchandise/order/paySuccess.vue',
    '../components/merchandise/shop/pc_shophp.vue',
    '../components/merchandise/order/goodsOrder.vue',
    '../components/merchandise/shoppingtrolley/shoppingtrolley.vue',
    '../components/userData/userData.vue',
    '../components/userData/login.vue',
    '../components/userData/register.vue',
    '../components/userData/forgetPassword.vue',
    '../components/merchandise/membercenter/membercenter.vue',
    '../components/merchandise/membercenter/member.vue',
    '../components/merchandise/membercenter/accountpwd.vue',
    '../components/merchandise/membercenter/toevaluate.vue',
    '../components/merchandise/membercenter/userevalua.vue',
    '../components/merchandise/my/unregistered.vue',
    '../components/merchandise/my/havelogined.vue',
    '../components/merchandise/my/accountset.vue',
    '../components/merchandise/order/pay',
    '../components/merchandise/order/Alipay',
    '../components/merchandise/allProduct/navShow.vue',
    '../components/pagePublic',
    '../components/merchandise/membercenter/myOrderTel.vue',
    '../components/pagePublic.vue'
];
webpackConfig = {
    entry: {
        vendor: vendors
    },
    resolve: {
        extensions: ['.js', '.vue', '.json']
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: vueLoaderConfig
            },
            {
                test: /iview.src.*?js$/,
                loader: 'babel-loader'
            },
            {
                test: /muse-ui.src.*?js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: "css-loader"
                })
            },
            {
                test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    publicPath: './',
                    limit: 1000,
                    name: 'fonts/[name].[ext]'
                }
            }]
    },
    output: {
        path: srcPath, // 输出的路径
        filename: '[name].dll.js', // 输出的文件，将会根据entry命名为vendor.dll.js
        // library: '[name]_library' // 暴露出的全局变量名
        library: '[Vue]_library' // 暴露出的全局变量名
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '[name].dll.css'
        }),
        new OptimizeCSSPlugin({
            cssProcessorOptions: {
                safe: true
            }
        }),
        new webpack.optimize.UglifyJsPlugin({ // uglifjs压缩
            compress: {
                warnings: false
            }
        }),
        new webpack.DllPlugin({
            path: path.join(srcPath, '[name]-mainfest.json'), // 描述依赖对应关系的json文件
            name: '[Vue]_library',
            context: __dirname // 执行的上下文环境，对之后DllReferencePlugin有用
        })
    ]
}
if (process.env.npm_config_report) {
    var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
    webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}
module.exports = webpackConfig;