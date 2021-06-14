//  import PatientControl from '../build/contracts/PatientControl.json';

    var provider = 'http://127.0.0.1:7545';
    var web3Provider = new Web3.providers.HttpProvider(provider);
    var web3 = new Web3(web3Provider);

    web3.eth.net.isListening()
   .then(() => console.log('web3 is connected'))
   .catch(e => console.log('web3 not connected. Something went wrong'));


    var account;
    var instance;


    var contractAddress ='0x722889eC1d04b520359B1A6C7c4C768127B0a39D';
    var contractABI;

    //read abi from rest call
    function getABI(){
      $.ajax({
        url:"http://localhost:3000/abi",
        dataType: 'JSON',
        async:false,
        success:function(data){
          contractABI = data;
        }
      });
    }

    getABI();
    console.log("contractABI :"+contractABI);

    web3.eth.getBlockNumber().then((result) => {
      console.log("Latest Ethereum Block is ",result);
    });

   //create contract instance
   instance = new web3.eth.Contract(contractABI, contractAddress);


  //finding accounts
  web3.eth.getAccounts(function(err, accounts) {
    if (err != null) {
      alert("Error retrieving accounts.");
      return;
    }
    if (accounts.length == 0) {
      alert("No account found! Make sure the Ethereum client is configured properly.");
      return;
    }
    account = accounts[0];
    console.log('Account: ' + account);
    web3.eth.defaultAccount = account;
  });
