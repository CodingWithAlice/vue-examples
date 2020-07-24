<template>
  <!-- <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld/>
  </div> -->
    <!-- 这是响应式对象的实例调试 -->
    <div>
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
    </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    // HelloWorld
  },
  data() {
      return {
          nested: {
              msg: '这是响应式对象的实例调试'
          }
      }
  },
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
