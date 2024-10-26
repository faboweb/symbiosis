import type { NextPage } from "next";
import { useState, useCallback } from "react";
import Modalfooter from "../components/modalfooter";
import PortalPopup from "../components/portal-popup";
import Menu from "../components/menu";
import ProfileInfo from "../components/profile-info";
import Btnicon from "../components/btnicon";
import styles from "./index.module.css";

const Home: NextPage = () => {
  const [isModalfooterOpen, setModalfooterOpen] = useState(false);

  const openModalfooter = useCallback(() => {
    setModalfooterOpen(true);
  }, []);

  const closeModalfooter = useCallback(() => {
    setModalfooterOpen(false);
  }, []);

  return (
    <>
      <div className={styles.home}>
        <div className={styles.topSpacer} />
        <Menu
          menuWidth="393px"
          menuGap="unset"
          logoSymbiosis1IconMinHeight="unset"
          sYMBIOSISDisplay="unset"
          sYMBIOSISMinWidth="unset"
          buttonBellBorder="unset"
          buttonBellBackgroundColor="unset"
          buttonHomeBorder="unset"
          buttonHomeBackgroundColor="unset"
        />
        <section className={styles.leftPanelParent}>
          <div className={styles.leftPanel} />
          <div className={styles.profilePanel}>
            <ProfileInfo />
            <div className={styles.shareYourCodeParent}>
              <div className={styles.shareYourCode}>Share your code</div>
              <div className={styles.codeDisplay}>
                <a className={styles.referralcode}>4a2f-6fg5</a>
                <Btnicon contentCopy="/content-copy.svg" />
              </div>
            </div>
            <img
              className={styles.referralqrIcon}
              loading="lazy"
              alt=""
              src="/referralqr@2x.png"
            />
            <div className={styles.totalCollectedParent}>
              <b className={styles.totalCollected}>Total Collected</b>
              <div className={styles.feesAmount}>
                <div className={styles.shareYourCode}>$3,520</div>
                <div className={styles.inFees}>in fees</div>
              </div>
            </div>
            <div className={styles.tradeNowParent}>
              <b className={styles.totalCollected}>Trade Now</b>
              <a href="https://app.osmosis.zone">
                <div className={styles.buttonosmosis}>
                  <img
                    className={styles.osmosisIconbrandmarkWhite1}
                    loading="lazy"
                    alt=""
                    src="/osmosis-iconbrandmark-white-1.svg"
                  />
                </div>
              </a>
            </div>
          </div>
        </section>
      </div>
      {isModalfooterOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeModalfooter}
        >
          <Modalfooter onClose={closeModalfooter} />
        </PortalPopup>
      )}
    </>
  );
};

export default Home;
