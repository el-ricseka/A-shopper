<template>
    <div class="details-data">
        <div class="heading_data">
            <h3 class="text-left">All User Addresses</h3>
            <div class="bttn">
                <button class="btn btn-cust" data-toggle="modal" data-target="#userModal">Add User</button>
            </div>
        </div>
        <div class="all-admins">
            <div class="h_body">
                <div class="addre" v-if="get_registered_users" v-for="address in get_registered_users">
                    <h5>{{ address }}</h5>
                </div>

                <div class="no_items" v-else>
                    <h2>No users registered yet</h2>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex';

    export default {
        computed: {
            ...mapGetters([
                'get_registered_users'
            ]),
        },
    }
</script>
<style scoped>
    .addre{
        background: #efefef;
        padding : 20px 20px;
        width: 100%;
        border-radius: 3px;
        margin-bottom: 10px;
    }
    .addre h5{
        font-family: Roboto;
        font-size: 14px;
        margin: 0;
        color: #243346;
        font-weight: normal;
    }
    .h_body {
        padding: 10px;
    }
</style>