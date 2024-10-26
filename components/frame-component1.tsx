import type { NextPage } from "next";
import styles from "./frame-component1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <div className={[styles.leaderboardParent, className].join(" ")}>
      <h2 className={styles.leaderboard}>Leaderboard</h2>
      <div className={styles.leaders}>
        <div className={styles.leaderStats}>
          <b className={styles.secondleaderfees}>$1000</b>
          <img
            className={styles.secondleaderpicIcon}
            loading="lazy"
            alt=""
            src="/secondleaderpic@2x.png"
          />
        </div>
        <div className={styles.leaderStats1}>
          <b className={styles.secondleaderfees}>$1000</b>
          <img
            className={styles.secondleaderpicIcon}
            loading="lazy"
            alt=""
            src="/firstleaderpic@2x.png"
          />
        </div>
        <div className={styles.leaderStats2}>
          <b className={styles.secondleaderfees}>$1000</b>
          <img
            className={styles.secondleaderpicIcon}
            loading="lazy"
            alt=""
            src="/thirdleaderpic@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
