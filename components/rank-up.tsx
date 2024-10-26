import type { NextPage } from "next";
import styles from "./rank-up.module.css";

export type RankUpType = {
  className?: string;
};

const RankUp: NextPage<RankUpType> = ({ className = "" }) => {
  return (
    <div className={[styles.rankup, className].join(" ")}>
      <img
        className={styles.rankupChild}
        loading="lazy"
        alt=""
        src="/frame-41@2x.png"
      />
      <div className={styles.frameParent}>
        <div className={styles.rankingHigherParent}>
          <b className={styles.rankingHigher}>Ranking Higher!</b>
          <div className={styles.date}>Date</div>
        </div>
        <div className={styles.youHaveClimbedParent}>
          <div className={styles.rankingHigher}>You have climbed</div>
          <b className={styles.rankingHigher}>3</b>
          <div className={styles.rankingHigher}>spots</div>
        </div>
      </div>
    </div>
  );
};

export default RankUp;
