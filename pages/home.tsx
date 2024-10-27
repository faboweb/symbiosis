import type { NextPage } from "next";
import { useState, useCallback } from "react";
import Modalfooter from "../components/modalfooter";
import PortalPopup from "../components/portal-popup";
import Menu from "../components/menu";
import ProfileInfo from "../components/profile-info";
import Btnicon from "../components/btnicon";
import styles from "./index.module.css";
import { useChain } from "@cosmos-kit/react";
import { QRCodeSVG } from 'qrcode.react';
import crypto from 'crypto';
import { WalletStatus } from "cosmos-kit";
import { useRouter } from "next/router";
import { isAffiliated } from "@/utils/cosmwasm";


const Home: NextPage = () => {
  const {
    status,
    address
  } = useChain('osmosis');

  const router = useRouter();

  const [isModalfooterOpen, setModalfooterOpen] = useState(false);

  if (status === WalletStatus.Disconnected) {
    router.push("/");
    return
  }

  if (status === WalletStatus.Connected && address) {
    isAffiliated(address).then((affiliated) => {
      if (!affiliated) {
        // redirect to home
        router.push("/");
      }});
  }

  // we shorten the address to 8 chars to not be too obvious
  const code = address ? crypto.createHash('sha256')
    .update(address)
    .digest('hex')
    .slice(0, 8) : null;
  // const url = window.location.origin + "/invite?code=" + code
  const url = window.location.origin + "/invite?code=" + address // TODO add code lookup to system

  const openModalfooter = useCallback(() => {
    setModalfooterOpen(true);
  }, []);

  const closeModalfooter = useCallback(() => {
    setModalfooterOpen(false);
  }, []);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
      .then(() => alert("Text copied to clipboard!"))
      .catch((err) => alert("Failed to copy text"));
  };

  return (
    <>
      <div className={styles.home}>
        <div className={styles.topSpacer} />
        <Menu
          // menuWidth="393px"
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
              <div className={styles.codeDisplay} onClick={() => copyToClipboard(code)}>
                <a className={styles.referralcode}>{code || "******"}</a>
                <Btnicon contentCopy="/content-copy.svg" />
              </div>
            </div>
            {
              !code ? <img
                className={styles.referralqrIcon}
                loading="lazy"
                alt=""
                src="/referralqr@2x.png"
              /> : <QRCodeSVG className={styles.referralqrIcon} value={url} onClick={() => copyToClipboard(url)}/>
            }
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
