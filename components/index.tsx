import type { NextPage } from "next";
import { useState, useCallback } from "react";
import Modalfooter from "./modalfooter";
import PortalPopup from "./portal-popup";
import Menu from "./menu";
import LinkUse from "./link-use";
import CollectedFees from "./collected-fees";
import RankUp from "./rank-up";
import styles from "./index.module.css";

export type NotificationCenterType = {
  className?: string;
};

const NotificationCenter: NextPage<NotificationCenterType> = ({
  className = "",
}) => {
  const [isModalfooterOpen, setModalfooterOpen] = useState(false);

  const openModalfooter = useCallback(() => {
    setModalfooterOpen(true);
  }, []);

  const closeModalfooter = useCallback(() => {
    setModalfooterOpen(false);
  }, []);

  return (
    <>
      <div className={[styles.notificationcenter, className].join(" ")}>
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
        <section className={styles.notifications}>
          <h1 className={styles.notificationCenter}>Notification Center</h1>
          <div className={styles.userActivity}>
            <LinkUse hasUsedYourLink="Has used your link" />
            <LinkUse hasUsedYourLink="UserName his now ahead of you." />
            <CollectedFees />
            <RankUp />
          </div>
        </section>
        <div className={styles.topSpacer} />
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

export default NotificationCenter;
