import Instance from '../index'

export default {
    getWork(pg){
        return Instance.get('/v1/work/get',{
            params:{ pg }
        })
    }
}

