import React from "react";
import type {
  UITextListCheckProps,
  ItemData,
  UITextListCircleProps,
  UITextListNormalProps,
  UITextListNestedProps,
  NestedItem,
} from "./types";

import styles from "./styles.module.scss";


export const Normal: React.FC<UITextListNormalProps> = ({
  variant,
  checkItems,
  className,
}) => {
  const classes = [
    styles["ui-textList"],
    styles[`ui-textList-${variant}`],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <ul className={`${styles.checkList} ${classes}`}>
      {checkItems.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};


export const Check: React.FC<UITextListCheckProps> = ({
  variant,
  checkItems,
  className,
  size,
}) => {
  const classes = [
    styles["ui-textList"],
    styles[`ui-textList-${variant}`],
    styles[`ui-textList-${size}`],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <ul className={`${styles.checkList} ${classes}`}>
      {checkItems.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};


export const Nested: React.FC<UITextListNestedProps> = ({
  variant,
  nestedItems,
  className,
  color,
  align,
  style,
  ...rest
}) => {
  const classes = [
    styles["ui-nested"],
    styles[`ui-nested-${variant}`],
    styles[`ui-nested-${align}`],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const renderList = (
    items: NestedItem[],
    isFirstLevel = true
  ) => {
    const colorClass = isFirstLevel
      ? styles[`ui-nested-${color}`]
      : styles[`ui-nested-${color}`];

    return (
      <ul
        className={[
          isFirstLevel
            ? styles.firstLevelList
            : styles.nestedList,
          colorClass,
          classes,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {items.map((item) => (
          <li
            key={item.id}
            className={
              isFirstLevel
                ? styles.firstLevelItem
                : styles.nestedItem
            }
          >
            <span>{item.name}</span>

            {item.children &&
              renderList(item.children, false)}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div
      className={styles.testDiv}
      style={style}
      {...rest}
    >
      {renderList(nestedItems)}
    </div>
  );
};


function ItemComponent(props: { item: ItemData }) {
  return (
    <li>
      <span>{props.item.number}</span>

      <div>
        <h3>{props.item.title}</h3>
        <p>{props.item.subText}</p>
      </div>
    </li>
  );
}


export const Circle: React.FC<UITextListCircleProps> = ({
  variant,
  ...props
}) => {
  const classes = [
    styles["ui-textList"],
    styles[`ui-textList-${variant}`],
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <ul
      {...props}
      className={`${styles.circleList} ${classes}`}
    >
      {props.data.map((item) => (
        <ItemComponent
          key={item.id}
          item={item}
        />
      ))}
    </ul>
  );
};


const UITextList = {
  Normal,
  Nested,
  Check,
  Circle,
};

UITextList.Normal.displayName = "UITextList.Normal";
UITextList.Nested.displayName = "UITextList.Nested";
UITextList.Check.displayName = "UITextList.Check";
UITextList.Circle.displayName = "UITextList.Circle";

export { UITextList };