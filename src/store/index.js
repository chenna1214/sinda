import Vue from 'vue';
import Vuex from 'vuex';
// import axios from 'axios';
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
        },
        GAIN_NUM(state,num){
            state.num = num;
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
        },
        gainNum({commit}){
            axios.post('/xinda-api/cart/cart-num').then(data=>{
                commit('GAIN_NUM',data.data.data.cartNum);
            });
        }
    },
    getters: {
        getNum: state => state.num,
        getName:function(state){//登录后显示用户姓名
            if(state.name){
                return state.name
            }else{
                return sessionStorage.getItem('userName');
            }
        },
        getTitle:state=>state.title//切换注册、登录、忘记密码的网页头部内容
    }
});