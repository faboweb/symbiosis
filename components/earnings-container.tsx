import type { NextPage } from "next";
import styles from "./earnings-container.module.css";

export type EarningsContainerType = {
  className?: string;
};

const EarningsContainer: NextPage<EarningsContainerType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.earningsContainer, className].join(" ")}>
      <h2 className={styles.myEarnings}>My earnings</h2>
      <div className={styles.earningsDetails}>
        <div className={styles.collectedFees}>
          <b className={styles.totalCollected}>Total Collected</b>
          <div className={styles.feesInfo}>
            <b className={styles.myfees}>$3,520</b>
            <div className={styles.inFees}>in fees</div>
          </div>
        </div>
        <div className={styles.hourlyChange}>
          <div className={styles.hrChange}>24hr Change</div>
          <div className={styles.dailyChange}>
            <b className={styles.myfees}>$25</b>
            <div className={styles.dailyPercentage}>
              <div className={styles.percentageValue}>+</div>
              <div className={styles.feesdaypercentage}>15</div>
              <div className={styles.percentageValue1}>%</div>
            </div>
          </div>
        </div>
        <img
          className={styles.coin1Icon}
          loading="lazy"
          alt=""
          src="/coin-1@2x.png"
        />
      </div>
    </div>
  );
};

export default EarningsContainer;
