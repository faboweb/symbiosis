import type { NextPage } from "next";
import styles from "./table-row-token.module.css";

export type TableRowTokenType = {
  className?: string;
  tCK?: string;
  tokenName?: string;
  price?: string;
};

const TableRowToken: NextPage<TableRowTokenType> = ({
  className = "",
  tCK = "TCK",
  tokenName = "TokenName",
  price = "0000",
}) => {
  return (
    <div className={[styles.tablerowtoken, className].join(" ")}>
      <div className={styles.tokenContainer}>
        <div className={styles.iconContainer}>
          <img
            className={styles.tokenicon}
            loading="lazy"
            alt=""
            src="/tokenicon.svg"
          />
        </div>
        <div className={styles.tokenInfo}>
          <div className={styles.tokenname}>{tokenName}</div>
          <div className={styles.ticker}>{tCK}</div>
        </div>
      </div>
      <div className={styles.tokenValueContainer}>
        <div className={styles.tokenname}>$</div>
        <div className={styles.tokenname}>{price}</div>
      </div>
    </div>
  );
};

export default TableRowToken;
