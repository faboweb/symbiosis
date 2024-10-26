import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./collected-fees.module.css";

export type CollectedFeesType = {
  className?: string;
};

const CollectedFees: NextPage<CollectedFeesType> = ({ className = "" }) => {
  const router = useRouter();

  const onCollectedFeesContainerClick = useCallback(() => {
    router.push("/my-earnings");
  }, [router]);

  return (
    <div
      className={[styles.collectedfees, className].join(" ")}
      onClick={onCollectedFeesContainerClick}
    >
      <div className={styles.tokeniconWrapper}>
        <img
          className={styles.tokenicon}
          loading="lazy"
          alt=""
          src="/tokenicon1.svg"
        />
      </div>
      <div className={styles.frameParent}>
        <div className={styles.receivedFeesParent}>
          <b className={styles.receivedFees}>Received Fees</b>
          <div className={styles.date}>Date</div>
        </div>
        <div className={styles.collectedParent}>
          <div className={styles.receivedFees}>Collected</div>
          <div className={styles.rewardDetails}>
            <b className={styles.receivedFees}>150</b>
            <div className={styles.ticker}>TIA</div>
          </div>
          <div className={styles.dollarValue}>
            <div className={styles.placeholder}>$</div>
            <div className={styles.receivedFees}>2</div>
            <div className={styles.receivedFees}>USD</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectedFees;
