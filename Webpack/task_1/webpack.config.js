const path = require('path');

module.exports = {
  mode: 'production',
  entry: './js/dashboard_mainh.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
};