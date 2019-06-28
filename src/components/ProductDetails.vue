<template>
    <div>
        <div class="container cont-cust" v-if="product">
            <div class="details-container">
                <div class="image-cont">
                    <img class="info-img" :src="'http://localhost:8080/ipfs/' + product.item_hash">
                </div>
                <div class="info">
                    <h2 class="pull-right">{{ product.item_name }}</h2>
                    <h5>
                        Seller : Zecco Education
                    </h5>
                    <h3>
                        UGX {{ product.item_value }}
                    </h3>
                    <div class="description">
                        <p><span>SKU</span> : {{ product.item_sku }}</p>
                        <p><span>Category</span> : {{ product.item_category }} </p>
                    </div>
                    <div>
                        <span class="title">Description</span>
                        <p class="dd">
                          {{ product.item_description }}
                        </p>
                    </div>

                    <div class="section" style="padding-bottom:20px;">
                        <button class="btn btn_custom"><span style="" aria-hidden="true"></span>Buy Now
                        </button>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        data() {
            return  {
                product : null
            }
        },
        created() {

            if(this.products.length > 0){
                this.product = this.products.find(item => item.item_id == this.$route.params.id )
            }
        },

        computed : {
            ...mapGetters({
                products: 'all_pdts'
            })

        }
    }
</script>

<style scoped>
    .dd{
        color: #909eac;
        font-family: Roboto;
        font-size: 14px;
    }
    .image-cont{
        padding: 20px;
    }
    .image-cont img{
        height: 100%;
        width: 100%;
        object-fit: contain;
    }
    .btn_custom {
        width: 100%;
        margin-top: 15px;
        background: #41b883;
        color: #fff;
        font-family: Roboto;
        font-weight: 500;
        font-size: 15px;
        transition: 0.35s;
    }

    .btn_custom:focus, .btn_custom:hover {
        outline: none;
        box-shadow: none;
        background: #7ae0b3;
    }

    .details-container {
        background: #fff;
        height: 80vh;
        box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.08);
        display: flex;
        flex-direction: row;
    }

    .image-cont {
        flex: 1.5 0 0;
    }

    .info {
        flex: 1 0 0;
        padding-top: 30px;
        padding-right: 20px;
    }

    .info h2 {
        font-family: 'Roboto', sans-serif;
        font-size: 21px;
    }

    .info h5 {
        color: #909eac;
        font-size: 11.5px;
        font-family: Roboto;
        padding-bottom: 20px;
        border-bottom: 1px solid #eee;
    }

    .info h3 {
        font-family: Roboto;
        font-weight: 600;
        font-size: 22px;
        color: #F32323;

    }

    .description {
        font-weight: 600;
        color: #2d2d2d;
        margin-top: 30px;
    }

    .description p {
        font-size: 13px;
        font-weight: 500;
        font-family: Roboto;
    }

    .title {
        font-size: 14px;
        font-family: Roboto;
        color: #3b3b3b;
        display: inline-block;
        font-size: 15px;
        border-bottom: 1px solid #b2b2b2;
        margin-bottom: 15px;
        font-weight: 600;
    }
</style>