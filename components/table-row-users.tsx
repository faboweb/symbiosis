import type { NextPage } from "next";
import styles from "./table-row-users.module.css";

export type TableRowUsersType = {
  className?: string;
  userName?: string;
  invites?: string;
  volume?: string;
};

const TableRowUsers: NextPage<TableRowUsersType> = ({
  className = "",
  userName = "UserName",
  invites = "000",
  volume = "0000",
}) => {
  return (
    <div className={[styles.tablerowusers, className].join(" ")}>
      <div className={styles.leadername}>{userName}</div>
      <div className={styles.userinvitesWrapper}>
        <div className={styles.userinvites}>{invites}</div>
      </div>
      <div className={styles.userFeesParent}>
        <div className={styles.userFees}>$</div>
        <div className={styles.userFees}>{volume}</div>
      </div>
    </div>
  );
};

export default TableRowUsers;
