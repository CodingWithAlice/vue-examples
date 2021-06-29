// import Vue from 'vue'
// import App from './App.vue'

// Vue.config.productionTip = false

// new Vue({
//   render: h => h(childComp),
// }).$mount('#app')

// let childComp = { 
//     template: '<div>{{msg}}</div>', 
//     created() { 
//         console.log('child created') 
//     },
//     mounted() { 
//         console.log('child mounted') 
//     },
//     data() { 
//         return { 
//             msg: 'Hello Vue' 
//         } 
//     } 
// }

// Vue.mixin({ 
//     created() { 
//         console.log('parent created') 
//     } 
// })
// new Vue({ 
//     el: '#app', 
//     render: h => h(childComp) 
// })
// 全局注册代码
import Vue from 'vue'
import App from './App.vue'

Vue.component('app', App)

new Vue({
    el: '#app',
    template: `<div>
    <div>你好aaa</div>
    <div v-html="pureHtml"></div>
    <div v-html="spanHtml"></div>
    </div>`,
    data() {
        return {
            spanHtml: `<span>你好111</span>`,
            pureHtml: '你好111',
        }
    }
})
// 异步组件--工厂函数
// import Vue from 'vue'
// import App from './App.vue'

// Vue.component('HelloWorld', function (resolve) {
//     // 这个特殊的 require 语法将告诉 webpack 自动将编译后的代码分割成不同的块
//     require(['./components/HelloWorld'], function(res) {
//         resolve(res);
//     })
// })

// new Vue({
//     el: '#app',
//     render(h) {
//         return h(App)
//     }
// })
// 异步组件--Promise
// import Vue from 'vue'
// import App from './App.vue'

// Vue.component('HelloWorld', 
//     // 该'import'函数返回一个'Promise'对象
//     () => import('./components/HelloWorld.vue')
// )

// new Vue({
//     el: '#app',
//     render(h) {
//         return h(App)
//     }
// })
// 异步组件--高级异步组件
// import Vue from 'vue'
// import App from './App.vue'
// import { component } from 'vue/types/umd'

// const LoadingComp = {
//     template: '<div>loading</div>'
// }

// const ErrorComp = {
//     template: '<div>error</div>'
// }

// const AsyncComp = () => ({
//     // 需要加载的组件，应当是一个Promise【借助webpack的import语法】
//     component: import('./components/HelloWorld.vue'),
//     // 加载中应当渲染的组件
//     loading: LoadingComp,
//     // 出错时渲染的组件
//     error: ErrorComp,
//     // 渲染加载中组件前的等待时间，默认200ms
//     delay: 200,
//     // 最长等待时间，超出此时间则渲染错误组件，默认 infinity
//     timeout: 1000
// })

// Vue.component('HelloWorld', AsyncComp)

// new Vue({
//     el: '#app',
//     render(h) {
//         return h(App)
//     }
// })

// 编译
// import Vue from 'vue'
// import App from './App.vue'

// Vue.config.productionTip = false;

// new Vue({
//     el: '#app',
//     components: { App },
//     template: `
//         <div id="app"><div><ul v-if="isShow"><li v-for="(item, index) in items" :key="index"><><{{ item.val }}</li></ul></div><button @click="change">change</button></div>`, 
//     data() {
//         return {
//             isShow: false,
//             items: [
//                 {val:1},
//                 {val:2},
//             ]
//         }
//     },
//     methods: {
//         change() {
//             console.log('change');
//         }
//     }
// })

// optimize
// import Vue from 'vue'
// import App from './App.vue'

// Vue.config.productionTip = false;

// new Vue({
//     el: '#app',
//     components: { App },
//     template: '<div><ul :class="bindCls" class="list" v-if="isShow"><li v-for="(item, index) in data" @click="clickItem(index)" :key="index">{{item}}:{{index}}</li></ul><div><p>111</p></div><p>222</p></div>', 
//     data() {
//         return {
//             bindCls: 'a',
//             isShow: true,
//             data: ['A', 'B', 'C', 'D'],
//         }
//     },
//     methods: {
//         clickItem(index) {
//             console.log('change', index);
//         }
//     }
// })