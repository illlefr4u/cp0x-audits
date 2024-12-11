# Аудит проекта `tAsset` компании `Treehouse`

[English version here](README.md)

## Введение
Результаты аудита и исследования смарт-контрактов проекта `tAsset` компании `Treehouse`.

## Краткие результаты аудита

1. Текущие смарт-контракты безопасны ✅.
2. Центральный смарт-контракт `tAsset` является обновляемым, поэтому он может быть изменен владельцем в будущем.

## Краткое описание проекта

Проект `tAsset` построен вокруг одноименного смарт-контракта токенезированного хранилища (vault) который [на момент исследования развернут](https://app.treehouse.finance/) в:
* блокчейне [Ethereum](https://ethereum.org/): имя токена `tETH`.
* блокчейне [Mantle](https://www.mantle.xyz/): имя токена `cmETH`.

Проект позволяет размещать найтивные токены или ликвидные токены стейкинга (LST) в обмен на `tETH` и зарабатывать доходность посредством вознаграждений за Proof-of-Stake (PoS) и арбитраж.
Пока ваши исходные токен размещены в проекте вы можете использовать `tETH` для участия в DeFi протоколах.
Также утверждается, что `tETH` имеет основополагающее значение для поддержки внедрения децентрализованных предлагаемых ставок ([DOR](https://www.treehouse.finance/products/dor)) — второго проекта компании `Treehouse`.

## Основные ссылки проекта

1. [Сайт компании Treehouse](https://www.treehouse.finance/).
2. [Сайт документации Treehouse](https://docs.treehouse.finance/).
3. [Страница проекта tAsset](https://www.treehouse.finance/products/tassets).
4. [GitHub токена tETH](https://github.com/0xhypn/tETH-protocol) -- закрытый.

_Примечание_: Некоторые ссылки могут быть недоступны из России и других регионов или открываться медленно.

## Сокращения
* AMM -- automated market maker -- автоматический рынок для обмена токенов.
* ETH -- Ethereum.
* IAU -- internal accounting unit -- внутренней учётная единица.
* LP -- liquidity pool -- пул ликвидности.
* multisig -- смарт контракт кошелька с мульти-подписью, для выполнения транзакции требуются подпись нескольких его владельцев.
* NAV -- net asset value -- стоимость чистых активов.
* PnL -- profit and loss -- доход и потери.
* UUPS -- Universal Upgradeable Proxy Standard -- стандарт универсального обновляемого прокси.

## Ключевые адреса

| Назначение контракта   | Название контракта     | Адрес                                                                                                                 | Примечания |
|------------------------|------------------------|-----------------------------------------------------------------------------------------------------------------------|------------|
| Токен tETH             | ERC1967Proxy           | [0xD11c452fc99cF405034ee446803b6F6c1F6d5ED8](https://etherscan.io/address/0xD11c452fc99cF405034ee446803b6F6c1F6d5ED8) |            |
| tETH implementation    | TAsset                 | [0xD1A622566F277AA76c3C47A30469432AAec95E38](https://etherscan.io/address/0xd1a622566f277aa76c3c47a30469432aaec95e38) |            |
| Токен wstETH           | WstETH                 | [0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0](https://etherscan.io/address/0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0) | 1          |
| IAU                    | InternalAccountingUnit | [0x1B6238E95bBCABEE58997c99BaDD4154ad68BA92](https://etherscan.io/address/0x1B6238E95bBCABEE58997c99BaDD4154ad68BA92) | 2          |
| Staking LP             | SimpleStakingERC20     | [0x5E4ACCa7a9989007cD74aE4ed1b096c000779DCC](https://etherscan.io/address/0x5E4ACCa7a9989007cD74aE4ed1b096c000779DCC) |            |
| AMM tETH <=> wstETH    | CurveStableSwapNG      | [0xA10d15538E09479186b4D3278BA5c979110dDdB1](https://etherscan.io/token/0xa10d15538e09479186b4d3278ba5c979110dddb1)   | 3          |
| tETH Vault             | Vault                  | [0x551d155760ae96050439AD24Ae98A96c765d761B](https://etherscan.io/address/0x551d155760ae96050439AD24Ae98A96c765d761B) |            |
| tETH Router            | TreehouseRouter        | [0xeFA3fa8e85D2b3CfdB250CdeA156c2c6C90628F5](https://etherscan.io/address/0xeFA3fa8e85D2b3CfdB250CdeA156c2c6C90628F5) |            | 
| tETH Portfolio Manager | Strategy               | [0x60d2D94aCB969CA54e781007eE89F04c1A2e5943](https://etherscan.io/address/0x60d2D94aCB969CA54e781007eE89F04c1A2e5943) |            |
| Strategy Storage       | StrategyStorage        | [0x97c03F52244E60BB18511Cbf03f890D5886f1F47](https://etherscan.io/address/0x97c03F52244E60BB18511Cbf03f890D5886f1F47) |            |
| Strategy Executor      | ActionExecutor         | [0xb1593193Bcd7CEcc3d19597658003d735D1e9E94](https://etherscan.io/address/0xb1593193Bcd7CEcc3d19597658003d735D1e9E94) |            |
| Rate Provider Registry | RateProviderRegistry   | [0xD0B6c01e9A8d21Ed05726f9020B577a614BeDCe7](https://etherscan.io/address/0xD0B6c01e9A8d21Ed05726f9020B577a614BeDCe7) |            |
| wstETH Rate Provider   | WstETHRateProvider     | [0xA14A1A1646980c2B78Eddd51B66EC220AEfE6109](https://etherscan.io/address/0xA14A1A1646980c2B78Eddd51B66EC220AEfE6109) |            |
| Oracle stETH => ETH    | ChainlinkRateProvider  | [0x7c0eDbbB862b27C04689202ef6B3B2fd6B8852c0](https://etherscan.io/address/0x7c0eDbbB862b27C04689202ef6B3B2fd6B8852c0) |            |
| Oracle USD => ETH      | ChainlinkRateProvider  | [0xd7f100067952f0ebCF70461Bc09aa1cA973E79de](https://etherscan.io/address/0xd7f100067952f0ebCF70461Bc09aa1cA973E79de) |            |
| Accountant for IAU     | TreehouseAccounting    | [0xb7Ce3cb5Bc5c00cd2f9B39d9b0580f5355535709](https://etherscan.io/address/0xb7Ce3cb5Bc5c00cd2f9B39d9b0580f5355535709) |            |
| NAV Helper             | NavHelper              | [0xf22Ca896427677507a9EF99D30B261659775ff56](https://etherscan.io/address/0xf22Ca896427677507a9EF99D30B261659775ff56) |            |
| PnL Accounting Helper  | PnlAccountingHelper    | [0x57C23Fe7a1A8D86F1128196C7c22F8711E81437e](https://etherscan.io/address/0x57C23Fe7a1A8D86F1128196C7c22F8711E81437e) |            |
| Treehouse Redemption   | TreehouseRedemption    | [0x0618dbdb3be798346e6d9c08c3c84658f94ad09f](https://etherscan.io/address/0x0618dbdb3be798346e6d9c08c3c84658f94ad09f) |            |
| Multisig-владелец      | GnosisSafeProxy        | [0x22261B4D6F629D8cF946C3524df86bF7222901F6](https://etherscan.io/address/0x22261B4D6F629D8cF946C3524df86bF7222901F6) | 4     |
| Multisig-казна         | GnosisSafeProxy        | [0xB38f2aCb7B562475908c0C6E80a045Deb4023f70](https://etherscan.io/address/0xB38f2aCb7B562475908c0C6E80a045Deb4023f70) | 4     |

Примечания:

1. Токен `wstETH` [принадлежит](https://docs.lido.fi/deployed-contracts/#core-protocol) компании `Lido`, а НЕ `Treehous`.

2. `IAU` является ERC20-токеном, который используется в качестве хранимого актива (базового токена) в смарт-контракте `tETH`.

3.  AMM `tETH <=> wstETH` НЕ является разработкой `Treehouse`. См. подробности ниже.

4. Multisig разработан компанией [Gnosis](https://www.gnosis.io/), а НЕ `Treehouse`. Multisig используется в качестве владельца большинства конатрактов `Treehouse`.

## Ключевые сведения о смарт-контрактах

### Общие

1. Смарт-контракты `Treehouse` построены на базе:
   * библиотеки смарт-контрактов OpenZeppelin [версии 5.0.2](https://docs.openzeppelin.com/contracts/5.x/);
   * библиотеки смарт-контрактов Chainlink [версии 1.2.0](https://github.com/smartcontractkit/chainlink/releases/tag/contracts-v1.2.0)
2. Исходный код смарт контрактов -- в папке: [contracts](contracts).

### tAsset

1. Обновляемый на основе [шаблона](https://docs.openzeppelin.com/upgrades-plugins/#proxy-patterns): `UUPS`.

2. Основан на [смарт-контракте токенезированного хранилища от OpenZeppelin](https://docs.openzeppelin.com/contracts/5.x/erc4626) по стандарту [ERC-4626](https://eips.ethereum.org/EIPS/eip-4626). Хранилище имеет базовый актив (базовый токен).

3. Поддерживает разрешения в соответствии со [стандартом ERC-2612](https://eips.ethereum.org/EIPS/eip-2612): одобрение передачи токена можно получить с помощью подписи без дополнительной транзакции.

4. Поддерживает [владение контрактом](https://docs.openzeppelin.com/contracts/5.x/access-control#ownership-and-ownable) с двухэтапной передачей: вариант подхода `Ownable`, который требует от нового владельца явного согласия на передачу роли собственника смарт-контракта. Это помогает избежать передачи роли собственника неправильной учетной записи.

5. Реализует черный список с одним управляющим аккаунтом (блэклистером): любая учетная запись, добавленная в черный список, не может передавать токены `tETH`.

## AMM tETH <=> wstETH

1. AMM находится в инфраструктуре [Curve](https://curve.fi/).

2. [Транзакция по созданию AMM](https://etherscan.io/tx/0xa3081cb2ccc2126d97b99cc300e356391752b312d0889ec08cd66bf1402a6e9b).

3. Адрес фабрики, которая использовалась для создания AMM: [0x6A8cbed756804B16E05E741eDaBd5cB544AE21bf](https://etherscan.io/address/0x6A8cbed756804B16E05E741eDaBd5cB544AE21bf)

4. Фабрика AMM в документах компании `Curve`: [ссылка](https://docs.curve.fi/references/deployed-contracts/#stableswap-ng)

### Multisig-владелец

1. Текущий порог (минимальное количество подписей для выполнения транзакции): 5.

2. Текущее количество владельцев: 7.

3. Данный multisig является владельцем всех контрактов, разработанных `Treehouse` за исключением следующих:
   * `Stratagy` -- нет роли владельца в исходном коде.
   * `ActionExecutor` -- то же, что и выше.
   * `WstETHRateProvider` -- то же, что и выше.
   * `ChainlinkRateProvider` -- то же, что и выше.
   * `NavHelper` -- то же, что и выше.
   * `PnlAccountingHelper` -- есть роль владельца в исходном коде, но в развернутом контракте адрес владельца установлен равным нулю.

### Multisig-казна

1. Текущий порог (минимальное количество подписей для выполнения транзакции): 2.

2. Текущее количество владельцев: 4.

3. Данный multisig используется в качестве сокровищницы для накопления комиссий, получаемых от проекта.
