import React from "react";
import styles from "@/styles/ThemeSwitch.module.scss"
import { useTheme } from "next-themes";
const ThemeSwitch = () => {
	const { theme, setTheme } = useTheme();
  return (
    <div className={styles.dark_mode}>
      <input
        className={styles.dark_mode_input}
        type="checkbox"
        defaultChecked={theme === "dark"}
        id="darkmode-toggle"
      />
      <label
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className={styles.dark_mode_label}
        htmlFor="darkmode-toggle"
      ></label>
    </div>
  );
};

export default ThemeSwitch;
