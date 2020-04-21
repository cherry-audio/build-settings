Nova.booting((Vue, router, store) => {
    Vue.component('index-build-settings', require('./components/IndexField'))
    Vue.component('detail-build-settings', require('./components/DetailField'))
    Vue.component('form-build-settings', require('./components/FormField'))
})
