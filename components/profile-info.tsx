import type { NextPage } from "next";
import styles from "./profile-info.module.css";

export type ProfileInfoType = {
  className?: string;
};

const ProfileInfo: NextPage<ProfileInfoType> = ({ className = "" }) => {
  return (
    <div className={[styles.profileInfo, className].join(" ")}>
      <div className={styles.profileDetails}>
        <img
          className={styles.profilepicIcon}
          alt=""
          src="/profilepic@2x.png"
        />
        <div className={styles.symbiosislevel}>
          <img
            className={styles.bottleBlueIcon}
            loading="lazy"
            alt=""
            src="/bottleblue.svg"
          />
        </div>
      </div>
      <div className={styles.nameAndReferrals}>
        <h2 className={styles.profilename}>MadSwap</h2>
        <div className={styles.referralOptionsWrapper}>
          <div className={styles.referralOptions}>
            <img className={styles.groups3Icon} alt="" src="/groups-3.svg" />
            <div className={styles.profilereferrals}>1024</div>
            <a className={styles.referrals}>Referrals</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
