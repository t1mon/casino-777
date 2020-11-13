import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentNum:0
  },
  mutations: {
    changeCounter (state, payload){
      //state.currentNum = payload
      localStorage.setItem('count',payload)
    },
    changeId(state, payload){
      localStorage.setItem('id',payload)
    }
  },
  getters:{
    computedCounter (){
      return localStorage.getItem('count')
    },
    computedId (){
      return localStorage.getItem('id')
    }
  },
  actions: {
  },
  modules: {
  }
})
