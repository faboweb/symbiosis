import type { NextPage } from "next";
import TableRowToken from "./table-row-token";
import styles from "./frame-component.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <div className={[styles.navigationAndPagesParent, className].join(" ")}>
      <div className={styles.navigationAndPages}>
        <b className={styles.coin}>Coin</b>
        <b className={styles.amount}>Amount</b>
      </div>
      <TableRowToken tCK="TCK" tokenName="TokenName" price="0000" />
      <div className={styles.navigationAndPages1}>
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

export default FrameComponent;
