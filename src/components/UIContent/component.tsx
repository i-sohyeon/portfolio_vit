import React from "react";
import type { UIContentProps } from "./types";
import styles from "./styles.module.scss";

export const UIContent: React.FC<UIContentProps> = ({ 
  bgColor,
  bgPattern,
  as: Component = "section",
  className,
  children,
  ...rest
}) => {
  const classes = [
    styles["ui-content"],
    bgColor && styles[`ui-content-${bgColor}`],
    bgPattern && styles[`ui-content-${bgPattern}`],
    className
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Component className={classes} {...rest}>
      {children}
    </Component>
  );
};