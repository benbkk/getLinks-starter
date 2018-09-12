import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import UglifyJSPlugin from 'uglifyjs-webpack-plugin';
import paths from './paths';
import postCssConfig from './postcss.config';

export default {
    entry: {
        main: paths.appIndexJs,
    },
    output: {
        filename: '[name]-[hash].js',
        chunkFilename: '[name]-[chunkhash].js',
        path: `${paths.appDist}/`,
        publicPath: '/',
    },
    resolve: {
        alias: {
            components: paths.appComponents,
            public: paths.public,
            static: paths.appStaticComponent,
            config: paths.appConfig,
            src: paths.appSrc,
            css: paths.css,
            reducers: paths.reducers,
            constants: paths.constants,
            actions: paths.actions,
            fonts: paths.fonts,
            state: paths.state,
            store: paths.store,
            helpers: paths.helpers,
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                ],
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                    },
                ],
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => postCssConfig,
                        },
                    },
                ],
            },
            {
                test: /bootstrap\.native/,
                use: {
                    loader: 'bootstrap.native-loader',
                },
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: './fonts/[name].[ext]',
                            path: paths.appDist,
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpg|ico)$/,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: `${paths.public}/index.ejs`,
            filename: 'index.html',
            title: 'Let\'s Get Workin\' | getLinks',
            minify: true,
            favicon: `${paths.public}/favicon.png`,
            prefix: '/',
            
        }),
        new CleanWebpackPlugin(
            [paths.appDist],
            {
                allowExternal: true,
            },
        ),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
    optimization: {
        splitChunks: {
            name: false,
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all',
                    priority: -10,
                    enforce: true,
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                },
            },
        },
        minimizer: [
            new UglifyJSPlugin({
                parallel: true,
                cache: true,
                sourceMap: false,
                uglifyOptions: {
                    ecma: 5,
                    warnings: true,
                    comments: false,
                    beautify: true,
                },
            }),
        ],
    },
    devServer: {
        publicPath: '/',
        historyApiFallback: true,
        contentBase: false,
        hot: true,
    },
};
