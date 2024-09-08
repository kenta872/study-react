import React from "react";

/**
 * propsにまとめて入れる方法
 * @param props
 * @returns
 */
const PropsSampleChildA = (props: any) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.message}</p>
    </div>
  );
};

/**
 * propsの型定義
 */
type Props = {
  title?: string;
  message?: string;
  fn: (name: string) => string;
};

/**
 * propsを個別で定義
 * @param param0
 * @returns
 */
const PropsSampleChildB: React.FC<Props> = ({
  title = "defaultTitle",
  message = "defaultMessaage",
  fn,
}) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{message}</p>
      <p>{fn("hogeUser")}</p>
    </div>
  );
};

export { PropsSampleChildA, PropsSampleChildB };
