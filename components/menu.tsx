import type { NextPage } from "next";
import { useState, useMemo, type CSSProperties, useCallback } from "react";
import Modalfooter from "./modalfooter";
import PortalPopup from "./portal-popup";
import { useRouter } from "next/router";
import styles from "./menu.module.css";

export type MenuType = {
  className?: string;

  /** Style props */
  menuWidth?: CSSProperties["width"];
  menuGap?: CSSProperties["gap"];
  logoSymbiosis1IconMinHeight?: CSSProperties["minHeight"];
  sYMBIOSISDisplay?: CSSProperties["display"];
  sYMBIOSISMinWidth?: CSSProperties["minWidth"];
  buttonBellBorder?: CSSProperties["border"];
  buttonBellBackgroundColor?: CSSProperties["backgroundColor"];
  buttonHomeBorder?: CSSProperties["border"];
  buttonHomeBackgroundColor?: CSSProperties["backgroundColor"];
};

const Menu: NextPage<MenuType> = ({
  className = "",
  menuWidth,
  menuGap,
  logoSymbiosis1IconMinHeight,
  sYMBIOSISDisplay,
  sYMBIOSISMinWidth,
  buttonBellBorder,
  buttonBellBackgroundColor,
  buttonHomeBorder,
  buttonHomeBackgroundColor,
}) => {
  const [isModalfooterOpen, setModalfooterOpen] = useState(false);
  const menuStyle: CSSProperties = useMemo(() => {
    return {
      width: menuWidth,
      gap: menuGap,
    };
  }, [menuWidth, menuGap]);

  const logoSymbiosis1IconStyle: CSSProperties = useMemo(() => {
    return {
      minHeight: logoSymbiosis1IconMinHeight,
    };
  }, [logoSymbiosis1IconMinHeight]);

  const sYMBIOSISStyle: CSSProperties = useMemo(() => {
    return {
      display: sYMBIOSISDisplay,
      minWidth: sYMBIOSISMinWidth,
    };
  }, [sYMBIOSISDisplay, sYMBIOSISMinWidth]);

  const buttonBellStyle: CSSProperties = useMemo(() => {
    return {
      border: buttonBellBorder,
      backgroundColor: buttonBellBackgroundColor,
    };
  }, [buttonBellBorder, buttonBellBackgroundColor]);

  const buttonHomeStyle: CSSProperties = useMemo(() => {
    return {
      border: buttonHomeBorder,
      backgroundColor: buttonHomeBackgroundColor,
    };
  }, [buttonHomeBorder, buttonHomeBackgroundColor]);

  const router = useRouter();

  const openModalfooter = useCallback(() => {
    setModalfooterOpen(true);
  }, []);

  const closeModalfooter = useCallback(() => {
    setModalfooterOpen(false);
  }, []);

  const onLogoContainerClick = useCallback(() => {
    router.push("/home");
  }, [router]);

  const onButtonBellClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <>
      <header className={[styles.menu, className].join(" ")} style={menuStyle}>
        <div className={styles.logo} onClick={onLogoContainerClick}>
          <img
            className={styles.logoSymbiosis1Icon}
            loading="lazy"
            alt=""
            src="/logosymbiosis-1.svg"
            style={logoSymbiosis1IconStyle}
          />
          <a className={styles.symbiosis} style={sYMBIOSISStyle}>
            SYMBIOSIS
          </a>
        </div>
        <div className={styles.navigation}>
          <button
            className={styles.buttonbell}
            onClick={onButtonBellClick}
            style={buttonBellStyle}
          >
            <img
              className={styles.notificationsIcon}
              loading="lazy"
              alt=""
              src="/notifications.svg"
            />
          </button>
          <button
            className={styles.buttonbell}
            onClick={openModalfooter}
            style={buttonHomeStyle}
          >
            <img
              className={styles.notificationsIcon}
              loading="lazy"
              alt=""
              src="/menu.svg"
            />
          </button>
        </div>
      </header>
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

export default Menu;
