import systemApi from './index'

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
