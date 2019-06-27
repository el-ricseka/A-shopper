<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light-l pstn">
            <div class="container cont-cust">
                <a class="navbar-brand" href="#"><img style="width: 140px" src="../assets/logo.png" alt=""></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse mt-10" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li v-if="$store.state.user_type == 0" class="nav-item nav-li"><router-link class="a" to="/dashboard">Dashboard</router-link></li>
                        <li  v-if="$store.state.user_type == 2" class="nav-item nav-li"><router-link class="a" to="/market">Market Place</router-link></li>
                        <li v-if="$store.state.user_type == 1" class="nav-item nav-li"><router-link class="a" to="/store">Store</router-link></li>
                    </ul>
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <h6 class="nav-link" href="#">{{ this.get_account }}</h6>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex';
        export default {
            data() {
                return {
                    account: 'Loading...'
                }
            },
            computed: {
                ...mapGetters([
                    'get_account'
                ]),
            },
        }
</script>
<style scoped>
    .nav-li{
        padding: 0 8px;
    }
    .mt-10 {
        margin-top: 8px;
    }
   .a{
       padding: 8px 15px;
        color:  #9b9b9b;
       font-family: Roboto;
       font-size: 14px;
       border-radius: 20px;
       transition: 0.4s;
    }
    .a.router-link-exact-active, a.router-link-active {
        background: #41b883;
        color: #fff;
    }
</style>