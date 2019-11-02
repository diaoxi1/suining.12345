import Instance from '../index'

export default {
    getWork(){
        return Instance.get('http://101.132.226.213/v1/work/get')
    }
}

