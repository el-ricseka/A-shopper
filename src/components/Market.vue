<template>
    <div>
        <div class="container cont-cust">
            <div class="market-cont" v-if="$store.getters.all_pdt_length">
                <!--<div class="m-heading"><h1>Electronics</h1></div>-->
                <div class="row">
                    <div class="col-md-3" v-for="(product, index) in products" :key="index">
                        <div class="ms-item">
                            <router-link :to="{ name: 'details', params : { id : product.item_id }}">
                                <div class="img-link3">
                                    <img class="info-img" :src="'http://localhost:8080/ipfs/' + product.item_hash">
                                </div>
                                <div class="info-back">
                                    <div class="hot-img">{{product.item_name}}</div>
                                    <div class="cur">UGX 500,000</div>
                                </div>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        computed: {
            ...mapGetters({
                products: 'all_pdts'
            })
        }
    }
</script>

<style scoped>
    .market-cont {
        padding: 20px 0;
    }

    .m-heading h1 {
        font-size: 16px !important;
        font-family: Roboto;
        color: #000222;
        margin: 0;
        padding: 20px 0;
    }
</style>