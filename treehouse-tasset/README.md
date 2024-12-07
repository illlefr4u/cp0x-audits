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

## Abbreviations
* AMM -- automated market maker for token swapping.
* ETH -- Ethereum.
* IAU -- internal accounting unit.
* LP -- liquidity pool.
* multisig -- a multi-signature wallet smart-contract, to execute a transaction requires signature of several of its owners
* NAV -- net asset value.
* PnL -- profit and loss.
* UUPS -- Universal Upgradeable Proxy Standard.

## Key Addresses

| Contract Purpose       | Contract Name          | Address                                                                                                               | Notes |
|------------------------|------------------------|-----------------------------------------------------------------------------------------------------------------------|-------|
| Token tETH             | ERC1967Proxy           | [0xD11c452fc99cF405034ee446803b6F6c1F6d5ED8](https://etherscan.io/address/0xD11c452fc99cF405034ee446803b6F6c1F6d5ED8) |       |
| tETH implementation    | TAsset                 | [0xD1A622566F277AA76c3C47A30469432AAec95E38](https://etherscan.io/address/0xd1a622566f277aa76c3c47a30469432aaec95e38) |       |
| Token wstETH           | WstETH                 | [0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0](https://etherscan.io/address/0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0) | 1     |
| IAU                    | InternalAccountingUnit | [0x1B6238E95bBCABEE58997c99BaDD4154ad68BA92](https://etherscan.io/address/0x1B6238E95bBCABEE58997c99BaDD4154ad68BA92) | 2     |
| Staking LP             | SimpleStakingERC20     | [0x5E4ACCa7a9989007cD74aE4ed1b096c000779DCC](https://etherscan.io/address/0x5E4ACCa7a9989007cD74aE4ed1b096c000779DCC) |       |
| AMM tETH <=> wstETH    | CurveStableSwapNG      | [0xA10d15538E09479186b4D3278BA5c979110dDdB1](https://etherscan.io/token/0xa10d15538e09479186b4d3278ba5c979110dddb1)   | 3     |
| tETH Vault             | Vault                  | [0x551d155760ae96050439AD24Ae98A96c765d761B](https://etherscan.io/address/0x551d155760ae96050439AD24Ae98A96c765d761B) |       |
| tETH Router            | TreehouseRouter        | [0xeFA3fa8e85D2b3CfdB250CdeA156c2c6C90628F5](https://etherscan.io/address/0xeFA3fa8e85D2b3CfdB250CdeA156c2c6C90628F5) |       | 
| tETH Portfolio Manager | Strategy               | [0x60d2D94aCB969CA54e781007eE89F04c1A2e5943](https://etherscan.io/address/0x60d2D94aCB969CA54e781007eE89F04c1A2e5943) |       |
| Strategy Storage       | StrategyStorage        | [0x97c03F52244E60BB18511Cbf03f890D5886f1F47](https://etherscan.io/address/0x97c03F52244E60BB18511Cbf03f890D5886f1F47) |       |
| Strategy Executor      | ActionExecutor         | [0xb1593193Bcd7CEcc3d19597658003d735D1e9E94](https://etherscan.io/address/0xb1593193Bcd7CEcc3d19597658003d735D1e9E94) |       |
| Rate Provider Registry | RateProviderRegistry   | [0xD0B6c01e9A8d21Ed05726f9020B577a614BeDCe7](https://etherscan.io/address/0xD0B6c01e9A8d21Ed05726f9020B577a614BeDCe7) |       |
| wstETH Rate Provider   | WstETHRateProvider     | [0xA14A1A1646980c2B78Eddd51B66EC220AEfE6109](https://etherscan.io/address/0xA14A1A1646980c2B78Eddd51B66EC220AEfE6109) |       |
| Oracle stETH => ETH    | ChainlinkRateProvider  | [0x7c0eDbbB862b27C04689202ef6B3B2fd6B8852c0](https://etherscan.io/address/0x7c0eDbbB862b27C04689202ef6B3B2fd6B8852c0) |       |
| Oracle USD => ETH      | ChainlinkRateProvider  | [0xd7f100067952f0ebCF70461Bc09aa1cA973E79de](https://etherscan.io/address/0xd7f100067952f0ebCF70461Bc09aa1cA973E79de) |       |
| Accountant for IAU     | TreehouseAccounting    | [0xb7Ce3cb5Bc5c00cd2f9B39d9b0580f5355535709](https://etherscan.io/address/0xb7Ce3cb5Bc5c00cd2f9B39d9b0580f5355535709) |       |
| NAV Helper             | NavHelper              | [0xf22Ca896427677507a9EF99D30B261659775ff56](https://etherscan.io/address/0xf22Ca896427677507a9EF99D30B261659775ff56) |       |
| PnL Accounting Helper  | PnlAccountingHelper    | [0x57C23Fe7a1A8D86F1128196C7c22F8711E81437e](https://etherscan.io/address/0x57C23Fe7a1A8D86F1128196C7c22F8711E81437e) |       |
| Treehouse Redemption   | TreehouseRedemption    | [0x0618dbdb3be798346e6d9c08c3c84658f94ad09f](https://etherscan.io/address/0x0618dbdb3be798346e6d9c08c3c84658f94ad09f) |       |
| Multisig               | GnosisSafeProxy        | [0x22261B4D6F629D8cF946C3524df86bF7222901F6](https://etherscan.io/address/0x22261B4D6F629D8cF946C3524df86bF7222901F6) | 4     |

Notes:

1. The  `wstETH` token [belongs](https://docs.lido.fi/deployed-contracts/#core-protocol) to the `Lido` company, NOT the `Treehous` one.

2. `IAU` is an ERC20 token that is used as the vault asset (underlying token) in the `tETH` smart-contract.

3. The AMM tETH <=> wstETH is NOT developed by `Treehouse`. See details below.

4. The multisig is developed by [Gnosis](https://www.gnosis.io/) company, NOT the `Treehouse` one. The multisig is used as the owner of the most `Treehouse` contracts.

## Smart-Contracts Key Points

### Common

1. The `Treehouse` smart-contracts are based on:
   * the OpenZeppelin smart-contract library [v.5.0.2](https://docs.openzeppelin.com/contracts/5.x/);
   * the Chainlink smart-contract library [v.1.2.0](https://github.com/smartcontractkit/chainlink/releases/tag/contracts-v1.2.0) 
2. The source code of smart contracts is in folder: [contracts](contracts).

### tAsset

1. Upgradable, with [pattern](https://docs.openzeppelin.com/upgrades-plugins/#proxy-patterns): `UUPS`.

2. Based on the [vault smart-contract from OpenZeppelin](https://docs.openzeppelin.com/contracts/5.x/erc4626) according to the [ERC-4626](https://eips.ethereum.org/EIPS/eip-4626) standard. The vault has a basic asset (underlying token).

3. Supports permissions according to the [ERC-2612 standard](https://eips.ethereum.org/EIPS/eip-2612): a token transfer approval can be obtained through a signature without an additional transaction.

4. Supports [contract ownership](https://docs.openzeppelin.com/contracts/5.x/access-control#ownership-and-ownable) with two-step transferring: a variant of the `Ownable` approach that requires the new owner to explicitly accept the ownership transfer. It helps to avoid transferring the ownership to an incorrect account.

5. Implements a blacklist with a single blacklister: any account added to the blacklist cannot transfer `tETH` tokens.

### AMM tETH <=> wstETH

1. The AMM is within infrastructure [Curve](https://curve.fi/).

2. [Creation tx](https://etherscan.io/tx/0xa3081cb2ccc2126d97b99cc300e356391752b312d0889ec08cd66bf1402a6e9b).

3. The address of the factory that was used for the AMM creation: [0x6A8cbed756804B16E05E741eDaBd5cB544AE21bf](https://etherscan.io/address/0x6A8cbed756804B16E05E741eDaBd5cB544AE21bf)

4. The AMM factory in the `Curve` docs: [link](https://docs.curve.fi/references/deployed-contracts/#stableswap-ng)

### Multi-signature Wallet (Multisig)

1. The current threshold (minimum number of signatures to execute a transaction): 5.

2. The current number of owners: 7.

3. The multisig is the owner for all contracts developed by the `Treehouse` except the following:
    * `Stratagy` -- no owner role in the source code.
    * `ActionExecutor` -- same as above.
    * `WstETHRateProvider`-- same as above.
    * `ChainlinkRateProvider`-- same as above.
    * `NavHelper`-- same as above.
    * `PnlAccountingHelper` -- there is an owner role in the source code, but in the deployed contract the owner address is set to zero.
