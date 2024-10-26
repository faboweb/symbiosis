import type { NextPage } from "next";
import { Button } from "@mui/material";
import Content from "../components/content";
import styles from "./welcome.module.css";
import { useChain } from "@cosmos-kit/react";
import { WalletStatus } from "cosmos-kit";
import { useRouter } from "next/router";
import { affiliate, isAffiliated } from "@/utils/cosmwasm";

export type LandingSymbiosisType = {
  className?: string;
};

const LandingSymbiosis: NextPage<LandingSymbiosisType> = ({
  className = "",
}) => {
  const {
    status,
    address,
    openView,
    getSigningCosmWasmClient
  } = useChain('osmosis');
  const router = useRouter();

  if (status === WalletStatus.Connected && address) {
    isAffiliated(address).then((affiliated) => {
      if (affiliated) {
        // redirect to home
        router.push("/home");
      }});
  }

  const clickHandler = async () => {
    if (status === WalletStatus.Disconnected) {
      openView();
      return;
    }
    if (status === WalletStatus.Connected && address) {
      const affiliated = await isAffiliated(address)
      if (affiliated) {
        // redirect to home
        router.push("/home");
      } else {
        const signingClient = await getSigningCosmWasmClient();
        const refferer = window.location.search.substring(1).split("&").find((param) => param.startsWith("code"))?.split("=")[1];
        // @ts-ignore
        await affiliate(signingClient, address, refferer)
        router.push("/home");
      }
    }
  };

  return (
    <div className={[styles.iphone1415Pro7, className].join(" ")}>
      <div className={styles.topSpacer} />
      <Content />
      <section className={styles.actions}>
        <div className={styles.referEarnRepeat}>
          <h1 className={styles.refer}>REFER</h1>
          <h1 className={styles.earn}>EARN</h1>
          <h1 className={styles.repeat}>REPEAT</h1>
        </div>
        <div className={styles.description}>
          <div className={styles.referUsers}>
            <div className={styles.referUsersToContainer}>
              <span>{`Refer users to `}</span>
              <b>Osmosis</b>
              <span> and earn trading fees</span>
            </div>
            <Button
              className={styles.btntext}
              onClick={clickHandler}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#f7f7f7",
                fontSize: "20",
                background: "#462adf",
                borderRadius: "8px",
                "&:hover": { background: "#462adf" },
              }}
            >
              Create Referral
            </Button>
          </div>
        </div>
        <img
          className={styles.coin1Icon}
          loading="lazy"
          alt=""
          src="/coin-11@2x.png"
        />
      </section>
    </div>
  );
};

export default LandingSymbiosis;
