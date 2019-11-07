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
    }
}
