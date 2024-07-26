import web3 from './web3';
import ArcadeTokenArtifact from '../../../build/contracts/ArcadeToken.json';

// Deployed contract address for ArcadeToken
const ArcadeTokenAddress = '0xA626E62b3B19276BaDdCC1d86F6fe5322309c2b5';

// Create an instance of the ArcadeToken contract
const ArcadeToken = new web3.eth.Contract(ArcadeTokenArtifact.abi, ArcadeTokenAddress);

export {
    ArcadeToken
};
