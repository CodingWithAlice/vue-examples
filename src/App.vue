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
    <!-- <div id="app">
        <img src="./assets/logo.png">
        <div v-if="flag">
            {{ msg }}
        </div>
        <div v-else>
            {{ msg1 }}
        </div>
        <button @click="change">change</button>
        <button @click="toggle">toggle</button>
    </div> -->
    <!-- nextTick -->
    <!-- <div id="app">
        <img src="./assets/logo.png">
        <div ref="msg">
            {{ msg }}
        </div>
        <button @click="change">change</button>
    </div> -->
    <!-- 检测变化中的注意事项 -->
    <!-- <div id="app">
        <img src="./assets/logo.png">
        <div>
            {{ msg }}
        </div>
        <ul>
            <li v-for="item in items" :key="item">{{ item }}</li>
        </ul>
        <button @click="add">add</button>
        <button @click="change">change</button>
    </div> -->
    <!-- 计算属性的实例 -->
    <!-- <div id="app">
        <img src="./assets/logo.png">
        <div>
            {{ name }}
        </div>
        <button @click="change">change</button>
        <button @click="changeLast">change last name</button>
    </div> --> 
    <!-- 组件更新实例 -->
    <!-- <div id="app">
        <HelloWorld :flag="flag"></HelloWorld>
        <button @click="toggle">切换</button>
    </div> -->
    <!-- 组件更新实例：新旧节点相同的情况 -->
    <div id="app">
        <div>
            <ul>
                <li v-for="item in items" :key="item.id">{{ item.val }}</li>
            </ul>
        </div>
        <button @click="change">change</button>
    </div>
</template>

<script>
// 这是组件更新的实例：新旧节点相同的情况
export default {
    name: 'app',
    components: {},
    data() {
        return {
            items: [
                {id: 0, val: 'A'},
                {id: 1, val: 'B'},
                {id: 2, val: 'C'},
                {id: 3, val: 'D'},
            ],
        }
    },
    methods: {
        change() {
            this.items.reverse().push({id: 4, val: 'E'});
        },
    },
// 这是组件更新的实例
// import HelloWorld from './components/HelloWorld.vue'
// export default {
//     name: 'app',
//     components: {HelloWorld},
//     data() {
//         return {
//             flag: true,
//         }
//     },
//     methods: {
//         toggle() {
//             this.flag = !this.flag;
//         },
//     },
// 这是计算属性的实例
// export default {
//     name: 'app',
//     data() {
//         return {
//             firstName: 'Alice',
//             lastName: 'Good',
//             useless: 0,
//             nested: {
//                 a: {
//                     b:1,
//                 }
//             }
//         }
//     },
//     computed: {
//         name() {
//             if (this.useless > 0) {
//                 return this.firstName + ',' + this.lastName;
//             }
//             return 'please click change'
//         }
//     },
//     methods: {
//         change() {
//             this.useless += 1;
//             this.nested.a.b = 2;
//         },
//         changeLast() {
//             this.lastName = 'Bad';
//         }
//     },
//     watch: {
//         useless(newVal) {
//             console.log('newVal', newVal);
//         },
//         name: {
//             immediate: true,
//             handler(newVal){
//                 console.log('name=', newVal)
//             }
//         },
//         nested: {
//             deep: true,
//             sync: true,
//             handler(newVal) {
//                 console.log('nested=',newVal.a.b);
//             }
//         }
//     }
// 这是Vue.set实例
// import Vue from 'vue';
// export default {
//   name: 'app',
//   data() {
//       return {
//           msg: {a: 'Hello'},
//           items: [1,2]
//       }},
//   methods: {
//       add() {
//           //   this.msg.b = 'Vue';
//           Vue.set(this.msg, 'b', 'Vue');
//           //   this.items[2] = 4;
//           this.items.push(4);
//       },
//       change() {
//         //   this.items[1] = 3;
//         Vue.set(this.items, 1, 3)
//       },
//   }
//   这是nextTick的实例
//   data() {return {msg: '这是初始msg',}},
//   methods: {
//       change() {
//           this.$nextTick(() => {
//               console.log('nextTick:', this.$refs.msg.innerText);
//           });
//           this.msg = '这是change方法中的msg改变';
//           console.log('sync:', this.$refs.msg.innerText);         
//           this.$nextTick().then(() => {
//               console.log('nextTick with Promise:', this.$refs.msg.innerText);
//           });
//       }
//   }
//   components: {// HelloWorld},
//   这是依赖收集的实例
    // data() {
    //     return {
    //         flag: true,
    //         msg: '这是msg',
    //         msg1: '这是msg1',
    //     }
    // },
    // methods: {
    //     change() {
    //         this.msg = Math.random();
    //     },
    //     toggle() {
    //         this.flag = !this.flag;
    //     }
    // },
    // 写一个会触发无限更新的bug，自定义一个watcher
    // watch: {
    //     msg() {
    //         this.msg = Math.random();
    //     },
    // },
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
