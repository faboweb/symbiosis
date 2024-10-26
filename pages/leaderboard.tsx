import type { NextPage } from "next";
import { useState, useCallback } from "react";
import Modalfooter from "../components/modalfooter";
import PortalPopup from "../components/portal-popup";
import Menu from "../components/menu";
import FrameComponent1 from "../components/frame-component1";
import UserProgress from "../components/user-progress";
import styles from "./leaderboard.module.css";

const Leaderboard: NextPage = () => {
  const [isModalfooterOpen, setModalfooterOpen] = useState(false);

  const openModalfooter = useCallback(() => {
    setModalfooterOpen(true);
  }, []);

  const closeModalfooter = useCallback(() => {
    setModalfooterOpen(false);
  }, []);

  return (
    <>
      <div className={styles.leaderboard}>
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
        <section className={styles.content}>
          <FrameComponent1 />
          <UserProgress userName="UserName" invites="000" volume="0000" />
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

export default Leaderboard;
