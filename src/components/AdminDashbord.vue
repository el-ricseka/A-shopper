<template>
    <div>
        <div class="container cont-cust">
            <div class="store-data">
                <div class="s_data">
                    <div class="left_actions">
                        <div class="s-image s-admin">
                            <h5>Admin Dashboard</h5>
                        </div>
                        <div class="side-left">
                            <router-link class="linkss" to="/dashboard">All Admins</router-link>
                            <router-link class="linkss" to="/dashboard/users">All Clients</router-link>
                        </div>
                    </div>
                    <router-view></router-view>
                </div>
            </div>
        </div>
        <ModalAdmin></ModalAdmin>
    </div>
</template>
<script>
    import ModalAdmin from './ModalAdmin'
    export default {
        components: {
            ModalAdmin
        },
        beforeRouteEnter(to, from, next){
            next(vm => {
                if((vm.$store.state.user_type == 0)){
                    next('/dashboard');
                }
                else if(vm.$store.state.user_type == 1){
                    next('/store');
                }
                else{
                    next('/market');
                }
            })
        },
    }
</script>
<style scoped>
    .ss {
        padding-bottom: 10px;
    }
    .linkss{
        font-size: 13px;
        font-family: Roboto;
        padding: 10px;
        border-radius: 3px;
        cursor: pointer;
        transition: 0.35s;
        width: 100%;
        text-decoration: none;
        color: #000222 !important;
        display: block;
        margin-bottom: 5px;
    }
    .linkss:hover {
        background: #7aefbb4f;
    }

    .linkss.router-link-exact-active {
        background: #7aefbb4f;
    }

    .s-admin {
        position: relative !important;
        background: #41b883;
        margin-bottom: 10px;
    }
    .s-admin h5{
        position: absolute;
        left: 15%;
        top:42%;
        font-size: 21px;
        color: #bdffe2;
    }

</style>