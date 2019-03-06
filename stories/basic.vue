<template>
  <div>
    <p>基础用法</p>
    <el-head-menu :menuList="menuList"
                  noJump
                  @click="handleClick">
    </el-head-menu>
  </div>
</template>

<script>
import _axios from 'axios'
const MENU_LIST_URL =
  'http://yapi.deepexi.io:5002/mock/95/mock/api/v1/headMenuList'

export default {
  data() {
    return {
      inputValue: 'http://dev.deepexi.io/xpaas-pay-console/index.html#/',
      menuList: []
    }
  },
  mounted() {
    this.fetchMenuList()
  },
  methods: {
    // 请求头部menu数据
    fetchMenuList() {
      _axios.get(MENU_LIST_URL).then(res => {
        const payload = res.data.payload || []
        this.menuList = payload.slice(0, 7)
      })
    },
    handleClick(row) {
      console.log(row)
    }
  }
}
</script>

<style>
</style>
