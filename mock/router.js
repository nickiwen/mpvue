const express = require("express");
const request = require('request');
const router = express.Router();
const homeHot = require("./data/homehot")
const homeHot2 = require("./data/homehot2")
const cityHomeHot = require("./data/cityhomehot")
const searchData = require('./data/searchdata')
const detailsData = require("./data/details");
const commentData = require("./data/comment")
const orderData = require("./data/order");
const url = require("url");


// homehot
router.get("/api/homehot",function(req,res){
    const city = url.parse(req.url,true).query.city;
    console.log(city);
    if(city === "上海"){
        res.send(cityHomeHot)
    }else{
        res.send(homeHot)
    }
})

router.get("/api/homehot2",function(req,res){
    res.send(homeHot2)
})

// 搜索接口
router.get("/api/search",function(req,res){
    // 搜索内容
    const searchContent = url.parse(req.url,true).query.content;
    const city = url.parse(req.url,true).query.city;
    console.log(searchContent);
    console.log(city);
    res.send(searchData)
})


// 详情
router.get('/api/details',function(req,res){
    // id
    const id = url.parse(req.url,true).query.id;
    console.log(id);
    res.send(detailsData);
})

// 评价 
router.get("/api/comment",function(req,res){
    const id = url.parse(req.url,true).query.id;
    const page = url.parse(req.url,true).query.page;
    console.log(id);
    console.log(page);
    res.send(commentData);
})

// 订单
router.get("/api/order",function(req,res){
    const username = url.parse(req.url,true).query.username;
    console.log(username);
    res.send(orderData)
})

// 接受评价数据
router.post("/api/comment",function(req,res){
    const commentContent = req.body.content;
    console.log(commentContent);
    res.send({
        msg:"评价成功"
    })
})


// 城市信息
router.get('/lbs/location', function (req, res, next) {
    let lat = req.query.latitude
    let lng = req.query.longitude
  
    request.get({
        uri: 'https://apis.map.qq.com/ws/geocoder/v1/',
        json: true,
        qs: {
            location: `${lat},${lng}`,
            key: '24EBZ-QOT3V-RN3P2-ULHSA-D6KIH-FEFB4'
        }
    }, (err, response, data) => {
        if (response.statusCode === 200) {
            res.send(data)
        } else {
            res.send({
                msg:"获取失败"
            })
        }
    })
})

module.exports = router;