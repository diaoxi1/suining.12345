import Instance from '../index'

export default {
    index(){
        return Instance.get('/v1/index/get')
    },
    getWork(id){
        return Instance.get('/v1/work/detail',{
            params:{
                id
            }
        })
    },
//    诉求详情
    getAppealInfo(id){
        return Instance.get('/v1/bill/detail',{
            params:{id}
        })
    },
    getAppeaList(data){
        return Instance.get('/v1/bill/get',{
            params:data
        })
    },
//    注册
    reg(data){
        return Instance.post('/v1/account/reg',data)
    },
//     登陆接口
    login(data){
        return Instance.post('/v1/account/login',data)
    },
//    个人的诉求
    myAppealInfo(){
        return Instance.get('/v1/account/bill')
    },
//    诉求提交
    putAppeal(data){
        return Instance.post('/v1/account/addBill',data)
    }
}
