import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";

const contractAddress = "cosmos1contractaddress";

const affiliate = async (
  client: SigningCosmWasmClient,
  address: string,
  referrer: string
) => {
  try {
    const executeMsg = {
      affiliate: {
        referrer,
      },
    };

    const result = await client.execute(
      address,
      contractAddress,
      executeMsg,
      "auto",
      undefined
    );
    debugger;
  } catch (error) {
    console.error("Error executing message:", error);
  }
};

const isAffiliated = async (client: SigningCosmWasmClient, address: string) => {
  try {
    const queryMsg = {
      is_affiliated: {
        address,
      },
    };

    const result = await client.queryContractSmart(contractAddress, queryMsg);
    debugger;
  } catch (error) {
    console.error("Error querying contract:", error);
  }
};

export { affiliate, isAffiliated };
