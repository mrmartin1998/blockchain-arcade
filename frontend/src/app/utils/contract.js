import web3 from './web3';
import ArcadeTokenArtifact from '../../../build/contracts/ArcadeToken.json';
import ArcadeGameArtifact from '../../../build/contracts/ArcadeGame.json';
import GameManagerArtifact from '../../../build/contracts/GameManager.json';

// Deployed contract addresses (update these addresses after deployment)
const ArcadeTokenAddress = '0x1b1c3e142F4B7F589B761a44Dd8936a8585dc9Ee';
const ArcadeGameAddress = '0x29F33938Bb8E736d3A3CD6a8d9A3F37991EFd617';
const GameManagerAddress = '0x44add3d0e295D0b5B6b89a698Db92C9549bF54ee';

// Create instances of the contracts
const ArcadeToken = new web3.eth.Contract(ArcadeTokenArtifact.abi, ArcadeTokenAddress);
const ArcadeGame = new web3.eth.Contract(ArcadeGameArtifact.abi, ArcadeGameAddress);
const GameManager = new web3.eth.Contract(GameManagerArtifact.abi, GameManagerAddress);

export {
    ArcadeToken,
    ArcadeGame,
    GameManager
};
