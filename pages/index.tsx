import type { NextPage } from "next";
import { Button } from "@mui/material";
import Content from "../components/content";
import styles from "./welcome.module.css";
import { useChain } from "@cosmos-kit/react";
import { WalletStatus } from "cosmos-kit";
import { useRouter } from "next/router";

export type LandingSymbiosisType = {
  className?: string;
};

const LandingSymbiosis: NextPage<LandingSymbiosisType> = ({
  className = "",
}) => {
  const {
    // chain,
    status,
    // wallet,
    // username,
    // address,
    // message,
    // connect,
    openView,
  } = useChain('osmosis');
  const router = useRouter();

  if (status === WalletStatus.Connected) {
    // redirect to home
    router.push("/home");
  }

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
              onClick={openView}
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
