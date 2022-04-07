// 本地缓存服务
const PREFIX = 'ginessential_';

// user 模块
const USER_PREFIX = `${PREFIX}user_`;
const USER_TOKEN = `${USER_PREFIX}token`;
const USER_INFO = `${USER_PREFIX}info`;

// 储存
const set = (key, data) => {
    console.log("key=", key);
    console.log("data=", data);
    localStorage.setItem(key, data)
}

// 读取
const get = (key) => {
    console.log("key==", key);
    return localStorage.getItem(key)
}

export default {
    set,
    get,
    USER_TOKEN,
    USER_INFO
}