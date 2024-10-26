import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./btnicon.module.css";

export type BtniconType = {
  className?: string;
  contentCopy?: string;

  /** Style props */
  contentCopyIconOverflow?: CSSProperties["overflow"];
};

const Btnicon: NextPage<BtniconType> = ({
  className = "",
  contentCopy,
  contentCopyIconOverflow,
}) => {
  const contentCopyIconStyle: CSSProperties = useMemo(() => {
    return {
      overflow: contentCopyIconOverflow,
    };
  }, [contentCopyIconOverflow]);

  return (
    <button className={[styles.buttoncopy, className].join(" ")}>
      <img
        className={styles.contentCopyIcon}
        alt=""
        src={contentCopy}
        style={contentCopyIconStyle}
      />
    </button>
  );
};

export default Btnicon;
