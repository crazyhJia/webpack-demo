/**
 *@author     黄佳
 *@date       2019/12/13  16:09
 *@Copyright 天源迪科信息技术股份有限公司
 *@Description
 */
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        // filename: 'main.js',
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                     test: /\.(csv|tsv)$/,
             use: [
               'csv-loader'
             ]
       },
       {
         test: /\.xml$/,
            use: [
               'xml-loader'
             ]
       }
        ]
    }
};
