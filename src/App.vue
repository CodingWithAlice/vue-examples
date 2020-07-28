<template>
  <!-- <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld/>
  </div> -->
    <!-- 这是响应式对象的实例调试 -->
    <!-- <div>
        <h1> {{ nested.msg }} </h1>
        <ul>
            <li>
                <a href="#">这是一个链接</a>
            </li>
            <li>
                <a href="#">这是二个链接</a>
            </li>
            <li>
                <a href="#">这是三个链接</a>
            </li>
        </ul>
    </div> -->
    <!-- 这是依赖收集的实例调试 -->
    <div id="app">
        <img src="./assets/logo.png">
        <div v-if="flag">
            {{ msg }}
        </div>
        <div v-else>
            {{ msg1 }}
        </div>
        <button @click="change">change</button>
        <button @click="toggle">toggle</button>
    </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {// HelloWorld
},
//   这是依赖收集的实例
    data() {
        return {
            flag: true,
            msg: '这是msg',
            msg1: '这是msg1',
        }
    },
    methods: {
        change() {
            this.msg = Math.random();
        },
        toggle() {
            this.flag = !this.flag;
        }
    },
    // 写一个会触发无限更新的bug，自定义一个watcher
    watch: {
        msg() {
            this.msg = Math.random();
        },
    },
//   这是响应式对象的实例调试
//   data() {
//       return {
//           nested: {
//               msg: '这是响应式对象的实例调试'
//           }
//       }
//   },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
