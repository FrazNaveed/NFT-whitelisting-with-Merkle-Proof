const {MerkleTree} = require("merkletreejs");
const keccak256 = require('keccak256');

let whitelistAddress = [
    "0xbD9D4a71B76C494958d9D258A1e3d4c0801495e0",
    "0x42A9fc221B0E034f93b77e459Fb40C031c1f46F5",
    "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4",
    "0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2"
];

const leafNodes = whitelistAddress.map(addr => keccak256(addr));

const merkleTree = new MerkleTree(leafNodes, keccak256, {sortPairs:true});

// console.log(leafNodes);
// console.log(merkleTree);

const rootHash = merkleTree.getRoot();
console.log("whilelist merkle tree", merkleTree.toString());
console.log("Root Hash", rootHash );

// Use 'msg.sender()' address to query and API returns the merkle proof

const claimingAddress = leafNodes[3];
// const claimingAddress = keccak256("0x78731D3Ca6b7E34aC0F824c42a7cC18A495cabaB");


// 'getHexProof' returns the neighbour leaf and all parent nodes hashes
// that will be required to derive the Merkle root hash
const hexProof = merkleTree.getHexProof(claimingAddress);
console.log(hexProof);
console.log(merkleTree.verify(hexProof, claimingAddress, rootHash));