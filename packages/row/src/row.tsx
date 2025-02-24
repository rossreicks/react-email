import * as React from "react";

type RootProps = React.ComponentPropsWithoutRef<"table">;

export type RowProps = React.PropsWithChildren<RootProps>;

export const Row: React.FC<Readonly<RowProps>> = ({
  children,
  style,
  ...props
}) => {
  return (
    <table
      align="center"
      width="100%"
      {...props}
      border={0}
      cellPadding="0"
      cellSpacing="0"
      role="presentation"
      style={style}
    >
      <tbody style={{ width: "100%" }}>
        <tr style={{ width: "100%" }}>{children}</tr>
      </tbody>
    </table>
  );
};
