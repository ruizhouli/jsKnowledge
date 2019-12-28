const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const obj={
    mode:'production',
    entry:'./1.js',
    // entry:{
    //     index:'./1.js'
    // },
    output:{
        path:path.resolve(__dirname,'./dest'),
        filename:'bound.js',
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use: [{
                    loader: MiniCssPlugin.loader
                }, 'css-loader'],
                //排除node_modules
                // exclude: [
                //     path.resolve(__dirname, "node_modules")
                // ],
                // use:[
                //     'style-loader'
                //     ,
                //     'css-loader'
                // ]
            },
            {
                test: /\.css$/,
                use:[ 
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            },
            // {
            //     test:/\.css$/,
            //     use:[{loader:MiniCssPlugin.loader},'css-loader']
            // },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                        outputPath: 'images/',
                    }
             }
           
           ]
        },
       
      ]

    },
    /* devServer:{
            contentBase:'/',//访问服务器的根目录
            host:'localhost',//服务器的ip地址
            port:8080,//端口号
            open:true,//自动打开
            hot:true,//热加载
            inline:true,//实时刷新
            historyApiFallback:true,//不跳转
    }, */
    plugins: [new HtmlWebpackPlugin({
        template: './1.html',
        filename:'1.html',
        title:'哈哈',
        minify:{
            removeComments: true,//去除html中的注释
            collapseWhitespace: true,// 删除空白符与换行符
            collapseBooleanAttributes: true,////是否简写boolean格式的属性如：disabled="disabled" 简写为disabled  默认false
            removeAttributeQuotes: true,////是否移除属性的引号 默认false
        }
    }), new MiniCssPlugin({
        filename:'./css/[name].css'
    }),], 
    // new MiniCssPlugin({
    //     filename:'./[name].css'
    //   }),
   
      optimization:{
        minimizer:[
            new TerserPlugin({ // 压缩js
              cache:  true,
              parallel:  true,
              sourceMap: true,
            }),
            new OptimizeCSSAssetsPlugin({ // 压缩css
              cssProcessorOptions: {
                safe: true
              }
            })
          ],
        // cacheGroups: {
        //     styles: {            
        //       name: 'styles',
        //       test: /\.scss|css$/,
        //       chunks: 'all',    // merge all the css chunk to one file
        //       enforce: true
        //     }
          }
      }
module.exports=obj;