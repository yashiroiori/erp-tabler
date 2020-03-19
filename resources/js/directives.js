import Vue from 'vue'

Vue.directive('selectpicker',{
    twoWay: true,
    deep: true,
    bind: function() {
        $(this.el).selectpicker().on("change", function(e) {
            this.set($(this.el).val());
        }.bind(this));
    },
    update: function (value) {
        $(this.el).selectpicker('refresh').trigger("change");
    },
    unbind: function () {
        $(this.el).off().selectpicker('destroy');
    }
});

Vue.directive('flatpickr', {
    inserted: (el, binding) => {
        el._flatpickr = new flatpickr(el, binding.value)
    },
    unbind: el => el._flatpickr.destroy()
});

Vue.directive('select2', {
    inserted: function (el, binding, vnode) {
        $(el).select2({
                dropdownParent: $(el).parent()
            })
            .on("select2:select", (e) => {
                el.dispatchEvent(new Event('change', {target: e.target})); 
            })
            .on("select2:unselecting", (e) => {
                el.dispatchEvent(new Event('change', {target: e.target})); 
            })
            .on('select2:unselect', function (e) {
                el.dispatchEvent(new Event('change', {target: e.target})); 
            })
            .on('select2:change', function (e) {
                el.dispatchEvent(new Event('change', {target: e.target})); 
            })
    },
    update: function (el, binding, vnode) {
        for (var i = 0; i < vnode.data.directives.length; i++) {
            if (vnode.data.directives[i].name == "model") {
                $(el).val(vnode.data.directives[i].value); 
            }
        }
        $(el).trigger("change"); 
    }
});

Vue.directive('select2-search', {
    watch: {
        options(val){
            console.log(val)
            // this.setOption(val)
        },
    },
    inserted: function (el, binding, vnode) {
        $(el).select2({
                dropdownParent: $(el).parent(),
                allowClear: true,
                ajax: {
                    url: $(el).data('url'),
                    data: function (params) {
                        let resource = $(this).data('resource');
                        let resource_id = $('#'+$(this).data('resource-id')).val();
                        var query = {
                            search: params.term,
                            resource,
                            resource_id,
                            filter: {
                                search: params.term,
                            },
                        }
                        // Query parameters will be ?search=[term]&type=public
                        return query;
                    },
                    processResults: function (data) {
                        return {
                            results: data
                        };
                    },
                    cache: true
                },
            })
            .on("select2:select", (e) => {
                el.dispatchEvent(new Event('change', {target: e.target})); 
            })
            .on("select2:unselecting", (e) => {
                el.dispatchEvent(new Event('change', {target: e.target})); 
            })
            .on('select2:unselect', function (e) {
                el.dispatchEvent(new Event('change', {target: e.target})); 
            })
            .on('select2:change', function (e) {
                el.dispatchEvent(new Event('change', {target: e.target})); 
            })
    },
    update: function (el, binding, vnode) {
        for (var i = 0; i < vnode.data.directives.length; i++) {
            if (vnode.data.directives[i].name == "model") {
                $(el).val(vnode.data.directives[i].value); 
            }
        }
        $(el).trigger("change"); 
    }
});
