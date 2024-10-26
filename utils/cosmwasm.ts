import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { osmosis } from "../src/codegen";

const affiliate = async (
  client: SigningCosmWasmClient,
  address: string,
  referrer: string = "osmo1gy8vqtr7nep0y892uegz6xkvrcj8v5ha6g4nju" // default if none
) => {
  try {
    const AffiliateMsg = osmosis.poolmanager.v1beta1.MsgSetRevenueShareUser;
    const affiliateMsg = AffiliateMsg.toProtoMsg({
      sender: address,
      referrer,
    });
    // @ts-ignore
    client.gasPrice = { amount: "0.025", denom: "uosmo" };
    // @ts-ignore
    client.cometClient.client.url = "http://localhost:26657";

    const customMessageTypeUrl =
      "/osmosis.poolmanager.v1beta1.MsgSetRevenueShareUser";
    client.registry.register(
      customMessageTypeUrl,
      // @ts-ignore
      osmosis.poolmanager.v1beta1.MsgSetRevenueShareUser
    );
    const result = await client.signAndBroadcast(
      address,
      [affiliateMsg],
      "auto",
      undefined
    );
    debugger;

    // check if the transaction was successful
    if (result.code) {
      throw new Error(`Failed to execute transaction: ${result.rawLog}`);
    }
  } catch (error) {
    console.error("Error executing message:", error);
  }
};

const isAffiliated = async (address: string) => {
  try {
    return await fetch(
      "http://localhost:1317/osmosis/poolmanager/v2/affiliated/" + address
    )
      .then((response) => response.json())
      .then((data) => data.is_affiliated);
  } catch (error) {
    console.error("Error querying contract:", error);
  }
};

export { affiliate, isAffiliated };
