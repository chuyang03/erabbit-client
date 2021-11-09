import { createStore } from 'vuex'

const moduleA = {

  state:{
    username:'moduleA'
  },
  getters:{
    newName(state){
      return state.username + '!!!!A'
    }
  },
  mutations:{
    updateName(state){
      state.username = 'lisi'
    }
  },
  actions:{
    updateName(context){
      setTimeout(() => {
        context.commit('updateName')
      }, 1000);
    }
  }
}
const moduleB = {
  namespaced:true,
  state:{
    username:'moduleB'
  },
  getters:{
    newName(state){
      return state.username + '!!!!B'
    }
  },
  mutations:{
    updateName(state){
      state.username = 'lisi'
    }
  },
  actions:{
    updateName(context){
      setTimeout(() => {
        context.commit('updateName')
      }, 1000);
    }
  }

}


export default createStore({
  modules:{
    moduleA,
    moduleB
  }
})

// vue2.0  new Vuex.store({})
// vue3.0  createStore({})
// export default createStore({
//   state: {
//     username: 'hello'
//   },
//   getters: {
//     // 存放计算属性
//     newName(state){
//       return state.username + '!!!'
//     }
//   },
//   mutations: {
//     updateName(state){
//       state.username = 'zhangsan'
//     }
//   },
//   actions: {
//     updateName(context){
//       setTimeout(() => {
//         context.commit('updateName')
//       }, 1000);
//     }
//   },
//   modules: {

//   }
// })
