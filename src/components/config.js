export const TODO_ADDRESS = '0x596dC934176B49ceD2Bf6507Cc042C2778583a71';

export const TODO_ABI = [
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
                "name": "nameOfProduct",
                "type": "string"
            },
            {
                "name": "category",
                "type": "string"
            },
            {
                "name": "value",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0xff68fa6e"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "createUser",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x25ad91ce"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_userAddress",
                "type": "address"
            },
            {
                "name": "_name",
                "type": "string"
            },
            {
                "name": "_type",
                "type": "string"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "createItem",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x81c6976d"
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
                "name": "nameOfItem",
                "type": "string"
            },
            {
                "name": "typeofItem",
                "type": "string"
            },
            {
                "name": "value",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0xde7fe3e7"
    }
];