<template>
    <div>
        <div class="container cont-cust">
            <div class="store-data">
                <div class="s_data">
                    <div class="left_actions">
                        <div class="s-image">

                        </div>
                        <div class="s-text text-center">
                            Eric Store
                        </div>
                    </div>
                    <div class="details-data">
                        <div class="heading_data">
                            <h3 v-if="products_length == 1">Products ( {{products_length}} item)</h3>
                            <h3 v-if="products_length > 1">Products ( {{products_length}} items)</h3>
                            <h3 v-if="products_length == 0">0 Products added</h3>
                            <div class="bttn">
                                <router-link to="/store/add_listing" class="btn btn-cust">Add Listing</router-link>
                            </div>
                        </div>
                        <div class="h_body">
                            <div class="items-list" v-if="products_length">
                                <div class="row">
                                    <div class="col-md-4" v-for="(product, index) in prod">
                                        <div class="ms-item">
                                            <div class="img-link3">
                                                <img class="info-img" :src="'http://localhost:8080/ipfs/' + product.item_hash">
                                            </div>
                                            <div class="info-back">
                                                <div class="hot-img">{{product.item_name}}</div>
                                                <div class="cur">UGX 500,000</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="no_items" v-else>
                                <h2>There are currently no Items for this address</h2>
                            </div>
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
    }
</script>

<style scoped>

</style>