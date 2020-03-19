<template>
    <div role="group" class="btn-group">
        <inertia-link :href="route(modelData.resource+'.show',item.id)" v-if="modelData.actions.includes('read')" class="btn btn-sm btn-secondary"><i class="fa fa-eye"></i></inertia-link>
        <template v-if="!eventEdit">
            <inertia-link :href="route(modelData.resource+'.edit',item.id)" v-if="item.can_edit && modelData.actions.includes('edit')" class="btn btn-sm btn-secondary"><i class="fa fa-edit"></i></inertia-link>
        </template>
        <template v-else>
            <b-button size="sm" variant="secondary" v-if="item.can_edit && modelData.actions.includes('edit')" @click="eventEditCall"><i class="fa fa-edit"></i></b-button>
        </template>
        <b-button size="sm" variant="success" v-if="item.is_archived && modelData.actions.includes('archive')" @click="confirmArchive(item.id,item.name,item.is_active)"><i class="fa fa-check"></i></b-button>
        <b-button size="sm" v-if="item.is_active && modelData.actions.includes('archive')" @click="confirmArchive(item.id,item.name,item.is_active)"><i class="fa fa-archive"></i></b-button>
        <b-button size="sm" variant="warning" style="color: #fff;" v-if="item.is_deleted && modelData.actions.includes('delete')" @click="confirmRestore(item.id,item.name)"><i class="fa fa-recycle"></i></b-button>
        <b-button size="sm" variant="danger" v-if="!item.is_deleted && !item.is_completed && modelData.actions.includes('delete')" @click="confirmDelete(item.id,item.name)"><i class="fa fa-trash"></i></b-button>
        <b-button size="sm" variant="danger" v-if="item.is_deleted && !item.is_completed && modelData.actions.includes('delete')" @click="confirmDelete(item.id,item.name,true)"><i class="fa fa-eraser"></i></b-button>
    </div>
</template>

<script>

export default {
    props: {
        modelData: Object,
        item: Object,
        eventEdit: false,
    },
    methods: {
        confirmDelete(id,name,force = false){
            let text_delete = '¿Seguro que desea eliminar el registro?';
            if(force){
                text_delete = '¿Seguro que desea eliminar el registro permenentemente?';
            }
            Swal.fire({
                title: 'Confirmar borrado',
                html: text_delete + '<br><strong>'+name+'</strong>',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Sí, confirmar!',
                cancelButtonText: 'No, espera...',
                showLoaderOnConfirm: true,
                preConfirm: () => {
                    return this.$inertia.post(route(this.modelData.resource+'.destroy', id))
                },
            })
        },
        confirmRestore(id,name){
            Swal.fire({
                title: 'Confirmar restaurar',
                html: '¿Seguro que desea restaurar el registro? <br><strong>'+name+'</strong>',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Sí, confirmar!',
                cancelButtonText: 'No, espera...',
                showLoaderOnConfirm: true,
                preConfirm: () => {
                    return this.$inertia.patch(this.route(this.modelData.resource+'.restore', id))
                },
            })
        },
        confirmArchive(id,name,is_active){
            let title = 'Confirmar archivado'
            let action = 'archivar'
            if(!is_active){
                title = 'Confirmar activación'
                action = 'activar'
            }
            Swal.fire({
                title: title,
                html: '¿Seguro que desea '+action+' el registro? <br><strong>'+name+'</strong>',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Sí, confirmar!',
                cancelButtonText: 'No, espera...',
                showLoaderOnConfirm: true,
                preConfirm: () => {
                    return this.$inertia.post(this.route(this.modelData.resource+'.archive', id))
                },
            })
        },
        eventEditCall(){
            this.$emit('event', this.item)
        },
    },
}

</script>