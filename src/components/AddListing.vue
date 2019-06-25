<template>
    <div>
        <div class="container cont-cust">
            <div class="store-data">
                <div class="s_data">
                    <div class="left_actions">
                        <div class="side-left">
                        </div>
                    </div>
                    <div class="details-data">
                        <div class="heading_data">
                            <div class="bttn bt">
                                <router-link to="/store" class="btn btn-cust">Back</router-link>
                            </div>
                            <h3 class="text-center">Create Listing</h3>
                            <div class="bttn">
                                <button class="btn btn-cust" @click="createUsr">Save</button>
                            </div>
                        </div>
                        <div class="p-form">
                            <div class="row">
                                <div class="col -md-12">
                                    <div class="label">Product Name</div>
                                    <input type="text" v-model="p_name" placeholder="Enter the name of your product...">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="label">Price</div>
                                    <input type="number" v-model="p_price" placeholder="Price of the product">
                                </div>
                                <div class="col-md-6">
                                    <div class="label">Condition</div>
                                    <select class="select-option" v-model="p_condition">
                                        <option>New</option>
                                        <option>Used</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="label">SKU</div>
                                    <input type="text" v-model="sku" placeholder="SKU, Part Number, ID, etc">
                                </div>
                                <div class="col-md-6">
                                    <div class="label">Category</div>
                                    <input type="text" v-model="cat" placeholder="Category for your product">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="label">Description</div>
                                    <textarea class="form-control" v-model="desc"
                                              placeholder="Describe your products as best as you can...">

                                </textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                p_name: '',
                p_price: '',
                p_condition: '',
                sku: '',
                cat: '',
                desc: ''
            }
        },
        methods: {
            createUsr() {
                const item = {
                    name: this.p_name,
                    price: this.p_price,
                    condition: this.p_condition,
                    sku: this.sku,
                    category: this.cat,
                    description: this.desc
                };
                this.$store.dispatch('set_user_items', item)
                    .then(res => {
                        this.p_name = '';
                        this.p_price = '';
                        this.p_condition = '';
                        this.sku = '';
                        this.cat = '';
                        this.desc = '';
                    })
            }
        }
    }
</script>

<style scoped>
    .label {
        font-family: 'Montserrat', sans-serif;
        font-size: 13px;
        font-weight: 600;
        margin-bottom: 5px;
    }

    .bt .btn-cust {
        border-color: #eee !important;
        color: #888;
    }

    .heading_data h2 {
        color: #9b9b9b;
        font-size: 16px;
        margin: 0;
        align-items: left;
        line-height: 39px;
        cursor: pointer;
    }

    .heading_data h2:hover {
        text-decoration: underline;
        color: #7aefbb;
    }

    .p-form {
        padding: 10px 20px;
        max-height: 400px;
    }

    .heading-p h3 {
        font-size: 16px;
        text-align: center;
        padding: 15px;
        border-bottom: 1px solid #ccc;
    }

    select::-ms-expand {
        display: none;
    }

    input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        margin: 0;
    }

    input[type="text"], input[type="number"], .select-option {
        width: 100%;
        border-radius: 3px;
        border: 1px solid #d2d8dd;
        padding: 8px 10px;
        font-family: Roboto;
        font-size: 13px;
        margin-bottom: 10px;
    }

    input[type="text"]:focus {
        box-shadow: none;
        border-color: #7aefbb !important;
    }

    textarea {
        font-family: Roboto;
        font-size: 13px;
        margin-bottom: 10px;
        border: 1px solid #d2d8dd;
        height: 160px;
    }
</style>