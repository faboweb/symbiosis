import type { NextPage } from "next";
import { Button } from "@mui/material";
import FrameComponent3 from "./frame-component3";
import styles from "./index.module.css";

export type InvitedType = {
  className?: string;
};

const Invited: NextPage<InvitedType> = ({ className = "" }) => {
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
          >
            Connect Wallet
          </Button>
          <div className={styles.andStartEarning}>And start earning</div>
        </div>
      </section>
    </div>
  );
};

export default Invited;
