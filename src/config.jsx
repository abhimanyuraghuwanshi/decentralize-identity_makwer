const config = {
  contractAddress : '0x26c5866C2BB49A69093d7ab9ce97619E377429f6',
  contractAbi : [
    "function getUnverified() public view returns (uint256)",
    "function getAllVerificationCode() public view returns (uint256[] memory)",
    "function getTotalId() public view returns (uint256)",
    "function getIdentityCard(uint256 _no) public view returns ( string memory name, uint256 age, string memory city, bool verified, uint256 verificationCode, address generator, uint256 blockNo )",
    "function verifyIdentityCard(uint256 identityIndex) external onlyAdmin",
    "function createIdentityCard(  string memory _name, uint8 _age, string memory _city ) external"
    
 ]
}
export default config;


