import Web3 from 'web3';
import {BAZAAR_ADDRESS, BAZAAR_CONTRACT_ABI} from './config'


export default {
    state: {
        users: [],
        instance: '',
        account: '',
        products: [],
        user_type: null,
        registered: [],
        market_all_pdts : []
    },
    getters: {
        get_account: (state) => {
            return state.account;
        },
        get_registered_users: (state) => {
            return state.registered;
        },
        products_length: (state) => {
            return state.products.length;
        },
        prdoucts_add: (state) => {
            return state.products;
        },
        all_pdt_length: (state) => {
            return state.market_all_pdts.length;
        },
        all_pdts : (state) => {
            return state.market_all_pdts;
        }
    },
    mutations: {
        SAVE_ACCOUNT: (state, account) => {
            state.account = account;
        },
        SAVE_INSTANCE: (state, instance) => {
            state.instance = instance
        },
        user: (state, address) => {
            state.users.push(address);
        },
        save_all: (state, item) => {
            state.market_all_pdts.push(item);
        },
        save_pdt: (state, item) => {
            state.products.push(item);
        },
        __userType: (state, payload) => {
            state.user_type = payload;
        },
        saveAddress: (state, address) => {
            state.registered.push(address);
        }
    },
    actions: {
        async loadWeb3({commit, state}) {

            if (window.ethereum) {
                window.web3 = new Web3(ethereum);
                try {
                    await ethereum.enable();
                } catch (error) {
                }
            }
            else if (window.web3) {
                window.web3 = new Web3(web3.currentProvider);
            }
            else {
                console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
            }
            window.ethereum.on('accountsChanged', function (accounts) {
                state.account = accounts[0];
                location.reload(true);
            })

            const account = await web3.eth.getAccounts();
            commit("SAVE_ACCOUNT", account[0]);

            const bazaar = new web3.eth.Contract(BAZAAR_CONTRACT_ABI, BAZAAR_ADDRESS);
            commit("SAVE_INSTANCE", bazaar);

            // const userLength = await state.instance.methods.getUserLength().call();
            // for (var i = 0; i < userLength; i++) {
            //     const address = await state.instance.methods.allUsers(i).call();
            //     commit("user", address);
            // }
            // /*****************OTHER POP UP**********************************/
            // if (state.users.includes(state.account)) {
            //     return;
            // }
            // else {
            //     await state.instance.methods.createUser().send({from: state.account})
            // }

        },
        async get_all_users({commit, state}) {
            const addressesLen = await state.instance.methods.getUserLength().call();
            if (addressesLen) {
                // console.log(items);
                for (var i = 0; i < addressesLen; i++) {
                    const address = await state.instance.methods.allUsers(i).call();
                    commit("saveAddress", address);
                }
            }
            else {
                return
            }

        },
        async get_all_products({commit, state}) {

            const items = await state.instance.methods.getUserItems(state.account).call();

            if (items.length) {
                // console.log(items);
                for (var i = 0; i < items.length; i++) {
                    const item_s = await state.instance.methods.getItemInfo(i).call();
                    const item = Object.assign({},
                        {item_id: item_s.id},
                        {item_name: item_s.nameOfItem},
                        {item_category: item_s.typeofItem},
                        {item_value: item_s.value}
                    );
                    // state.products.push(item);
                    commit("save_pdt", item);
                    // console.log(item)
                }
            }
            else {
                return
            }

        },
        async get_all_products_by_address({commit, state}) {
            const allProducts_length = await state.instance.methods.getAllItemsLength().call();
            console.log(allProducts_length);

            if (allProducts_length) {
                for (var i = 0; i < allProducts_length; i++) {
                    const item_ = await state.instance.methods.allItems(i).call();
                    const item = Object.assign({},
                        {item_id: item_.id},
                        {item_name: item_.nameOfProduct},
                        {item_category: item_.category},
                        {item_value: item_.value}
                    );
                    console.log(item_);
                    commit("save_all", item)
                }
            }
            else {
                return
            }
        },
        async checkUserRole({commit, state}) {
            const userRole = await state.instance.methods.checkAdressRole(state.account).call();
            commit("__userType", userRole);
        },
        async set_user_items({state}, item) {
            await state.instance.methods.createItem(state.account, item.name, item.price, item.condition, item.sku, item.category, item.description).send({from: state.account})
        },
        async create_user({state}, _address) {
            await state.instance.methods.createUser(_address).send({from: state.account})
        }
    }
}