import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./content.module.css";
import { useChain } from "@cosmos-kit/react";

export type ContentType = {
  className?: string;
};

const Content: NextPage<ContentType> = ({ className = "" }) => {
  const router = useRouter();

  const {
    // chain,
    status,
    // wallet,
    // username,
    // address,
    // message,
    // connect,
    openView,
  } = useChain('osmosis');

  const onSubContentContainerClick = useCallback(() => {
    router.push("/home");
  }, [router]);

  return (
    <div className={[styles.content, className].join(" ")}>
      <div className={styles.subContent} onClick={onSubContentContainerClick}>
        <img
          className={styles.logoSymbiosis1Icon}
          loading="lazy"
          alt=""
          src="/logosymbiosis-1.svg"
        />
        <div className={styles.symbiosisWrapper}>
          <a className={styles.symbiosis}>SYMBIOSIS</a>
        </div>
      </div>
      <div className={styles.btntext}>
        <b className={styles.refer} onClick={openView}>Refer</b>
      </div>
    </div>
  );
};

export default Content;
