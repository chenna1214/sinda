import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.Store({
    state:{
        num:0
    },
    mutations:{
        SET_NUM:function(state,num){
            state.num=state.num+1
        }

    },
    actions:{
        setNum({commit},num){
            commit('SET_NUM',num)
        }


    },
    getters:{
        getNum:state=>state.num

    }
});