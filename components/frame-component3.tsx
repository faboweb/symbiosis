import type { NextPage } from "next";
import InviterProfilePic from "./inviter-profile-pic";
import styles from "./frame-component3.module.css";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: NextPage<FrameComponent3Type> = ({ className = "" }) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.inviternameParent}>
        <h1 className={styles.invitername}>MadSwap</h1>
        <div className={styles.groups3Parent}>
          <img
            className={styles.groups3Icon}
            loading="lazy"
            alt=""
            src="/groups-311.svg"
          />
          <div className={styles.inviterreferals}>1024</div>
          <div className={styles.referrals}>Referrals</div>
        </div>
      </div>
      <div className={styles.totalCollectedParent}>
        <h3 className={styles.totalCollected}>Total Collected</h3>
        <div className={styles.inveterfeesParent}>
          <div className={styles.referrals}>$3,520</div>
          <div className={styles.inFees}>in fees</div>
        </div>
      </div>
      <InviterProfilePic />
    </div>
  );
};

export default FrameComponent3;
