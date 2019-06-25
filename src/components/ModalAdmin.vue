<template>
    <div>
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
             aria-hidden="true" data-backdrop="static"
             data-keyboard="false">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Add Admin</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="ad-info">
                            <div class="label">Enter Address</div>
                            <input id="focus" type="text" class="input-admin">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn  btn-add">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="userModal" tabindex="-1" role="dialog" aria-labelledby="userModalLabel"
             aria-hidden="true" data-backdrop="static"
             data-keyboard="false">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="userModalLabel">Add User</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="ad-info">
                            <div class="label">Enter Address</div>
                            <input id="focus1" v-model="address" type="text" class="input-admin">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-add" @click="createU">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    $('body').on('shown.bs.modal', '#exampleModal', function () {
        $('#focus', this).focus();
    });
    $('body').on('shown.bs.modal', '#userModal', function () {
        $('#focus1', this).focus();
    })
    export default {
        name: 'ModalUser',
        data() {
            return {
                address : ''
            }
        },
        methods: {
            async createU() {
                await this.$store.dispatch('create_user', this.address)
                    .then(res => {
                        this.$store.dispatch('get_all_users');
                        $('#userModal').modal().hide();
                        $('.modal-backdrop').hide();
                        this.address = '';
                    })
            }
        }
    }
</script>

<style scoped>
    .input-admin {
        width: 100%;
        padding-left: 8px;
        font-family: 'Montserrat';
        font-size: 13px;
        padding-bottom: 6px;
        border: none;
        color: #5dab88;
        border-bottom: 2px solid #41b883;
    }

    .input-admin:focus, .btn-add:active {
        outline: none;
    }

    .btn-add:active, .btn-add:focus, .btn-add:hover {
        box-shadow: none;
    }

    .modal-dialog {
        max-width: 380px !important;
        margin: 10.75rem auto;
    }

    .modal-title {
        font-family: Roboto;
        font-size: 16px;
    }

    .modal-header {
        padding: 8px 15px !important;
        border-radius: 0;
    }

    .modal-content {
        border-radius: 0;
    }

    .modal-footer {
        padding-top: 0;
        border: none;
    }

    .btn-add {
        width: 100%;
        background: #41b883;
        color: #bdffe2;
        border-radius: 0;
    }

    .ad-info {

    }

    .label {
        font-family: 'Montserrat', sans-serif;
        font-size: 13px;
        font-weight: 600;
        margin-bottom: 5px;
    }
</style>