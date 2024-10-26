import type { NextPage } from "next";
import { useState, useCallback } from "react";
import Modalfooter from "../components/modalfooter";
import PortalPopup from "../components/portal-popup";
import Menu from "../components/menu";
import LinkUse from "../components/link-use";
import CollectedFees from "../components/collected-fees";
import RankUp from "../components/rank-up";
import styles from "./notification-center.module.css";

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
            <Menu
                menuWidth="100vw"
                menuGap="unset"
                logoSymbiosis1IconMinHeight="unset"
                sYMBIOSISDisplay="unset"
                sYMBIOSISMinWidth="unset"
                buttonBellBorder="unset"
                buttonBellBackgroundColor="unset"
                buttonHomeBorder="unset"
                buttonHomeBackgroundColor="unset"
            />
            <div className={[styles.notificationcenter, className].join(" ")} style={{ paddingTop: '55px' }}>
                <section className={styles.notifications}>
                    <h1 className={styles.notificationCenter}>Notification Center</h1>
                    <div className={styles.userActivity}>
                        <LinkUse hasUsedYourLink="Has used your link" />
                        <LinkUse hasUsedYourLink="UserName his now ahead of you." />
                        <CollectedFees />
                        <RankUp />
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

export default NotificationCenter;
