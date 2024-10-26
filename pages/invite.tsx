import type { NextPage } from "next";
import { Button } from "@mui/material";
import FrameComponent3 from "../components/frame-component3";
import styles from "./invite.module.css";
import { useChain } from "@cosmos-kit/react";
import { WalletStatus } from "cosmos-kit";
import { affiliate } from "@/utils/cosmwasm";

export type InvitedType = {
  className?: string;
};

const Invited: NextPage<InvitedType> = ({ className = "" }) => {
  const {
    status,
    connect,
    address,
    getSigningCosmWasmClient
  } = useChain("osmosis");

  const handleClick = async () => {
    if (status === WalletStatus.Disconnected) {
      connect();
      return;
    }
    if (status === WalletStatus.Connected) {
      // send message to affiliate
      const signingClient = await getSigningCosmWasmClient();
      const refferer = window.location.search.substring(1).split("&").find((param) => param.startsWith("code"))?.split("=")[1];
      // @ts-ignore
      await affiliate(signingClient, address, refferer);
      return
    }
  }

  return (
    <div className={[styles.invited, className].join(" ")}>
      <div className={styles.topSpacer} />
      <div className={styles.invitedInner}>
        <div className={styles.logoSymbiosis1Parent}>
          <img
            className={styles.logoSymbiosis1Icon}
            loading="lazy"
            alt=""
            src="/logosymbiosis-11.svg"
          />
          <a className={styles.symbiosis}>SYMBIOSIS</a>
        </div>
      </div>
      <section className={styles.youWereInvitedByParent}>
        <b className={styles.youWereInvited}>You were invited by</b>
        <FrameComponent3 />
      </section>
      <section className={styles.invitedChild}>
        <div className={styles.connectwalletParent}>
          <Button
            className={styles.connectwallet}
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#f7f7f7",
              fontSize: "20",
              background: "#462adf",
              borderRadius: "8px",
              "&:hover": { background: "#462adf" },
              width: 193,
              height: 54,
            }}
            onClick={handleClick}
          >
            {status === WalletStatus.Disconnected ? "Connect Wallet" : status === WalletStatus.Connected ? "Join Symbiosis" : "Loading..."}
          </Button>
          <div className={styles.andStartEarning}>And start earning</div>
        </div>
      </section>
    </div>
  );
};

export default Invited;
