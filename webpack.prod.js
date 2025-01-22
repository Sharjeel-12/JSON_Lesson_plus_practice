const {merge}=require('webpack-merge');
const common_js=require('./webpack.common.js');

module.exports=merge(common_js,{
    mode:"production",
});
