import Vue from 'vue'
import Vuex from 'vuex'
import EventService from '@/services/EventService.js';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    events : []
  },
  mutations: {
    SET_EVENTS(state, events){
      state.events = events
    }
  },
  actions: {
    fetchEvents({ commit }){
      EventService.getEvents()
      .then(({data})=>{
        commit('SET_EVENTS', data)
      })
    }
  },
  getters : {}
})
