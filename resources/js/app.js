require('./bootstrap')
import Vue from 'vue'
import VueMeta from 'vue-meta'
import { InertiaApp } from '@inertiajs/inertia-vue'

Vue.config.productionTip = false

Vue.mixin({
    methods: {
        route: (name, params, absolute) => route(name, params, absolute, Ziggy),
        getFormData(formData, data, previousKey) {
            var formData = new FormData();
            if (data instanceof Object) {
                Object.keys(data).forEach(key => {
                    const value = data[key];
                    if(value instanceof File){
                        formData.append(key, value);
                    }else if (value instanceof Object && !Array.isArray(value)) {
                        return this.getFormData(formData, value, key);
                    }
                    if (previousKey) {
                        key = `${previousKey}[${key}]`;
                    }
                    if (Array.isArray(value)) {
                        value.forEach(val => {
                            formData.append(`${key}[]`, val);
                        });
                    } else {
                        formData.append(key, value);
                    }
                });
            }
            return formData
        },
    }
})
Vue.use(InertiaApp)
Vue.use(VueMeta)

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)

window.Swal = require('sweetalert2');
window.Swal = Swal.mixin({
    customClass: {
        confirmButton: 'btn btn-success ml-1',
        cancelButton: 'btn btn-danger mr-1'
    },
    buttonsStyling: false,
    reverseButtons: true,
});
window.Toast = Swal.mixin({
    toast: true,
    position: 'top',
    showConfirmButton: false,
    timer: 6000,
});
import '@sweetalert2/theme-bootstrap-4/bootstrap-4.scss';

import Vue2Filters from 'vue2-filters';
Vue.use(Vue2Filters);

let app = document.getElementById('app')

import Layout from './template/Layout'
Vue.component('layout',Layout)
import ResourceIndex from './components/ResourceIndex'
Vue.component('resource-index',ResourceIndex)
import ActionButtonsResource from './components/ActionButtonsResource'
Vue.component('action-buttons-resource',ActionButtonsResource)

import Treeselect from '@riophae/vue-treeselect'
import '@riophae/vue-treeselect/dist/vue-treeselect.css'
Vue.component('treeselect',Treeselect)

require('./directives')

new Vue({
    metaInfo: {
        titleTemplate: (title) => title ? `${title} - Sistema Administrador` : 'Sistema Administrador'
    },
    mounted(){
        
    },
    render: h => h(InertiaApp, {
        props: {
            initialPage: JSON.parse(app.dataset.page),
            resolveComponent: (component) => {
                let parts = component.split('/')
                let type = parts[0]
                let module_name = parts[1]
                if(type == 'Module'){
                    let name = parts[2]
                    return import(`~/${module_name}/Resources/assets/js/Pages/${name}.vue`).then(module => module.default)
                }
                if(type == 'Package'){
                    let package_name = parts[2]
                    let name = parts[3]
                    return import(`../../vendor/${module_name}/${package_name}/resources/js/Pages/${name}.vue`).then(module => module.default)
                }
                let name = parts[2]
                return import(`@/Pages/${module_name}/${name}`).then(module => module.default)
            }
        },
    }),
}).$mount(app)
