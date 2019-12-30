const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const optimizeCss = require('optimize-css-assets-webpack-plugin');

const glob = require('glob');
const PurifyCssPlugin = require('purifycss-webpack');
module.exports={
    mode:'production',
    entry: "./src/index.js",
    output: {
        // 输出，只可指定一个输出配置
        path: path.resolve(__dirname, "dist"), // string
        //  所有输出文件所在的目录
        // 必须是绝对路径(use the Node.js path module)
        filename: "bundle.js", // string    // 输出文件的
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    {
                        loader:MiniCssExtractPlugin.loader
                    },
                    'css-loader'
                ]
            }
        ]
    },
    plugins:[
       
        new MiniCssExtractPlugin({
            filename: './css/[name].css',
        }),
        new HtmlWebpackPlugin({ // 打包输出HTML
            minify: { // 压缩HTML文件
              removeComments: true, // 移除HTML中的注释
              collapseWhitespace: true, // 删除空白符与换行符
              minifyCSS: true// 压缩内联css
            },
            filename: 'index.html',
            template: './src/index.html'
          }),
        new PurifyCssPlugin ({
            paths: glob.sync(path.join(__dirname,'./src/*.html'))
        }),
        new optimizeCss(),
        
    ]


}