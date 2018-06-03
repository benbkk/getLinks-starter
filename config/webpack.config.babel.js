import HtmlWebpackPlugin from 'html-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
// import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import paths from './paths';
import postCssConfig from './postcss.config';

export default {
    output: {
        filename: "js/bundle.js"
    },
    resolve: {
        alias: {
            components: paths.appComponents,
            static: paths.appStaticComponent,
            config    : paths.appConfig
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader"
                    }
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            minimize: true
                        }
                    }
                ]
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
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => postCssConfig
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.ejs",
            title: 'Frontend Starter',
            filename: "index.html",
            inject: true,
            minify: true
        }),
        new CleanWebpackPlugin(
            [paths.appDist], 
            {
                allowExternal: true
            }
        ),
        /* new MiniCssExtractPlugin({
            filename: "css/[name].css",
            chunkFilename: "[id].css"
        }) */
    ]
};