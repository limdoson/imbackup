import ElementUi from 'element-ui';
import filters from './filters'
export default {
    install (Vue) {
        //引入ELEMENTUI
        Vue.use(ElementUi);

        //注册过滤器
        for (let key in filters) {
            Vue.filter(key, filters[key])
        }
    }
}