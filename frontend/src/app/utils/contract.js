import web3 from './web3';
import ArcadeTokenArtifact from '../../../build/contracts/ArcadeToken.json';
import ArcadeGameArtifact from '../../../build/contracts/ArcadeGame.json';
import GameManagerArtifact from '../../../build/contracts/GameManager.json';

// Deployed contract addresses (update these addresses after deployment)
const ArcadeTokenAddress = '0xE7F0B606f28aB874d8708D918aC6Bba774964728';
const ArcadeGameAddress = '0xBb94A794a6749a9781E732b1f2432e559F8078E4';
const GameManagerAddress = '0xe98e4dE0Dd01725a02fFb413a434DB8510ED96E7';

// Create instances of the contracts
const ArcadeToken = new web3.eth.Contract(ArcadeTokenArtifact.abi, ArcadeTokenAddress);
const ArcadeGame = new web3.eth.Contract(ArcadeGameArtifact.abi, ArcadeGameAddress);
const GameManager = new web3.eth.Contract(GameManagerArtifact.abi, GameManagerAddress);

export {
    ArcadeToken,
    ArcadeGame,
    GameManager
};
