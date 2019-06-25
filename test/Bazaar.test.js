const Bazaar = artifacts.require('./Bazaar.sol');


contract('Bazaar', (accounts) =>  {

    let instance;
    const deployer = accounts[0];
    const account = accounts[1];

   beforeEach(async () => {
       instance = await Bazaar.new();
   });

    it('deploys successfully', async () => {
        const address = await instance.address;
        assert.notEqual(address, 0x0);
        assert.notEqual(address, '');
        assert.notEqual(address, null);
        assert.notEqual(address, undefined)
    })

    it('At least one admin Exists', async () => {
        const address = await instance.checkAdressRole(deployer);
        const addrsesAtIndex = await instance.allAdmins(0);

        assert.equal(addrsesAtIndex, deployer);
        assert.equal(address, 0)
    })

    it('Adds an admin successfully',async() => {

        const result = await instance.addAdmin(account);
        const isAdmin = await instance.checkAdressRole(deployer);
        const isAddress = await instance.checkAdressRole(account);
        const addrsesAtIndex = await instance.allAdmins(1);

        const event = result.logs[0].args;

        assert.equal(isAdmin, 0);
        assert.equal(isAddress, 0);
        assert.equal(addrsesAtIndex, account);
        assert.equal(event.added_address, account);
    })

    it('Adds a store owner successfully',async() => {
        const result = await instance.createUser(account);
        const isAdmin = await instance.checkAdressRole(deployer);
        const isAddress = await instance.checkAdressRole(account);
        const addrsesAtIndex = await instance.allUsers(0);

        const event = result.logs[0].args;

        assert.equal(isAdmin, 0);
        assert.equal(isAddress, 1);
        assert.equal(addrsesAtIndex, account);
        assert.equal(event.added_address, account);
    })

    it('Creates a store listing successfully', async () => {
        const _account = accounts[2];
        const results = await instance.createUser(_account);
        const isAddress = await instance.checkAdressRole(_account);

        assert.equal(isAddress.toNumber(), 1);


        const itemsLength = await instance.getItemsLength();

        const result =  await instance.createItem(_account, "Logitech Wireless Mouse", 1000, "New", "#001", "Electronics", "This is a great Item", {from : _account});
        const event = result.logs[0].args;

        assert.equal(event._address, _account);
        assert.equal(event.id.toNumber(), itemsLength.toNumber());
        assert.equal(event.nameOfProduct, "Logitech Wireless Mouse");
        assert.equal(event.value, 1000);
        assert.equal(event.condition, "New");
        assert.equal(event.sku, "#001");
        assert.equal(event.category, "Electronics");
        assert.equal(event.description, "This is a great Item");
    });

    it('Fetches products assigned to a specific address', async () => {
        const _account = accounts[2];
        const results = await instance.createUser(_account);
        const isAddress = await instance.checkAdressRole(_account);

        assert.equal(isAddress.toNumber(), 1);

        const itemsLength = await instance.getItemsLength();

        const result = await instance.createItem(_account, "Logitech Wireless Mouse", 1000, "New", "#001", "Electronics", "This is a great Item", {from : _account});
        const event = result.logs[0].args;

        const getItemAddress = await instance.itemIdToUser(itemsLength);
        const getItemId = await instance.userItemsIds(_account, itemsLength);


        assert.equal(event._address, getItemAddress);
        assert.equal(event.id.toNumber(), getItemId.toNumber());
    });

});