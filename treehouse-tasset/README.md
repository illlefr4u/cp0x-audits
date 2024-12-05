# Treehouse `tAsset` Project Audit

[Русская версия здесь](README_RUS.md)

## About

Results of the audit and research of smart contracts for the `tAsset` project of the `Treehouse` company.

## Audit Summary

1. The current smart-contracts are safe ✅.
2. The central `tAsset` smart-contract is upgradable, so it can be changed by the owner in the future.

## Project Summary

The `tAsset` project is build around the same name tokenized vault smart-contract that is [currently deployed](https://app.treehouse.finance/) in:
* the [Ethereum](https://ethereum.org/) Mainnet blockchain: token named `tETH`.
* the [Mantle](https://www.mantle.xyz/) Mainnet blockchain: token named `cmETH`.

The project allows you to stake native tokens or liquid staking tokens (LST) in exchange for `tETH` and earn yield through the Proof-of-Stake (PoS) rewards and interest rate arbitrage.
While your original tokens are staked you still being able to use `tETH` for DeFi activities.
`tETH` is also stated to be fundamental to supporting the implementation of Decentralized Offered Rates ([DOR](https://www.treehouse.finance/products/dor)) -- the second project of the `Treehouse` company.

## Main Project Links
1. [Treehouse Site](https://www.treehouse.finance/).
2. [Treehouse Docs Site](https://docs.treehouse.finance/).
3. [Project tAsset homepage](https://www.treehouse.finance/products/tassets)
4. [GitHub for tETH](https://github.com/0xhypn/tETH-protocol) -- private.

_Note_: Some links may be unavailable from Russia and other regions or open slowly.

## Key Addresses

| Contract       | Address                                                                                                               | Notes |
|----------------|-----------------------------------------------------------------------------------------------------------------------|-------|
| tETH           | [0xD11c452fc99cF405034ee446803b6F6c1F6d5ED8](https://etherscan.io/address/0xD11c452fc99cF405034ee446803b6F6c1F6d5ED8) |       |
| wstETH         | [0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0](https://etherscan.io/address/0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0) | 1     |
| IAU            | [0x1B6238E95bBCABEE58997c99BaDD4154ad68BA92](https://etherscan.io/address/0x1B6238E95bBCABEE58997c99BaDD4154ad68BA92) | 2     |
| tETH-wstETH LP | [0xA10d15538E09479186b4D3278BA5c979110dDdB1](https://etherscan.io/token/0xa10d15538e09479186b4d3278ba5c979110dddb1)   | 3     |
| tETH Vault     | [0x551d155760ae96050439AD24Ae98A96c765d761B](https://etherscan.io/address/0x551d155760ae96050439AD24Ae98A96c765d761B) |       |
| tETH Router    | [0xeFA3fa8e85D2b3CfdB250CdeA156c2c6C90628F5](https://etherscan.io/address/0xeFA3fa8e85D2b3CfdB250CdeA156c2c6C90628F5) |       | 
| tETH Strategy  | [0x60d2D94aCB969CA54e781007eE89F04c1A2e5943](https://etherscan.io/address/0x60d2D94aCB969CA54e781007eE89F04c1A2e5943) |       |

Notes:

1. The `wstETH` token [belongs](https://docs.lido.fi/deployed-contracts/#core-protocol) to the `Lido` company, not the `Treehous` one.

2. `IAU` stands for `internal accounting unit`. `IAU` is an ERC20 token that is used as the vault asset (underlying token) in the `tETH` smart-contract.

3. `LP` stands for `lequidity pool`. The pool is not developed by `Treehouse`. See details below.

## Smart-Contracts Key Points

### Common

1. The `Treehouse` smart-contracts are based on the OpenZeppelin library [v.5.0.2](https://docs.openzeppelin.com/contracts/5.x/).
2. The source code of smart contracts is in folder: [contracts](contracts).

### tAsset

1. Upgradable, with [pattern](https://docs.openzeppelin.com/upgrades-plugins/#proxy-patterns): `UUPS`.

2. Based on the [vault smart-contract from OpenZeppelin](https://docs.openzeppelin.com/contracts/5.x/erc4626) according to the [ERC-4626](https://eips.ethereum.org/EIPS/eip-4626) standard. The vault has a basic asset (underlying token).

3. Supports permissions according to the [ERC-2612 standard](https://eips.ethereum.org/EIPS/eip-2612): a token transfer approval can be obtained through a signature without an additional transaction.

4. Supports [contract ownership](https://docs.openzeppelin.com/contracts/5.x/access-control#ownership-and-ownable) with two-step transferring: a variant of the `Ownable` approach that requires the new owner to explicitly accept the ownership transfer. It helps to avoid transferring the ownership to an incorrect account.

5. Implements a blacklist with a single blacklister: any account added to the blacklist cannot transfer `tETH` tokens.

### tETH-wstETH Liquidity Pool

1. The pool is within infrastructure [Curve](https://curve.fi/).

2. [Creation tx](https://etherscan.io/tx/0xa3081cb2ccc2126d97b99cc300e356391752b312d0889ec08cd66bf1402a6e9b).

3. The address of the factory that was used for the pool creation: [0x6A8cbed756804B16E05E741eDaBd5cB544AE21bf](https://etherscan.io/address/0x6A8cbed756804B16E05E741eDaBd5cB544AE21bf)

4. The pool factory in the `Curve` docs: [link](https://docs.curve.fi/references/deployed-contracts/#stableswap-ng)
