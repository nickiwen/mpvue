<template>
    <div class="shop-list">
        <ul>
            <li v-for="(item,index) in listData" :key="index">
                <navigator class="alink" :url="'../details/main?id='+item.id">
                    <div class="shop-list-img">
                        <img :src="item.img" alt="">
                    </div>
                    <div class="shop-list-text">
                        <p class="title">{{ item.title }}</p>
                        <p class="type">{{ item.houseType }}</p>
                        <p class="price">价格：{{ item.price }}元/月</p>
                        <span>{{ item.rentType }}</span>
                    </div>
                </navigator>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:"ShopListView",
    data(){
        return{

        }
    },
    props:{
        listData:{
            type:Object,
            default:function(){
                return{}
            }
        }
    }
}
</script>
<style scoped>

.shop-list{
    background: #f1f1f1;
}

.shop-list li{
    margin: 10px;
    padding: 10px;
    border-radius: 5px;
    overflow: hidden;
    clear: both;
    background: #fff;
}
.alink{
    display: flex;
}

.shop-list li .shop-list-img{
    flex:1;
}

.shop-list li .shop-list-img img{
    width: 300rpx;
    height: 200rpx;
}

.shop-list li .shop-list-text{
    flex:1;
}

.shop-list li .shop-list-text .title{
    font-size: 12px;
    color: #222;
}

.shop-list li .shop-list-text .type{
    font-size: 10px;
    color:#666;
    margin-top:5px;
}

.price{
    font-size:15px;
    margin-top:5px;
}

.shop-list li .shop-list-text span{
    border: 2px solid #7b98a6;
    padding:4rpx 20rpx;
    font-size:20rpx;
    border-radius:10rpx;
    color:#7b98a6;
    margin-top:16px;
    display:block;
    width:40rpx;
}
    
</style>