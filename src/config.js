export const BAZAAR_ADDRESS = '0xE02ACabB2f7b5C791D740BAB3f675DdCc752927B';
export const BAZAAR_CONTRACT_ABI =  [
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "allAdmins",
        "outputs": [
            {
                "name": "adminAddress",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x06a4dc68"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "itemIdToUser",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x563ce86c"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "address"
            },
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "userItemsIds",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x96f380a4"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "allUsers",
        "outputs": [
            {
                "name": "userAddress",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0xa2bdedf4"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "allItems",
        "outputs": [
            {
                "name": "id",
                "type": "uint256"
            },
            {
                "name": "hash",
                "type": "string"
            },
            {
                "name": "nameOfProduct",
                "type": "string"
            },
            {
                "name": "value",
                "type": "uint256"
            },
            {
                "name": "condition",
                "type": "string"
            },
            {
                "name": "sku",
                "type": "string"
            },
            {
                "name": "category",
                "type": "string"
            },
            {
                "name": "description",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0xff68fa6e"
    },
    {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor",
        "signature": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "added_address",
                "type": "address"
            }
        ],
        "name": "AdminSuccess",
        "type": "event",
        "signature": "0x2dfcb7172ff1fe1434057bab7aa83982c0ee4d46528e6473f547d34da77cef56"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "added_address",
                "type": "address"
            }
        ],
        "name": "userSuccess",
        "type": "event",
        "signature": "0x68c35433e049723f7f644a23a81777fe2f39303f07840a5832a62b4233e48845"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "_address",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "id",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "nameOfProduct",
                "type": "string"
            },
            {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "condition",
                "type": "string"
            },
            {
                "indexed": false,
                "name": "sku",
                "type": "string"
            },
            {
                "indexed": false,
                "name": "category",
                "type": "string"
            },
            {
                "indexed": false,
                "name": "description",
                "type": "string"
            }
        ],
        "name": "createSuccess",
        "type": "event",
        "signature": "0x9afd34344802906bbe9f13359065fab3c0b328482bb07e93456b7b79e63cc3e3"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_newAdminAddress",
                "type": "address"
            }
        ],
        "name": "addAdmin",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x70480275"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_theAddress",
                "type": "address"
            }
        ],
        "name": "checkAdressRole",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x750bfb97"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_newUserAddress",
                "type": "address"
            }
        ],
        "name": "createUser",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0xcdd87618"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_userAddress",
                "type": "address"
            },
            {
                "name": "_hash",
                "type": "string"
            },
            {
                "name": "_name",
                "type": "string"
            },
            {
                "name": "_value",
                "type": "uint256"
            },
            {
                "name": "_condition",
                "type": "string"
            },
            {
                "name": "_sku",
                "type": "string"
            },
            {
                "name": "_category",
                "type": "string"
            },
            {
                "name": "_description",
                "type": "string"
            }
        ],
        "name": "createItem",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x4b87289b"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getUserLength",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x7456fed6"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getItemsLength",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x194f4795"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getAllItemsLength",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0xb6112726"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_userAddress",
                "type": "address"
            }
        ],
        "name": "getUserItems",
        "outputs": [
            {
                "name": "items",
                "type": "uint256[]"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0xce6019b4"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_itemId",
                "type": "uint256"
            }
        ],
        "name": "getItemInfo",
        "outputs": [
            {
                "name": "id",
                "type": "uint256"
            },
            {
                "name": "hash",
                "type": "string"
            },
            {
                "name": "nameOfProduct",
                "type": "string"
            },
            {
                "name": "value",
                "type": "uint256"
            },
            {
                "name": "condition",
                "type": "string"
            },
            {
                "name": "sku",
                "type": "string"
            },
            {
                "name": "category",
                "type": "string"
            },
            {
                "name": "description",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0xde7fe3e7"
    }
];