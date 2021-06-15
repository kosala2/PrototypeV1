$(document).ready( function () { 

  $("#addInfo").click(async function(){


      if(!account){
        alert("Select an authorised account to create assets");
        return;
      }

      console.log("Adding Patient Info to blockchain");

      var _id = $("#_id").val();

      instance.methods.setPatientId(_id).send({
        from: account,
        gas:350000,
        gasPrice:'125000000000'
      })
      .then(function(tx){
        console.log("write patient id to blockchain:",tx);
      });


  });



  //view patient id
  $("#viewInfo").click(async function(){

    var pid = await instance.methods.getPatientId().call( (error)=>{
        console.log(error);
    });
    console.log("Patient Id", pid);
    document.getElementById('patientInfo').innerHTML= pid;

  });






});