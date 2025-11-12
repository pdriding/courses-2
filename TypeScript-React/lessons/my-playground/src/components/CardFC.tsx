import React, { FC, ReactNode } from "react";

// 1. Same props as Card
// 2. Use FC<PropsType> instead of function

type CardProps = {
  title: string;
  children?: ReactNode;
};

const CardFC: FC<CardProps> = (/* props here */) => {
  return (
    <div>
      {/* h2 for title */}
      {/* section for children */}
    </div>
  );
};

export default CardFC;
