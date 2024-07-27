import web3 from './web3';
import ArcadeTokenArtifact from '../../../build/contracts/ArcadeToken.json';
import ArcadeGameArtifact from '../../../build/contracts/ArcadeGame.json';
import GameManagerArtifact from '../../../build/contracts/GameManager.json';

// Deployed contract addresses (update these addresses after deployment)
const ArcadeTokenAddress = '0x5De273D80710D128287D8Eb5Dd97553EF8Fd7e7d';
const ArcadeGameAddress = '0x8E31e2AE008Da18783bAAAD7169D73aEB7c3ed5c';
const GameManagerAddress = '0x38ad076A272CEC61a814d2284aD104D2C4E5258F';

// Create instances of the contracts
const ArcadeToken = new web3.eth.Contract(ArcadeTokenArtifact.abi, ArcadeTokenAddress);
const ArcadeGame = new web3.eth.Contract(ArcadeGameArtifact.abi, ArcadeGameAddress);
const GameManager = new web3.eth.Contract(GameManagerArtifact.abi, GameManagerAddress);

export {
    ArcadeToken,
    ArcadeGame,
    GameManager
};
