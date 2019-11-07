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
    }
}
