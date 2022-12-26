const { ethers } = require("ethers");
require('dotenv').config();

const contractAddress = process.env.CONTRACT_ADDRESS
const rpcUrl = process.env.RPC_URL
const secretKey = process.env.SECRET_KEY
const to = "0x6B0787E734bfe3fBe0b2DBeA869DA55469e5ADe7"
// とりあえずランダムでtokenID
const tokenID = Math.floor(Math.random() * 100 +1);

const main = async () => {
    const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
    const signer = new ethers.Wallet(secretKey,provider)
    const contract = new ethers.Contract(contractAddress,abi,signer)

    const tx = await contract.safeMint(to,tokenID,"",{gasLimit: 200000})

    console.log(tx.hash)

    return
}

main()
.then(() => process.exit(0))
.catch(error => {
    console.error(error);
    process.exit(1);
});

