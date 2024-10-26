import type { NextPage } from "next";
import { Button } from "@mui/material";
import styles from "./modalprofile.module.css";

export type ModalprofileType = {
  className?: string;
  onClose?: () => void;
};

const Modalprofile: NextPage<ModalprofileType> = ({
  className = "",
  onClose,
}) => {
  return (
    <div className={[styles.modalprofile, className].join(" ")}>
      <div className={styles.modalprofileChild} />
      <div className={styles.profileForm}>
        <a className={styles.editProfile}>Edit Profile</a>
        <div className={styles.submitprofilepictureParent}>
          <div className={styles.submitprofilepicture}>
            <img
              className={styles.addAPhotoIcon}
              loading="lazy"
              alt=""
              src="/add-a-photo.svg"
            />
          </div>
          <h2 className={styles.submitprofilename}>User Name</h2>
        </div>
        <div className={styles.bottomButtons}>
          <div className={styles.buttonback}>
            <div className={styles.back}>Back</div>
          </div>
          <Button
            className={styles.buttonsave}
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#f7f7f7",
              fontSize: "20",
              background: "#462adf",
              borderRadius: "8px",
              "&:hover": { background: "#462adf" },
            }}
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modalprofile;
