import web3 from './web3';
import ArcadeTokenArtifact from '../../../build/contracts/ArcadeToken.json';
import GameManagerArtifact from '../../../build/contracts/GameManager.json';
import ExampleGameArtifact from '../../../build/contracts/ExampleGame.json';

// Deployed contract addresses (update these addresses after deployment)
const ArcadeTokenAddress = '0xA0aFfA20c322ad767c58C9376C3937a3e45e9a84';
const GameManagerAddress = '0x3D159f48C0b62f4c44625166F79180569AA7B3da';
const ExampleGameAddress = '0xb742ccF51bC3cB907062F4506eBd83D021b4C6E6';

// Create instances of the contracts
const ArcadeToken = new web3.eth.Contract(ArcadeTokenArtifact.abi, ArcadeTokenAddress);
const GameManager = new web3.eth.Contract(GameManagerArtifact.abi, GameManagerAddress);
const ExampleGame = new web3.eth.Contract(ExampleGameArtifact.abi, ExampleGameAddress);

export {
    ArcadeToken,
    GameManager,
    ExampleGame
};
