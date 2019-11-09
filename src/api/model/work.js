import Instance from '../index'

export default {
    getWork(pg,key){
        return Instance.get('/v1/work/get',{
            params:{ pg,key }
        })
    }
}

