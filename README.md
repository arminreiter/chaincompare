<h1 align="center">
  <img src="https://raw.githubusercontent.com/arminreiter/chaincompare/main/app/src/assets/img/CC_Logo_Tag.svg" width="24em"> ChainCompare
</h1>

<p align="center">
  <a style="text-decoration:none" href="https://chaincompare.org" target="_blank">
    <img src="https://img.shields.io/badge/Website-chaincompare.org-blue" alt="Website" />
  </a>
  <a style="text-decoration:none" href="https://github.com/arminreiter/chaincompare/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/arminreiter/chaincompare" alt="license" />
  </a>
  <a style="text-decoration:none" href="https://github.com/arminreiter/chaincompare/actions/workflows/build.yml" target="_blank">
    <img src="https://github.com/arminreiter/chaincompare/actions/workflows/build.yml/badge.svg" alt="build" />
  </a>
</p>

ChainCompare (chaincompare.org) is a community research project that collects technical information about blockchains and distributed ledger technologies such as time to finality,
block size, consensus algorithm or the supported smart contract languages. It was created because this
information is sometimes hard to find but should be accessible easily.  
ChainCompare does not collect financial data such as price, marketcap or trading volume.

## Add new chain

If you want to add a new chain, you can either use the form at <https://forms.office.com/r/fz5dq0JW2T> or you take the template 
file in _data/_template.json, create a copy of it, fill in all the information and create a pull request. The image of the 
chain must be in app/src/assets/logos/.  

The data collected is:

- name: name of the blockchain (e.g. Ethereum)
- logo: link to the uploaded logo (e.g. assets/logos/ethereum.svg)
- mainSite: is the homepage of the project (e.g. https://ethereum.org)
- sourceCode: is the link to the source code (e.g. https://github.com/ethereum/go-ethereum)
- links: contains other useful links such das documentation
- blockExplorer: contains the link to the block explorer(s) (e.g. "https://etherscan.io")
- baseTechnology: Blockchain, DAG (directed acyclic graph) or e.g. "Blockchain (Ethereum)" for blockchains with own mainnet but based on Ethereum
- currency: contains the name, symbol and number of decimals
- tps: Transactions per second
- ttf: time to finality (in seconds)
- blockTime: block time in seconds
- blockSize: block size in kilobyte (KB)
- clientLanguage: the programming language in which the main client was implemented (e.g. C++)
- consenus: the used consensus algorithm (e.g. PoW)
- creator: the creator or the foundation behind the project (e.g. Ethereum Foundation)
- headquarter: the headquarter, if there is one
- chainLaunch: year when the chain was launched (year of the genesis block)
- smartContractLanguages: Languages in which smart contracts can be implemented (empty if not smart contracts are possible, else e.g. Solidity)
- evmCompatible: true/false, depending if the blockchain is EVM (Ethereum Virtual Machine) compatible
- hashAlgorithm: the main hash algorithm used in the system
- type: public/private/consortium
- license: license of the chain/client
- txModel: UTXO, Account or something else
- description: a description of the chain including the primary use case
- extra: contains additional information that could be useful
- lastUpdated: the date when the data for the chain was updated the last time

### Sample

```json
{
    "name": "Bitcoin",
    "logo": "assets/logos/bitcoin.svg",
    "mainSite": "https://bitcoin.org",
    "sourceCode": "https://github.com/bitcoin/bitcoin",
    "links": [ ],
    "blockExplorer" : [ "https://www.blockchain.com/explorer" ],
    "baseTechnology": "Blockchain",
    "currency": {
        "name" : "Bitcoin",
        "symbol" : "BTC",
        "decimals": 8
    },
    "tps" : 7, 
    "ttf" : 4200, 
    "blockTime" : 600, 
    "blockSize" : 1024,
    "clientLanguage" : [ "C++" ],
    "consensus": "PoW",
    "creator": "Satoshi Nakamoto",
    "headquarter" : { },
    "chainLaunch" : 2009,
    "smartContractLanguages" : [ ],
    "evmCompatible" : false,
    "hashAlgorithm" : "sha256",
    "type": "public",
    "license" : "MIT",
    "txModel" : "UTXO",
    "description" : "",
    "extra": {
        
    },
    "lastUpdated" : "2022-04-24"
}
```

## Run and update

within app:

```bash
npm install
npm run updata
ng serve
```
