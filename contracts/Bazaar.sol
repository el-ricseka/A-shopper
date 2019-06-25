pragma solidity ^0.5.0;

import "./Roles.sol";


contract Bazaar {

    using Roles for Roles.Role;

    Roles.Role  users;
    Roles.Role  admins;

    event AdminSuccess(
        address added_address
    );
    event userSuccess(
        address added_address
    );
    event createSuccess (
        address _address,
        uint id,
        string nameOfProduct,
        uint value,
        string condition,
        string sku,
        string category,
        string description
    );

    address owner = msg.sender;

    constructor() public {
        admins.add(owner);
        Admin memory admin = Admin({
            adminAddress : owner
            });
        allAdmins.push(admin);
    }

    modifier onlyUser() {
        require(users.has(msg.sender) == true, 'This operation can only be run by registered users ');
        _;
    }

    modifier onlyAdmin() {
        require(admins.has(msg.sender) == true, 'This operation can only be run by registered Admins ');
        _;
    }

    function addAdmin(address _newAdminAddress) public onlyAdmin {
        admins.add(_newAdminAddress);
        User memory user = User({
            userAddress : _newAdminAddress
            });
        Admin memory admin = Admin({
            adminAddress : _newAdminAddress
            });
        allAdmins.push(admin);
        allUsers.push(user);

        emit AdminSuccess(_newAdminAddress);
    }

    function checkAdressRole(address _theAddress) public view returns (uint){

        if (admins.has(_theAddress)) {
            return 0;
        }

        if (users.has(_theAddress)) {
            return 1;
        }

        if (!users.has(_theAddress) && !admins.has(_theAddress)) {
            return 2;
        }
    }

    struct Item {
        uint id;
        string nameOfProduct;
        uint value;
        string condition;
        string sku;
        string category;
        string description;
    }
    //
    struct User {
        address userAddress;
    }

    struct Admin {
        address adminAddress;
    }
    //
    Item[] public allItems;

    User[] public allUsers;

    Admin[] public allAdmins;

    mapping(address => uint[]) public userItemsIds;
    mapping(uint => address) public itemIdToUser;

    function createUser(address _newUserAddress) public onlyAdmin {
        users.add(_newUserAddress);
        User memory user = User({
            userAddress : _newUserAddress
            });
        allUsers.push(user);
        emit userSuccess(_newUserAddress);
    }

    function createItem(address _userAddress, string memory _name, uint _value, string memory _condition, string memory _sku, string memory _category, string memory _description) public onlyUser {
        Item memory item = Item({
            id : allItems.length,
            nameOfProduct : _name,
            value : _value,
            condition : _condition,
            sku : _sku,
            category : _category,
            description : _description
            });

        emit createSuccess(_userAddress, allItems.length, _name, _value, _condition, _sku, _category, _description);
        itemIdToUser[allItems.length] = _userAddress;
        userItemsIds[_userAddress].push(allItems.length);
        allItems.push(item);

    }

    function getUserLength() public view returns (uint) {
        return allUsers.length;
    }

    function getItemsLength() view public returns (uint) {
        return allItems.length;
    }

    function getAllItemsLength() view public returns (uint) {
        return allItems.length;
    }

    function getUserItems(address _userAddress) public view returns (uint[] memory items){
        return userItemsIds[_userAddress];
    }

    //This function returns all information about single item
    function getItemInfo(uint _itemId) public view returns (uint id, string memory nameOfItem, string memory typeofItem, uint value) {
        Item memory item = allItems[_itemId];
        return (item.id, item.nameOfProduct, item.category, item.value);
    }

}