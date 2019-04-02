let path =require("path");
module.exports={
    //要打包的文件
    entry: path.join(__dirname, "./main.ts"),
    output:{
        path:path.join(__dirname,'./dist'),
        filename:"bundle.js"
    },
    resolve:{
        extensions:['.ts','.js']
    },
    module:{
        rules:[
            {
                test:/\.ts$/,use:"ts-loader"
            }
        ]
    }
}