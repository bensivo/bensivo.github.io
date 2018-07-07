const path=require('path');
module.exports={
    mode: 'development',
    entry: './index.js',
    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    resolve:{
        extensions:['.js','.jsx'],
    },

    module: {
        rules:[
            { test: /\.jsx?$/, exclude:/node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' },
            { test: /\.css$/, loaders: ['style-loader', 'css-loader'] }
        ]
    }
}
