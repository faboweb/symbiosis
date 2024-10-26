import type { NextPage } from "next";
import styles from "./inviter-profile-pic.module.css";

export type InviterProfilePicType = {
  className?: string;
};

const InviterProfilePic: NextPage<InviterProfilePicType> = ({
  className = "",
}) => {
  return (
    <img
      className={[styles.inviterprofilepicIcon, className].join(" ")}
      loading="lazy"
      alt=""
      src="/inviterprofilepic@2x.png"
    />
  );
};

export default InviterProfilePic;
