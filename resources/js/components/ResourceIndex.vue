<template>
    <b-row class="justify-content-md-center">
        <b-col cols="12" v-if="items.data == 0 && searchData.search == ''">
            <div class="empty p-2">
                <div class="empty-icon">
                    <img src="/storage/backend/img/states/empty.png" style="height: 200px;">
                </div>
                <p class="empty-title h3">No se ha registrado informacióm</p>
                <template v-if="modelData.actions.length && modelData.actions.includes('add')">
                    <p class="empty-subtitle text-muted">De click en el botón agregar</p>
                    <div class="empty-action mt-2">
                        <inertia-link :href="route(`${modelData.resource}.create`)" class="btn btn-primary"><i class="fa fa-plus"></i> {{modelData.titles.create}}</inertia-link>
                    </div>
                </template>
            </div>
        </b-col>
        <b-col cols="12" v-else>
            <div class="card">
                <div class="card-status-top bg-primary"></div>
                <div class="card-header">
                    <h4 class="card-title">{{modelData.titles.index}}</h4>
                    <div class="ml-auto">
                        <inertia-link v-if="modelData.actions.length && modelData.actions.includes('add')" :href="route(`${modelData.resource}.create`)" class="btn btn-sm btn-primary"><i class="fa fa-plus"></i> {{modelData.titles.create}}</inertia-link>
                    </div>
                </div>
                <div class="card-body border-bottom pt-1 pb-1 pl-0 pr-0">
                    <div class="d-flex">
                        <b-col cols="2">
                            <div role="group" class="btn-group" v-if="selectedRows.length">
                                <b-button size="sm" variant="success" @click.prevent="batchAction('active')" :disabled="selectedRows.length == 0" v-b-tooltip.hover title="Activar"><i class="fa fa-check"></i></b-button>
                                <b-button size="sm" @click.prevent="batchAction('archive')" :disabled="selectedRows.length == 0" v-b-tooltip.hover title="Archivar"><i class="fa fa-archive"></i></b-button>
                                <b-button size="sm" variant="warning" @click.prevent="batchAction('restore')" :disabled="selectedRows.length == 0" v-b-tooltip.hover title="Restaurar"><i class="fa fa-recycle"></i></b-button>
                                <b-button size="sm" variant="danger" @click.prevent="batchAction('delete')" :disabled="selectedRows.length == 0" v-b-tooltip.hover title="Eliminar"><i class="fa fa-trash"></i></b-button>
                                <b-button size="sm" variant="danger" @click.prevent="batchAction('force-delete')" :disabled="selectedRows.length == 0" v-b-tooltip.hover title="Eliminar Permanentemente"><i class="fa fa-eraser"></i></b-button>
                            </div>
                        </b-col>
                        <b-col>
                            <b-form-input size="sm" placeholder="Buscar..." v-model="searchData.search"></b-form-input>
                        </b-col>
                        <b-col cols="3">
                            <b-form-select v-model="searchData.per_page" :options="options" class="float-left"></b-form-select>
                            <div class="text-muted text-right">
                                Mostrando: {{items.from}} a {{items.to}} | Total: {{items.total}}
                            </div>
                        </b-col>
                    </div>
                </div>
                <div class="table-responsive mb-0">
                    <table class="table table-striped table-hover table-sm">
                        <thead>
                            <tr>
                                <th style="width: 35px;" class="p-0 pl-1">
                                    <b-form-checkbox @change="selectAction" v-model="selectAllStateChecked" :indeterminate="selectAllStateIndeterminate" plain class="float-left"></b-form-checkbox>
                                </th>
                                <template v-for="column in modelData.columns_table">
                                    <th :style="column.style">{{column.name}}</th>
                                </template>
                                <th scope="col" :key="`column_actions`" class="text-center" style="width: 90px;" v-if="modelData.actions.length">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-if="items.data.length" v-for="item in items.data" :key="`key_${item.id}`" :style="getRowColor(item)">
                                <td>
                                    <b-form-checkbox v-model="selectedRows" :value="item.id" plain></b-form-checkbox>
                                </td>
                                <template v-for="column in modelData.columns_table">
                                    <td v-if="column.show != false" :key="`td_key_${column.field}`" :style="column.style">
                                        <template v-if="column.view_action == true">
                                            <inertia-link :href="route(modelData.resource+'.show',{id:item.id})">{{item[column.field]}}</inertia-link>
                                        </template>
                                        <template v-else-if="column.currency_format == true">
                                            {{item[column.field] | currency('$ ')}}
                                        </template>
                                        <template v-else-if="column.number_column == true">
                                            {{item[column.field] | number(column.number_format)}}
                                        </template>
                                        <template v-else>
                                            <span v-html="item[column.field]"></span>
                                        </template>
                                    </td>
                                </template>
                                <td class="text-right" v-if="modelData.actions.length">
                                    <action-buttons-resource :item="item" :modelData="modelData" />
                                </td>
                            </tr>
                            <tr v-if="items.data == 0 && searchData.search != ''">
                                <td :colspan="modelData.columns_table.length + 2" class="text-center">
                                    No se encontraron resultados en la búsuqeda...
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <b-pagination
                        v-model="searchData.page"
                        :total-rows="items.total"
                        :per-page="searchData.per_page"
                        align="center"
                        class="mt-1 mb-1">
                    </b-pagination>
                </div>
            </div>
        </b-col>
    </b-row>
</template>

<script>

import pickBy from 'lodash/pickBy'
import throttle from 'lodash/throttle'

export default {
    props:{
        items: Object,
        filters: Object,
        modelData: Object,
    },
    data(){
        return {
            searchData: {
                page: this.items.current_page,
                per_page: this.items.per_page ?? 15,
                search: this.filters.search ?? '',
            },
            selectedRows: [],
            selectAllStateIndeterminate: false,
            options: [15,30,50,100,200,500],
        };
    },
    watch: {
        searchData: {
            handler: throttle(function() {
                this.filter();
            }, 150),
            deep: true,
        },
        selectedRows: {
            handler: function(value) {
                if(this.items.data.length > 0){
                    if(this.selectedRows.length == this.items.data.length){
                        this.selectAll = true;
                    }else if(this.items.data.length > 0 && this.selectedRows.length != this.items.data.length){
                        this.selectAll = false;
                    }
                }
            },
            deep: true,
        },
    },
    computed: {
        selectAllStateChecked: {
            get: function(){
                return this.selectedRowsCheckStatus()
            },
            set: function(newValue){
            },
        },
    },
    methods: {
        filter(){
            this.selectedRows = []
            let query = pickBy(this.searchData)
            this.$inertia.replace(this.route(this.modelData.resource+'.index', Object.keys(query).length ? query : { remember: 'forget' }))
        },
        getRowColor(item){
            if(item.is_active){
                return 'border-left: 8px solid #5eba00!important; background: #dff1cc!important;';
            }else if(item.is_deleted){
                return 'border-left: 8px solid #fa4654!important; background: #fedadd!important;';
            }else if(item.is_archived){
                return 'border-left: 8px solid #45aaf2!important; background: #daeefc!important;';
            }
        },
        selectAction(event){
            this.selectedRows = []
            if(event){
                let vm = this
                this.items.data.forEach(item => {
                    vm.selectedRows.push(item.id)
                })
            }
        },
        selectedRowsCheckStatus(){
            this.selectAllStateIndeterminate = false
            if(this.items.data.length > 0 && this.selectedRows.length == this.items.data.length){
                return true
            }
            if(this.selectedRows.length > 0 && this.items.data.length > 0){
                this.selectAllStateIndeterminate = true
            }else{
                return false
            }
        },
        batchAction(action){
            let title = ''
            let text = ''
            switch(action){
                case 'active':
                    title = 'Activar'
                    text = '¿Seguro que desea activar los registros seleccionados?'
                break;
                case 'archive':
                    title = 'Archivar'
                    text = '¿Seguro que desea archivar los registros seleccionados?'
                break;
                case 'restore':
                    title = 'Restaurar'
                    text = '¿Seguro que desea restaurar los registros seleccionados?'
                break;
                case 'delete':
                    title = 'Eliminar'
                    text = '¿Seguro que desea eliminar los registros seleccionados?'
                break;
                case 'force-delete':
                    title = 'Eliminar Permanentemente'
                    text = '¿Seguro que desea eliminar permanentemente los registros seleccionados?'
                break;
            }
            Swal.fire({
                title: title,
                html: text,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Sí, confirmar!',
                cancelButtonText: 'No, espera...',
                showLoaderOnConfirm: true,
                preConfirm: () => {
                    let tmp = this.selectedRows
                    this.selectedRows = []
                    return this.$inertia.post(this.route(this.modelData.resource+'.batch_action'), {action: action, items: tmp})
                },
            })
        },
    },
}

</script>

<style scoped>

.table {
    margin-bottom: 0px !important;
}

</style>