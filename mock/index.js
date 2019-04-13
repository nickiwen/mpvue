const express = require("express");
const app = express();
const router = require("./router")
// 引入中间件  body-parser
var bodyParser = require("body-parser");

// 配置中间件
app.use(bodyParser.urlencoded({
	extended: true
}));

app.use("/",router);

app.listen(3300,function(){
    console.log("3300");
})