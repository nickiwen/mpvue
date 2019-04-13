<template>
    <div id="home-header" class="clear-fix">
        <div class="home-header-left float-left">
            <span>
                <span v-if="cityName">{{ cityName }}</span>
                <i class="icon-angle-down"></i>
            </span>
        </div>
        <div class="home-header-right float-right">
            <img :src="searchImg" />
        </div>
        <div class="home-header-middle">
            <div class="search-container">
                <i class="icon-search"></i>
                <input @change="bindHandler"/>
            </div>
        </div>
    </div>
</template>
<script>

import store from "../store"

export default {
    name:"HeadNav",
    data(){
        return{
            searchImg:require("../../static/images/car.png"),
            cityName:store.state.cityName
        }
    },
    methods:{
        bindHandler(event){
            wx.navigateTo({
                url:"../search/main?content=" + event.target.value
            })
        },
        updateName(){
            store.commit("setName")
        }
    },
    mounted() {
        const _this = this;
        wx.getLocation({
            type: 'wgs84', // 返回可以用于wx.openLocation的经纬度
            success(res) {
                const latitude = res.latitude
                const longitude = res.longitude
                wx.request({
                    url: _this.Config.G_URL + '/lbs/location', // 仅为示例，并非真实的接口地址
                    data:{
                        latitude:latitude,
                        longitude:longitude
                    },
                    header: {
                        'content-type': 'application/json' // 默认值
                    },
                    success(res) {
                        if(res.data.result.address_component.city){
                            if(res.data.result.address_component.city.length>2){
                                _this.cityName = res.data.result.address_component.city.substring(0,2);
                                // vuex存储城市信息
                                store.commit("setName",res.data.result.address_component.city.substring(0,2))
                            }
                        }else{
                            _this.cityName = "未知"
                        }
                    }
                })
            }
        })
    }
}
</script>
<style scoped>
*{
    font-size:10rpx;
}
#home-header {
    background-color: #ff5555;
    padding:22rpx 10rpx;
}

#home-header .float-left{
    float:left;
}

#home-header .float-right{
    float:right;
}

.home-header-left {
    width: 40px;
    text-align: left;
    margin: 5rpx 0;
    color:#fff;
}
.home-header-left span{
    font-size:15px;
}
.home-header-middle {
    width: auto;
    margin: 0 20px 0 30px;
}
.search-container {
    background-color: #fff;
    border-radius: 5px;
    overflow: hidden;
    padding: 5rpx;
}
.search-container i {
    color: #ccc !important;
}
input {
    font-size: 14px !important;
    font-weight: normal;
    border: none;
}
.home-header-right {
    width: 50rpx;
    margin: 5px 0;
    text-align: right;   
}

.home-header-right img{
    width:50rpx;
    height:50rpx;
}
.home-header-right i{
    font-size: 18px !important;
}


</style>