import index from './model/index'
import work from './model/work'
const systemApi = {
    index,
    work
}
const install = (Vue) => {
    Object.defineProperties(Vue.prototype, {
        $api: {
            get() {
                return systemApi
            }
        }
    })
}
export default { install }
