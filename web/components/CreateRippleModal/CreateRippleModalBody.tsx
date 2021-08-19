import React from "react";
import { useThemeContext } from "~/hoc/theme/ThemeContext";
import styles from "./CreateRippleModal.module.css";

export const CreateRippleModalBody = () => {
  const { theme } = useThemeContext();

  return (
    <div className="w-full flex items-start gap-4">
      <img
        src="https://avatars.githubusercontent.com/u/67153585?v=4"
        alt=""
        className="h-12 w-12 rounded-full"
      />
      <div
        className={`w-full h-40 pt-3 outline-none ${styles.newRippleContentBox}`}
        placeholder="What's up, fullstackslayer"
        contentEditable
      ></div>
    </div>
  );
};
