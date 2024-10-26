import type { NextPage } from "next";
import styles from "./link-use.module.css";

export type LinkUseType = {
  className?: string;
  hasUsedYourLink?: string;
};

const LinkUse: NextPage<LinkUseType> = ({
  className = "",
  hasUsedYourLink,
}) => {
  return (
    <div className={[styles.linkuse, className].join(" ")}>
      <img
        className={styles.userpicIcon}
        loading="lazy"
        alt=""
        src="/userpic@2x.png"
      />
      <div className={styles.userProgression}>
        <div className={styles.rankChange}>
          <b className={styles.username}>UserName</b>
          <div className={styles.date}>Date</div>
        </div>
        <div className={styles.hasUsedYour}>{hasUsedYourLink}</div>
      </div>
    </div>
  );
};

export default LinkUse;
