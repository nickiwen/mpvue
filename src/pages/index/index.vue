<template>
  <div>
    <HeadNav />
    <MySwiper :imgUrls="imgUrls" />
    <Homehot />
  </div>
</template>

<script>
import HeadNav from '@/components/headnav'
import MySwiper from "@/components/myswiper"
import Homehot from "./subpage/homehot"

export default {
  data () {
    return {
      imgUrls:[
        require("../../../static/images/banner1.png"),
        require("../../../static/images/banner2.png"),
        require("../../../static/images/banner3.png"),
        require("../../../static/images/banner4.png")
      ]
    }
  },

  components: {
    HeadNav,
    MySwiper,
    Homehot
  },

  methods: {
    
  }
}
</script>

<style scoped>


</style>
