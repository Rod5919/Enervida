const path = require('path');

// module.exports = {
//     mode: 'development',<
//     entry: './src/login.js',
//     output: {
//         path: path.resolve(__dirname, 'dist'),
//         filename: 'bundle.js'
//     }
// }

module.exports = {
    mode: 'development',
    entry: './src/logout.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle2.js'
    }
}