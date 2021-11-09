<template>
  <div>
    <!-- 使用根模块的state属性 -->
    <!-- <p>{{$store.state.username}}</p> -->

    <!-- 使用根模块的getters计算属性，也可以写成 $store.getters['newName']-->
    <!-- <p>{{$store.getters.newName}}</p> -->
    <!-- <button @click="updateFn">更换name</button> -->

    <hr>
    <!-- 分模块调用 -->
    <h3>分模块调用state数据</h3>
    <p>{{$store.state.moduleA.username}}</p>
    <p>{{$store.state.moduleB.username}}</p>

    <!-- 分模块调用计算属性 -->
    <h3>分模块计算属性</h3>
    <p>{{$store.getters.newName}}</p>
    <p>{{$store.getters['moduleB/newName']}}</p>

    <!-- 分模块调用方法 -->

    <button @click="updateNameB">分模块更改姓名</button>
  </div>
</template>

<script>
import { useStore } from 'vuex';
export default {
  name: 'App',
  setup() {
    // 使用vuex仓库
    const store = useStore()
    console.log(store.state.username)
    console.log(store.getters.newName)

    const updateFn = () => {
      // store.commit('updateName')
      store.dispatch('updateName')
    }

    // 分模块调用mutations
    const updateNameB = () => {
      store.commit('moduleB/updateName')
    }

    return {
      updateFn,
      updateNameB
      }
  }
}
</script>

<style>

</style>