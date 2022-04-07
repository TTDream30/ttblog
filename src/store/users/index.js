import storageService from "../../service/storageService";
import {
    reqRegister,
    reqInfo,
    reqLogin
} from "@/api";



// users模块的小仓库
// state：仓库存储数据的地方
const state = {
    // state中的默认初始值不可以乱写，要根据接口的返回类型去初始化
    token: storageService.get(storageService.USER_TOKEN),
    userInfo: storageService.get(storageService.USER_INFO) ? JSON.parse(storageService.get(storageService.USER_INFO)) : null
}
// 
const mutations = {
    SET_TOKEN(state, token) {
        // 更新本地缓存
        storageService.set(storageService.USER_TOKEN, token)
        // 更新state
        state.token = token
    },
    SET_USERINFO(state, userInfo) {
        // 更新本地缓存
        storageService.set(storageService.USER_INFO, JSON.stringify(userInfo))
        // 更新state
        state.userInfo = userInfo
    }
}
// action：可以书写自己的业务逻辑，也可以处理异步
const actions = {
    // 通过API里面的接口函数调用，向服务器发起请求，获取服务器的数据

    login(context, data) {
        return new Promise((resolve, reject) => {
            reqLogin(data).then(res1 => {
                // 保存token
                context.commit('SET_TOKEN', res1.data.token)
                // 链式调用
                return reqInfo();
            }).then(res2 => {
                context.commit('SET_USERINFO', res2.data.user)
                // this.$store.commit("SET_USERINFO", res2.data.user);
                // 保存用户信息
                resolve(res2)
            }).catch(err => {
                reject(err)
            })
        })
    },

    register(context, data) {
        return new Promise((resolve, reject) => {
            reqRegister(data)
                .then((res1) => {
                    // 保存token
                    context.commit('SET_TOKEN', res1.data.token)
                    // storageService.set(storageService.USER_TOKEN, res1.data.token);
                    // 链式调用
                    return reqInfo();
                })
                .then((res2) => {
                    context.commit('SET_USERINFO', res2.data.user)
                    // this.$store.commit("SET_USERINFO", res2.data.user);
                    // 保存用户信息
                    resolve(res2)
                })
                .catch((err) => {
                    reject(err)
                });
        })
    },

    logout({
        commit
    }) {
        // 清除token
        commit('SET_TOKEN', '')
        storageService.set(storageService.USER_TOKEN, '')
        // 清除用户信息
        commit('SET_USERINFO', '')
        storageService.set(storageService.USER_INFO, '')

        // 待完成--清除登录状态
        // window.location.reload()
    }
}
// getters：计算属性，用于简化仓库数据，让组件获取仓库的数据更加方便
const getters = {

}

export default {
    state,
    mutations,
    actions,
    getters
}