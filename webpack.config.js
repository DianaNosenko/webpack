const path = require('path');

module.exports = {
    entry: './src/index.js',              // точка входа
    output: {                             // точка выхода
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
        {
            test: /\.css$/i,
            use: ['css-loader'],
        },
        {
          test: /\.s[ac]ss$/i,
          use: ['sass-loader'],
        },
    ]
    }

};