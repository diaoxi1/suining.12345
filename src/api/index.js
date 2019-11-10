import axios from 'axios'
import { Toast } from 'vant';
import store from '../store'
import router from '../router'
// 创建实例

const Instance = axios.create({
    baseURL: 'http://12345.suining.gov.cn:5000',
    timeout: 1000 * 60, // 2分钟超时,考虑文件上传
    headers: { 'Content-Type': 'application/json;' }
})
// 添加请求拦截器
Instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    if(store.getters.getToken){
        config.headers.Authorization = store.getters.getToken
    }
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});
console.log(router)
// 添加响应拦截器
Instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    if(response.data.Code==500){
        //     统一处理
        Toast.fail(unicodes(response.data.Msg));
        return
    }
    let code = response.data.code
    if(code=='1003'){
        Toast.fail(unicodes(response.data.msg));
        return
    }
    if( code=='1001'|| code == '1002' || code =='1004 ' || code =='1005 '){
        router.push({
            name:'login'
        })
        return
    }
    return response.data;
}, function (error) {
    // 对响应错误做点什么
    Toast.fail('加载失败，请稍后重试');
    return Promise.reject(error);
});

function  unicodes(code){
    let str = eval("'"+code+"'");
    str = unescape(str.replace(/\u/g, "%u"))
    return str.replace(/[%]/g,"")
}
export default Instance
