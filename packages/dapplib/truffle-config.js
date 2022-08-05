require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clock bottom security chat crater remember clump hope clock front trim'; 
let testAccounts = [
"0xe253332754f4195864aa165aa964cc623a79c05d08bca37ef311b4660ba33c4d",
"0x8c1672d7b3d8e0ac5ba73f92ee24cab5b8666aeafff731b01d514b3e1a3940fe",
"0xd3d1d9c9a525a8a257a723e35e68f896cc832a8d3e293694846812ae6e4b69ce",
"0x80a8b441a6abb52865d9c6e72b97e686a4780ca1f684a7dcb6bb10f02c7bd862",
"0xae4f7370f5ee67a306b6d8dcd8104fd9dc327a5c4ab830cdd64058e2a5714106",
"0x1d4032441c2ed64c4f87c32afc9ec9ee9d7b4ebc103a1168e8725de629422510",
"0xa08e2d874e9bd16b949a9284814293293b55edc52798e49b429693754520c3e0",
"0xff1758bd2b31548d37de00edfe6f4b6f1e7b4a33e8a95973d96956cb75eecc1f",
"0x8ac88fe66fead88beae788843b07a26db6330a08602c1ecd1084ecc5c12265e4",
"0x2e50d988feb531feb0d8ab0db8435668b195ae7e8b35b8534571849011c88723"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

