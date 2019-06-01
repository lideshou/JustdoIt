const Path=require('path')
const HTMLPlugin=require("html-webpack-plugin")
const {VueLoaderPlugin}=require("vue-loader")
const webpack=require("webpack")
const ExtractPlugin=require("mini-css-extract-plugin")
const isDev=process.env.NODE_ENV==="development"
const config={
    mode:'development',
    target: "web",
    entry:Path.join(__dirname,"src/index.js"),
    output:{
        filename:"bundle.js",
        path:Path.join(__dirname,"dist")
    },
    module:{
        rules:[
            {
                test:/\.vue$/,
                loader:"vue-loader",
                exclude:/node_modules/
            },
            {
                test:/\.jsx$/,
                loader: "babel-loader"
            },
            {
                test: /\.styl(us)?$/,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap:true,
                        }
                    },
                    "stylus-loader"
                ]
            },
            {
                test:/\.(jpg|gif|jepg|png|svg)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit:1024,
                            name:"[name]-aaa.[ext]"
                        }
                    }
                ]
            }
            ]
    },
    plugins:[
        new webpack.DefinePlugin({
            "process.env":{
                NODE_ENV:isDev ? '"development"':'"production"'
            }
        }),
        new HTMLPlugin(),
        new VueLoaderPlugin()
    ]
}

if(isDev){
    config.devtool="#cheap-module-eval-source-map"
    config.devServer={
        port:8000,
        host:"0.0.0.0",
        overlay:{
            errors:true,
        },
        hot:true
    }
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
        )
}

module.exports=config