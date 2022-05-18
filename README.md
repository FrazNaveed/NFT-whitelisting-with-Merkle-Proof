# NFT-whitelisting-with-Merkle-Proof

#Steps to use Merkle tree for NFT whitelisting

This script generates a merkle tree for the addresses that are to be whitelisted. 
When tree is generated set the root hash appending 0x in smart contract. 
Implement the merkle verfier in smart contract using merkle library. 
Each address will have its own proof if it exists in the tree. 
That proof is sent to the smart contract. 
Merkle verfiy library will verify it. 
If user doesn't exist in the tree. It will throw error

** This implementation is better approach than implementing address whitelising inside of smart contract. Where each user will pay gas fee to get whitelisted. 
