import Vue from "vue";
import Vuex from 'vuex';


Vue.use(Vuex);

// 引入小仓库
import users from './users'

export default new Vuex.Store({
    // strict: process.env.NODE_ENV != 'production',
    // 实现Vuex仓库模式开发存储数据
    modules: {
        users
    }
})