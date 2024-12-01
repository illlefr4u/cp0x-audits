import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@openzeppelin/hardhat-upgrades";
import "hardhat-contract-sizer";
import "hardhat-gas-reporter";
import dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: {
    version: process.env.SOLIDITY_VERSION ?? "0.8.24",
    settings: {
      optimizer: {
        enabled: (process.env.OPTIMIZER_ENABLED ?? "true") === "true",
        runs: Number(process.env.OPTIMIZER_RUNS ?? "1000")
      }
    }
  },
  networks: {
    hardhat: {
      accounts: {
        mnemonic: process.env.HARDHAT_MNEMONIC ?? "test test test test test test test test test test test junk"
      }
    },
  },
  gasReporter: {
    enabled: (process.env.GAS_REPORTER_ENABLED ?? "false") === "true"
  },
  contractSizer: {
    runOnCompile: (process.env.CONTRACT_SIZER_ENABLED ?? "false") === "true"
  }
};

export default config;
