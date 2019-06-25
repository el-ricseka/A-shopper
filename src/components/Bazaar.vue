<template>
    <div>
        <Header></Header>
        <MainVue></MainVue>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import Header from './Header'
    import MainVue from './MainVue'

    export default {
        components: {
            Header, MainVue
        },
        data() {
            return {
                account: 'Loading...'
            }

        },
        computed: {
            ...mapGetters([
                'get_account'
            ]),
            ...mapGetters([
                'products_length'
            ]),
            ...mapGetters({
                prod: 'prdoucts_add'
            })
        },
        async created() {
            await this.$store.dispatch('loadWeb3');
            this.$store.dispatch('checkUserRole')
                .then(response => {

                    if (this.$store.state.user_type == 0) {
                        this.$router.push('/dashboard');
                        this.$store.dispatch('get_all_users');
                    }
                    else if (this.$store.state.user_type == 1) {
                        this.$router.push('/store');
                        this.$store.dispatch('get_all_products');
                    }
                    else {
                        this.$router.push('/market');
                        this.$store.dispatch('get_all_products_by_address');
                    }
                });

        },
    }
</script>
<style>
    .no_items {
        position: absolute;
        left: 30%;
        top: 50%;
    }

    .ms-item {
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
        transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
        margin-bottom: 15px;
    }

    .items-list {
        padding: 15px;
        max-height: 400px;
    }

    .h_body h2 {
        color: #888;
        font-size: 14px;
        font-family: 'Montserrat', sans-serif;
        text-align: center;
    }

    .side-left {
        padding: 10px;
    }

    .s-image {
        height: 200px;
        width: 100%;
        background: #93949d;
    }

    .s-text {
        font-weight: 600;
        font-family: 'Montserrat', sans-serif;
        padding: 20px 0;
        color: #777;
    }

    .side-left .all_pd {
        padding: 10px 20px 10px 20px;
        text-align: left;
        width: 100%;
        text-decoration: none;
        font-family: 'Montserrat', sans-serif;
        font-size: 13px;
        border-radius: 3px;
        color: #444;
    }

    .bg-light-l {
        background: #efefef;
    }

    .cont-cust {
        width: 970px;
    }

    .navbar-brand {
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        font-size: 18px;
    }

    .nav-item h6 {
        font-family: 'Montserrat', sans-serif;
        font-size: 13px;
        margin: 0;
        font-weight: 600;
    }

    .store-data {
        height: 82vh;
        box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.08);
        background: #fff;
        margin: 0 auto;
    }

    .s_data {
        display: flex;
        flex: 1 1 auto;
        min-width: 0;
    }

    .left_actions {
        display: flex;
        flex-direction: column;
        flex: 4 1 0%;
        width: 0;
        border-right: 1px solid #d2d8dd;
        z-index: 200;
        height: 82vh;
        max-height: 82vh;
        position: relative;
    }

    .details-data {
        position: relative;
        flex: 1 1 66.5%;
        background: #fff;
        min-width: 0;
        display: flex;
        flex-direction: column;
        overflow-y: auto;
    }

    .heading_data h3 {
        color: #9b9b9b;
        font-size: 16px;
        margin: 0;
        flex: 1;
        align-items: left;
        line-height: 39px;
    }

    .heading_data {
        padding: 20px;
        border-bottom: 1px solid #d2d8dd;
        display: flex;
        justify-content: space-between;
        position: sticky;
        top: 0;
        z-index: 999;
        background: #fff;
    }

    .bttn {
        display: flex;
        flex-direction: row;
        align-items: right;
    }

    .btn-cust {
        width: 100px;
        color: #41b883;
        border: 2px solid #7aefbb;
        border-radius: 3px;
        padding: 10px;
        background: #fff;
        font-size: 13px;
        cursor: pointer;
        transition: 0.35s;
    }

    .btn-cust:hover {
        border-color: #41b883;
    }

    .btn-cust:focus, .btn-cust:active {
        outline: none !important;
        box-shadow: none !important;
    }

    .img-link3 {
        height: 150px;
        background: #fff;
        text-align: center;
    }

    .info-img {
        max-height: 100%;
        max-width: 100%;
    }

    .info-back {
        background: #fff;
    }

    .hot-img {
        font-family: 'Roboto', sans-serif;
        text-align: center;
        background: #fff;
        color: #000222 !important;
        font-weight: 500;
        font-size: 14px;
        padding: 5px;
    }

    .cur {
        font-family: 'Roboto', sans-serif;
        text-align: center;
        font-size: 13px;
        font-weight: 500;
        color: #343e5c !important;
        padding-bottom: 20px;
    }

</style>