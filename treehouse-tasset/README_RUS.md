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

## Ключевые адреса

| Контракт       | Адрес                                                                                                                 | Примечания |
|----------------|-----------------------------------------------------------------------------------------------------------------------|------------|
| tETH           | [0xD11c452fc99cF405034ee446803b6F6c1F6d5ED8](https://etherscan.io/address/0xD11c452fc99cF405034ee446803b6F6c1F6d5ED8) |            |
| wstETH         | [0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0](https://etherscan.io/address/0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0) | 1          |
| IAU            | [0x1B6238E95bBCABEE58997c99BaDD4154ad68BA92](https://etherscan.io/address/0x1B6238E95bBCABEE58997c99BaDD4154ad68BA92) | 2          |
| tETH-wstETH LP | [0xA10d15538E09479186b4D3278BA5c979110dDdB1](https://etherscan.io/token/0xa10d15538e09479186b4d3278ba5c979110dddb1)   | 3          |
| tETH Vault     | [0x551d155760ae96050439AD24Ae98A96c765d761B](https://etherscan.io/address/0x551d155760ae96050439AD24Ae98A96c765d761B) |            |
| tETH Router    | [0xeFA3fa8e85D2b3CfdB250CdeA156c2c6C90628F5](https://etherscan.io/address/0xeFA3fa8e85D2b3CfdB250CdeA156c2c6C90628F5) |            | 
| tETH Strategy  | [0x60d2D94aCB969CA54e781007eE89F04c1A2e5943](https://etherscan.io/address/0x60d2D94aCB969CA54e781007eE89F04c1A2e5943) |            |

Примечания:

1. Токен `wstETH` [принадлежит](https://docs.lido.fi/deployed-contracts/#core-protocol) компании `Lido`, а не `Treehous`.

2. `IAU` -- это сокращение для `внутренней учётной единицы` (`internal accounting unit`). `IAU` является ERC20-токеном, который используется в качестве хранимого актива (базового токена) в смарт-контракте `tETH`.

3. `LP` -- это сокращение для `пула ликвидности` (`liquidity pool`). Указанные пул не является разработкой `Treehouse`. См. подробности ниже.

## Ключевые сведения о смарт-контрактах

### Общие

1. Смарт-контракты `Treehouse` построены на базе библиотеки OpenZeppelin [версии 5.0.2](https://docs.openzeppelin.com/contracts/5.x/).
2. Исходный код смарт контрактов -- в папке: [contracts](contracts).

### tAsset

1. Обновляемый на основе [шаблона](https://docs.openzeppelin.com/upgrades-plugins/#proxy-patterns): `UUPS`.

2. Основан на [смарт-контракте токенезированного хранилища от OpenZeppelin]([contract from OpenZeppelin](https://docs.openzeppelin.com/contracts/5.x/erc4626)) по стандарту [ERC-4626](https://eips.ethereum.org/EIPS/eip-4626). Хранилище имеет базовый актив (базовый токен).

3. Поддерживает разрешения в соответствии со [стандартом ERC-2612](https://eips.ethereum.org/EIPS/eip-2612): одобрение передачи токена можно получить с помощью подписи без дополнительной транзакции.

4. Поддерживает [владение контрактом](https://docs.openzeppelin.com/contracts/5.x/access-control#ownership-and-ownable) с двухэтапной передачей: вариант подхода `Ownable`, который требует от нового владельца явного согласия на передачу роли собственника смарт-контракта. Это помогает избежать передачи роли собственника неправильной учетной записи.

5. Реализует черный список с одним управляющим аккаунтом (блэклистером): любая учетная запись, добавленная в черный список, не может передавать токены `tETH`.

### tETH-wstETH Liquidity Pool

1. Пул находится в инфраструктуре [Curve](https://curve.fi/).

2. [Транзакция по созданию пула](https://etherscan.io/tx/0xa3081cb2ccc2126d97b99cc300e356391752b312d0889ec08cd66bf1402a6e9b).

3. Адрес фабрики, которая использовалась для создания пула: [0x6A8cbed756804B16E05E741eDaBd5cB544AE21bf](https://etherscan.io/address/0x6A8cbed756804B16E05E741eDaBd5cB544AE21bf)

4. Фабрика пула в документах компании `Curve`: [ссылка](https://docs.curve.fi/references/deployed-contracts/#stableswap-ng)
