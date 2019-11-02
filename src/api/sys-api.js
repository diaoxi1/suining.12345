import work from './model/work'
const systemApi = {
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
