// new Vue() 创建一个应用实例对象

import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
// 1. 以 App根组件 作为参数生成一个应用实例对象
// 2. 挂载到 id 为 app 的节点上
createApp(App).mount('#app')
