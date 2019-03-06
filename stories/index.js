import {storiesOf} from '@storybook/vue'

import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import Basic from './basic.vue'
import HideMore from './hide-more.vue'

storiesOf('el-link-select', module)
  .add('基础用法', () => ({
    template: `<Basic/>`,
    components: {Basic}
  }))
  .add('当数据超过maxLength个时，隐藏显示', () => ({
    template: `<HideMore/>`,
    components: {HideMore}
  }))
