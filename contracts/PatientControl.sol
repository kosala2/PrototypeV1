// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PatientControl{
    
    string public id;
    
    function setPatientId(string memory _id)public{
        id =_id;
    }
    
    function getPatientId()public view returns(string memory){
        return id;
    }
    
}