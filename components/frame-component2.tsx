import type { NextPage } from "next";
import Btnicon from "./btnicon";
import styles from "./frame-component2.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({ className = "" }) => {
  return (
    <div className={[styles.profileInfoParent, className].join(" ")}>
      <div className={styles.profileInfo}>
        <img
          className={styles.profilepicIcon}
          loading="lazy"
          alt=""
          src="/profilepic@2x.png"
        />
        <div className={styles.profilenameParent}>
          <h2 className={styles.profilename}>MadSwap</h2>
          <Btnicon
            contentCopy="/tablericonedit.svg"
            contentCopyIconOverflow="hidden"
          />
        </div>
      </div>
      <div className={styles.referralsInfoParent}>
        <div className={styles.referralsInfo}>
          <img
            className={styles.groups3Icon}
            loading="lazy"
            alt=""
            src="/groups-3.svg"
          />
          <div className={styles.profilereferrals}>0</div>
          <a className={styles.referrals}>Referrals</a>
        </div>
        <div className={styles.levelInfo}>
          <div className={styles.symbiosislevel}>
            <img
              className={styles.bottleBlueIcon}
              loading="lazy"
              alt=""
              src="/bottleblue1.svg"
            />
            <div className={styles.symbiosislevelname}>Chaperone</div>
          </div>
        </div>
      </div>
      <div className={styles.invitedUsersInfoParent}>
        <div className={styles.invitedUsersInfo}>
          <div className={styles.youHaveInvited}>You have invited</div>
          <div className={styles.youHaveInvited}>0</div>
          <div className={styles.users}>users</div>
        </div>
        <div className={styles.invitationSummary}>
          <a className={styles.share}>Share</a>
          <div className={styles.referralsleft}>50</div>
          <div className={styles.symbiosislevelname}>more links</div>
        </div>
        <div className={styles.invitationSummary1}>
          <div className={styles.toBecomeA}>{`To become a `}</div>
          <div className={styles.nextlevel}>Catalyst</div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
