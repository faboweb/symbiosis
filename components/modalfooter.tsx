import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Btnmenu from "./btnmenu";
import styles from "./modalfooter.module.css";

export type ModalfooterType = {
  className?: string;
  onClose?: () => void;
};

const Modalfooter: NextPage<ModalfooterType> = ({
  className = "",
  onClose,
}) => {
  const router = useRouter();

  const onButtonHomeContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onButtonEarningsContainerClick = useCallback(() => {
    router.push("/my-earnings");
  }, [router]);

  const onButtonLeaderboardContainerClick = useCallback(() => {
    router.push("/leaderboard");
  }, [router]);

  const onButtonDashboardContainerClick = useCallback(() => {
    router.push("/dashboard");
  }, [router]);

  return (
    <div className={[styles.modalfooter, className].join(" ")}>
      <div className={styles.main} />
      <section className={styles.content}>
        <div className={styles.homeButtonContainerParent}>
          <div className={styles.homeButtonContainer}>
            <Btnmenu
              text="Home"
              onButtonHomeContainerClick={onButtonHomeContainerClick}
              home="/home.svg"
            />
          </div>
          <div className={styles.navigationButtonsParent}>
            <div className={styles.navigationButtons}>
              <Btnmenu
                text="My Earnings"
                onButtonHomeContainerClick={onButtonEarningsContainerClick}
                buttonHomeFlex="unset"
                home="/poker-chip.svg"
                textTextDecoration="unset"
              />
              <Btnmenu
                text="Leaderboard"
                onButtonHomeContainerClick={onButtonLeaderboardContainerClick}
                buttonHomeFlex="unset"
                home="/trophy.svg"
                textTextDecoration="unset"
              />
              <Btnmenu
                text="Dashboard"
                onButtonHomeContainerClick={onButtonDashboardContainerClick}
                buttonHomeFlex="unset"
                home="/dashboard.svg"
                textTextDecoration="unset"
              />
            </div>
            <div className={styles.tradeHeadingParent}>
              <div className={styles.tradeHeading} />
              <h3 className={styles.tradeYourEarnings}>Trade your earnings!</h3>
              <div className={styles.tradeOptions}>
                <button className={styles.buttonosmosis}>
                  <img
                    className={styles.osmosisIconbrandmarkWhite1}
                    alt=""
                    src="/osmosis-iconbrandmark-white-11.svg"
                  />
                </button>
                <img className={styles.doggo1Icon} alt="" src="/doggo-1.svg" />
              </div>
            </div>
          </div>
        </div>
        <button className={styles.buttonlogout}>
          <img className={styles.doorOpenIcon} alt="" src="/door-open.svg" />
          <a className={styles.logOut}>Log Out</a>
        </button>
      </section>
    </div>
  );
};

export default Modalfooter;
