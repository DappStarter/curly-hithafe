require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process only venture story cruise spider around grid civil army ghost'; 
let testAccounts = [
"0x762d68f8168b5e210b5b06b2035587f7bc5fb5d831a47cf2e4c1da7aa4868025",
"0x0cf6dc79ad9b5790ef045dc03606facac624e1d838947d74595d4c6da5db1e67",
"0x674aa34f93e4da14eb9cde350bee7b563941b829e226b61a4ad66d9c756bb71b",
"0xf7749777a4bbbe1ebff2f35c0f955a23e96a4c2df53d8042068666033edf6ec4",
"0x306c41abf7383721bdfc5080a12976bbfa310234d64ccd83c92bd5b6e63816c2",
"0x7cc0d5f4d728d9bf7508a6aba87b3035afda7a11a6db9e82a642e5de4fdba05e",
"0x093965213610317bb3a355a4e5f7f39cfbce2fc444dad8bd608d70e2ddc2505e",
"0x0a5af1384407d55d4829752edaf62f546b4e2ab97ae79db8b1ed9e126a9775e9",
"0x219332f45f4a889e6168994be4d03af5571994cc7647a43a11a64dec95276c6e",
"0x9b329ee3d7400a84f2c3d318553f0e3a09f299d67e97d4c2efa34fd0587cd771"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
