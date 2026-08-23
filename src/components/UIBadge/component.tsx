import React from "react";
import type { UIBadgeProps } from "./types";
import styles from "./styles.module.scss";

export const UIBadge: React.FC<UIBadgeProps> = ({
  variant,
  bgColor,
  children,
  color,
  size,
  className,
}) => {
  const classes = [
    styles["ui-badge"],
    styles[`ui-badge-${bgColor}`],
    styles[`ui-badge-${color}`],
    styles[`ui-badge-${size}`],
    styles[`ui-badge-${variant}`],


    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <span className={classes}>{children}</span>;
};
