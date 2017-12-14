import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        num: 0,
        name: ''
    },
    mutations: {
        SET_NUM: function (state, num) {
            state.num = state.num + 1
        },
        SET_NAME: function (state,userName) {
            state.name = userName
        }

    },
    actions: {
        setNum({ commit }, num) {
            commit('SET_NUM', name)
        },
        setName({ commit }, name) {
            commit('SET_NAME', name)
        }
    },
    getters: {
        getNum: state => state.num,
        getName:function(state){
          
                return state.name

          
            
        }
    }
});