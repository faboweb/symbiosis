import type { NextPage } from "next";
import TableRowUsers from "./table-row-users";
import styles from "./user-progress.module.css";

export type UserProgressType = {
  className?: string;
  userName?: string;
  invites?: string;
  volume?: string;
};

const UserProgress: NextPage<UserProgressType> = ({
  className = "",
  userName,
  invites,
  volume,
}) => {
  return (
    <div className={[styles.userProgress, className].join(" ")}>
      <div className={styles.userInfo}>
        <b className={styles.userName}>User Name</b>
        <b className={styles.invites}>Invites</b>
        <b className={styles.volume}>Volume</b>
      </div>
      <TableRowUsers userName={userName} invites={invites} volume={volume} />
      <div className={styles.userInfo1}>
        <div className={styles.buttonprev}>
          <img
            className={styles.arrowBackIosNewIcon}
            loading="lazy"
            alt=""
            src="/arrow-back-ios-new.svg"
          />
        </div>
        <div className={styles.currentpageParent}>
          <b className={styles.currentpage}>1</b>
          <div className={styles.of}>of</div>
          <div className={styles.totalpages}>5</div>
        </div>
        <div className={styles.buttonprev}>
          <img
            className={styles.arrowBackIosNewIcon}
            loading="lazy"
            alt=""
            src="/arrow-forward-ios.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default UserProgress;
