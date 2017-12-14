import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        num: 0,
        name: '',
        title:''
    },
    mutations: {
        SET_NUM: function (state, num) {
            state.num = state.num + 1
        },
        SET_NAME: function (state,userName) {
            state.name = userName
        },
        SET_TITLE: function (state,title) {
            state.title = title
        }

    },
    actions: {
        setNum({ commit }, num) {
            commit('SET_NUM', name)
        },
        setName({ commit }, name) {
            commit('SET_NAME', name)
        },
        setTitle({ commit }, title) {
            commit('SET_TITLE', title)
        }
    },
    getters: {
        getNum: state => state.num,
        getName:function(state){
            if(state.name){
                return state.name
            }else{
                sessionStorage.getItem('userName')
            }
            
        },
        getTitle:state=>state.title
    }
});