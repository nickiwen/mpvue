<template>
    <div class="hotproduct">
        <h3>{{ title }}</h3>
        <div class="hot-container">
            <ul>
                <li :key="index" v-for="(element,index) in listData">
                    <a :href="element.link">
                        <img :src="element.img" alt="" />
                        <span>{{ element.title }}</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name:"HomeHotView",
    data(){
        return{

        }
    },
    props:{
        listData:{
            type:Array,
            default:function(){
                return []
            }
        },
        title:{
            type:String,
            default:""
        }
    }
}
</script>
<style scoped>

.clear-fix{
    display: table;
    content: '';
    clear: both;
}

.hotproduct h3{
    margin-top: 10px;
    font-size: 15px;
    font-weight: normal;
    text-align: center;
}
.hotproduct .hot-container{
    padding: 15px;
    background: #fff;
    margin: 10px;
    border-radius: 5px;
    box-shadow:1px 1px 5px 1px #e1e1e1;
}

.hotproduct ul{
    display:flex;
}

.hotproduct .hot-container li{
    flex:1;
    overflow: hidden;
    padding: 5px;
    box-sizing:border-box;
}

.hotproduct .hot-container li a img{
    width: 135rpx;
    height:135rpx;
}
.hotproduct .hot-container li a span{
    display: block;
    text-align: center;
    font-size: 15px;
}

</style>