// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract landAsset is  ERC20{
    constructor() ERC20("token","TKN"){}
    receive() external payable { }

    modifier etherValidate(uint256 amt){
        require(msg.value >= amt, "Not Enought Amount  In Your Walled");
        _;
    }
    struct lands {
        uint256 landID;
        string landlocation;
        uint256 price;
        uint propertyPID;
        bool isforSell;
        bool isLandVerified;
        address payable landOwner;
        bool isRemoved;
    }

    struct user{
        address id;
        string name;
        uint age;
        string city;
        string aadharNumber;
        string panNumber;
        string email;
        bool isUserVerified;
    }
    mapping (address => lands ) _landList;
    mapping (address =>  user)  _userList;
    mapping (address => bytes32) _encyptdata;

    address payable []   _landLog;
    address [] _userLog;


    function getlandowner(address _currentOwner) public  view returns (address payable ){
        lands storage _land = _landList[payable(_currentOwner)];
        return  (_land.landOwner);
    }

    function addLand(
        address  _landAddress,
        uint256 _landID,
        string memory _Address,
        uint256 _price,
        uint _propertyPID,
        bool _isLandVerified,
        address payable _landOwner
    ) public {
        bool _isforSell = true;
        bool _isRemoved = false;
        lands memory _newland = lands(_landID,_Address,_price,_propertyPID,_isforSell,_isLandVerified,_landOwner, _isRemoved);
        _landList[_landAddress] = _newland;
        _encyptdata[_landAddress] = hashWithKeccak256(_landAddress,_landOwner,_Address);
        _landLog.push(payable (_landOwner));

    }

    function removeLand(address payable _toremove) public {
        _landList[_toremove].isRemoved = false;
        address payable [] memory _defaultlog;
        uint256 count = 0 ;
        for(uint256  i = 0 ;  i < _landLog.length;i++){
            if(_landLog[i] == _toremove){
                continue ;
            }
            else{
                _defaultlog[count] = _landLog[i];
                count++;
            }
        }
        _landLog = _defaultlog;
    }
  
    function hashWithKeccak256(address add1, address payable add2,string memory data) public pure returns (bytes32) {
        return keccak256(abi.encodePacked(add1,add2,data));
    }

    function getEncryptdata(address encryptAdd) public view returns(bytes32){
        bytes32 _data = _encyptdata[encryptAdd];
        return  _data;
    }
    function getLand(address payable _getLand)public view  returns (
        uint256 landID,
        string memory landAddress,
        uint256 _price,
        uint propertyPID,
        bool isforSell,
        bool isLandVerified,
        address payable  landOwner,
        bool isRemoved
    ) {
        lands storage _land = _landList[_getLand];
        return (
            _land.landID,
        _land.landlocation,
        _land.price,
        _land.propertyPID,
        _land.isforSell,
        _land.isLandVerified,
        _land.landOwner,
        _land.isRemoved
        );
    }

    function addUser(
         address _id,
        string memory _name,
        uint _age,
        string memory _city,
        string memory _aadharNumber,
        string memory _panNumber,
        string memory _email,
        bool _isUserVerified
    ) public {
    user memory newUser =  user(_id,_name,_age,_city,_aadharNumber,_panNumber,_email,_isUserVerified);
    _userList[_id] = newUser;
    _userLog.push(_id);
    }

    function transferOwnerShip(address landAddress,address payable _newOwner,uint256 amttoSent) public returns(address){
         transferEther( _landList[landAddress].landOwner,amttoSent);
        _landList[landAddress].landOwner = _newOwner;
        return _newOwner;
    }

    function transferEther(address _sentTo,uint256 amttoSent) public payable returns (bool){
       (bool success, ) =  payable(_sentTo).call {value:amttoSent} ('');
       return success;
    }
}