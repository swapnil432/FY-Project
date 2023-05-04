// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

contract RealEstateNFT {
    string public name;
    address payable public government;
    mapping (string => Property) public properties;

    string[] public propertyIDs;

    // mapping (address => Property[]) public ownerOf;
    //onwerOf(X983nd) => [prop1, prop2];
    
    uint256 public propertyCounter;

    struct Property {
        address payable owner;
        uint256 price;
        uint256 tax;
        address approvedBuyer;
        bool isValid;
        string id;
        // Transaction[] transactions;
    }

    event sell_Property (
        address payable owner,
        uint256 price,
        uint256 tax,
        address approvedBuyer,
        bool isValid,
        string id
    );

    event approve_Property (
        address payable owner,
        uint256 price,
        uint256 tax,
        address approvedBuyer,
        bool isValid,
        string id
    );

    event change_Price (
        address payable owner,
        uint256 price,
        uint256 tax,
        address approvedBuyer,
        bool isValid,
        string id


    );

    event buy_Property (
        address payable owner,
        uint256 price,
        uint256 tax,
        address approvedBuyer,
        bool isValid,
        string id
    );

    mapping(string => Transaction[]) public transactions;

    struct Transaction {
        address previousOwner;
        address newOwner;
        uint256 price;
        uint256 timestamp;
        string id;
    }

    // event sell_Transaction (
    //     address previousOwner,
    //     address newOwner,
    //     uint256 price,
    //     uint256 timestamp
    // );

    // event buy_Transaction (
    //     address previousOwner,
    //     address newOwner,
    //     uint256 price,
    //     uint256 timestamp
    // );

    constructor(){
        government = payable(msg.sender);
        name = "Web3 MarketPlace";
    }

    function mint(address _seller, string memory _propertyId) public onlyGovernment{
        properties[_propertyId] = Property({
            owner: payable(_seller),
            price: 0,
            tax: 0,
            approvedBuyer: address(0),
            isValid: true,
            id:_propertyId
            // transactions: new Transaction[]
            
        });
        transactions[_propertyId].push(Transaction({
                previousOwner: address(0),
                newOwner: _seller,
                price: 0,
                timestamp: block.timestamp,
                id: _propertyId
            }));

        propertyIDs.push(_propertyId);
        
        emit sell_Property(properties[_propertyId].owner, properties[_propertyId].price, properties[_propertyId].tax, properties[_propertyId].approvedBuyer, properties[_propertyId].isValid, properties[_propertyId].id);
        // emit mint_Transaction(transactions[propertyCounter][0].previousOwner, transactions[propertyCounter][1].newOwner, transactions[propertyCounter][2].price, transactions[propertyCounter][3].timestamp);
        propertyCounter ++;
    }

    function approveSale(string memory _propertyId, address _buyer) public onlyValid(_propertyId){
        Property storage property = properties[_propertyId];
        require(property.owner == msg.sender, "Only the owner can approve sale.");
        require(property.owner != _buyer, "seller cannot sell to themselves");
        property.approvedBuyer = _buyer;
        emit approve_Property(property.owner, property.price, property.tax, property.approvedBuyer, property.isValid, property.id);
    }

    function transfer(string memory _propertyId) public payable onlyValid(_propertyId){
        Property storage property = properties[_propertyId];
        require(property.approvedBuyer == msg.sender, "Buyer not approved.");
        require(msg.value >= property.price, "Insufficient payment.");

        property.tax=property.price<40000000000000000000? property.price/3: property.price/5;
        property.owner.transfer(property.price - property.tax);
        government.transfer(property.tax);
        transactions[_propertyId].push(Transaction({
            previousOwner: property.owner,
            newOwner: msg.sender,
            price: property.price,
            timestamp: block.timestamp,
            id: _propertyId
        }));
        property.owner = payable(msg.sender);

        emit buy_Property(property.owner, property.price, property.tax, property.approvedBuyer, property.isValid, property.id);
        // emit sell_Transaction(transactions[_propertyId][0].previousOwner, transactions[_propertyId][1].newOwner, transactions[_propertyId][2].price, transactions[_propertyId][3].timestamp);

        property.approvedBuyer = address(0);
    }

    function getProperty(string memory _propertyId) public view onlyValid(_propertyId) returns( Property memory) {
        Property memory property = properties[_propertyId];
        return property;
    }

    function getTransaction(string memory _propertyId) public view returns (Transaction[] memory) {
        Transaction[] memory transaction = transactions[_propertyId];
        return transaction;
    }

    function changePrice(string memory _propertyId, uint256 newPrice) public onlyValid(_propertyId){
        require(msg.sender == properties[_propertyId].owner, "you have to own the property");
        properties[_propertyId].price = newPrice;
        emit change_Price(properties[_propertyId].owner, properties[_propertyId].price, properties[_propertyId].tax, properties[_propertyId].approvedBuyer, properties[_propertyId].isValid, properties[_propertyId].id);
        
    }

    function destroyProperty(string memory _propertyId) public onlyGovernment{
        properties[_propertyId].isValid = false;
    }

    function makeValid(string memory _propertyId) public onlyGovernment{
        properties[_propertyId].isValid = true;
    }

    function showAllProperties() public view returns(Property[] memory){
        Property[] memory allProperties = new Property[](propertyIDs.length);
        for (uint i = 0; i < propertyIDs.length; i++) {
            string memory id = propertyIDs[i];
            allProperties[i] = properties[id];
        }
        return allProperties;

}

    modifier onlyGovernment() {
        require(msg.sender == government, "Only the government can perform this action.");
        _;
    }

    modifier onlyValid(string memory _propertyId){
        require(properties[_propertyId].isValid== true, "Your property is not valid.");
        _;
    }


}


