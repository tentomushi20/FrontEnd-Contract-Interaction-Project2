async function main() {
    const kick = await ethers.getContractFactory("Game");
  
    // Start deployment, returning a promise that resolves to a contract object
    const kick_ = await kick.deploy();
    console.log("Contract address:", kick_.address);
  
  
  }
  
  main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });