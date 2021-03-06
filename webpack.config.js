const path = require('path')

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        filename: 'Ktalk.min.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: '/.(js)$/',
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
}
