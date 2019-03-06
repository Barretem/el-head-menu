<template>
  <div class="el-head-menu">
    <ul class="clearfix">
      <li v-for="(item, index) in showList"
          :class="{active : currentHref === item.href}"
          @click="handleMenu(item)"
          :key="index">
        <span class="button-container">{{item.name}}</span>
      </li>
      <li v-if="moreList.length">
        <el-dropdown @command="handleMenu">
          <i class="el-icon-more button-container more-icon"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="(item, index) in moreList"
                              :class="{'drop-item': true, 'active-drop-item': currentHref === item.href}"
                              :command="item"
                              :key="index">
              {{item.name}}
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ElHeadMenu',
  props: {
    /**
     * 头部导航栏
     */
    menuList: {
      type: Array,
      default() {
        return []
      }
    },
    maxLength: {
      type: Number,
      default: 7
    },
    noJump: Boolean
  },
  data() {
    // 获取当前的hash路由
    const hashRouter = this.getCurrentPath()
    return {
      currentHref: hashRouter
    }
  },
  computed: {
    showList: function() {
      if (this.menuList.length <= this.maxLength) return this.menuList
      return this.menuList.slice(0, this.maxLength - 1)
    },
    moreList: function() {
      if (this.menuList.length <= this.maxLength) return []
      return this.menuList.slice(this.maxLength - 1)
    }
  },
  methods: {
    // 点击目录进行跳转
    handleMenu(item) {
      const {href} = item
      const currentOrigin = location.origin
      if (this.noJump) {
        this.currentHref = href
      } else {
        location.href = `${currentOrigin}/${href}`
      }
    },
    // 获取当前的url路径
    getCurrentPath() {
      const currentPath = location.href.split('?')[0],
        currentOrigin = location.origin
      return currentPath.split(currentOrigin)[1] || ''
    }
  }
}
</script>

<style lang="stylus">
.drop-item {
  padding: 0 40px;
}
.active-drop-item {
  background-color: #ECF5FF;
  color: #66B1FF
}

.el-head-menu {
  //清除浮动
  .clearfix{
    &:after{
      display:block;
      clear:both;
      content:"";
      visibility:hidden;
      height:0
    }
  }

  li {
    list-style: none
  }

  .button-container {
    display: block;
    height: 60px;
    line-height: 60px;
    padding: 0 20px;
  }

  .more-icon {
    font-size: 18px;
  }

  ul {
    background-color: #2D303B;

    color: rgba(255, 255, 255, 0.6);
    font-size: 14px;

    li {
      float: left;

      cursor: pointer;
      &:hover {
        color: rgba(255, 255, 255, 1);
      }
    }

    .active {
      position: relative;

      color: rgba(255, 255, 255, 1);

      &:after {
        content: "";

        position: absolute;
        left: 50%;
        bottom: 12px;

        display: block;

        margin-left: -15px;
        width:30px;
        height:2px;
        background:rgba(255,255,255,1);
      }
    }
  }
}
</style>
