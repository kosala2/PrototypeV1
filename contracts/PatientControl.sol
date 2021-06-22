// SPDX-License-Identifier: MIT
pragma solidity ^0.8.5;

contract PatientControl{
    
    string private id;
    
    event eventCreatePatient(
        string id,
        uint256 timestamp
    );
    
    function setPatientId(string memory _id)public{
        id=_id;
        emit eventCreatePatient(id, block.timestamp);
    }
    
    function getPatientId()public view returns(string memory){
        return id;
    }
    
}