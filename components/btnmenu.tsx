import type { NextPage } from "next";
import { useMemo, type CSSProperties, useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./btnmenu.module.css";

export type BtnmenuType = {
  className?: string;
  text?: string;
  home?: string;

  /** Style props */
  buttonHomeFlex?: CSSProperties["flex"];
  textTextDecoration?: CSSProperties["textDecoration"];

  /** Action props */
  onButtonHomeContainerClick?: () => void;
};

const Btnmenu: NextPage<BtnmenuType> = ({
  className = "",
  text = "Home",
  onButtonHomeContainerClick,
  buttonHomeFlex,
  home,
  textTextDecoration,
}) => {
  const buttonHome1Style: CSSProperties = useMemo(() => {
    return {
      flex: buttonHomeFlex,
    };
  }, [buttonHomeFlex]);

  const textStyle: CSSProperties = useMemo(() => {
    return {
      textDecoration: textTextDecoration,
    };
  }, [textTextDecoration]);

  const router = useRouter();

  const onButtonHomeContainerClick1 = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div
      className={[styles.buttonhome, className].join(" ")}
      onClick={onButtonHomeContainerClick}
      style={buttonHome1Style}
    >
      <img className={styles.homeIcon} loading="lazy" alt="" src={home} />
      <a className={styles.text} style={textStyle}>
        {text}
      </a>
    </div>
  );
};

export default Btnmenu;
