// SPDX-License-Identifier: MIT
pragma solidity ^0.8.5;

contract PatientControl{
    
    string private name;
    string private email;
    string private mobile;

    mapping(address=>string) private users;


    string private dname;
    string private demail;
    string private dmobile;
    string private dhospitalname;

    mapping(address=>string) private doctors;

    
    event eventCreatePatient(
        string name,
        string email,
        string mobile,
        uint256 timestamp
    );

    event eventCreateDoctor(
        string dname,
        string demail,
        string dmobile,
        string dhospitalname,
        uint256 timestamp
    );

    
    function writePatientDetails(string memory _name, string memory _email, string memory _mobile)public{
        name=_name;
        email=_email;
        mobile=_mobile;
        emit eventCreatePatient(name,email,mobile,block.timestamp);
    }

    function writePatientInfo(address _address, string memory _hash)public{
        users[_address]=_hash;
    }

    function getPatientInfo(address _address)public view returns(string memory){
        return users[_address];
    }

    
    function getPatientName()public view returns(string memory){
        return name;
    }
    
    function getPatientEmail()public view returns(string memory){
        return email;
    }

    function getPatientMobile()public view returns(string memory){
        return mobile;
    }


   function writeDoctorDetails(string memory _dname, string memory _demail, string memory _dmobile, string memory _dhospitalname)public{
        dname=_dname;
        demail=_demail;
        dmobile=_dmobile;
        dhospitalname = _dhospitalname;
        emit eventCreateDoctor(dname,demail,dmobile,dhospitalname,block.timestamp);
    }

    function writeDoctorInfo(address _address, string memory _hash)public{
        doctors[_address]=_hash;
    }

    function getDoctorInfo(address _address)public view returns(string memory){
        return doctors[_address];
    }


    function getDoctorName()public view returns(string memory){
        return dname;
    }

    function getDoctorEmail()public view returns(string memory){
        return demail;
    }

    function getDoctorMobile()public view returns(string memory){
        return dmobile;
    }
   
     function getDoctorHospitalName()public view returns(string memory){
        return dhospitalname;
    }


}
