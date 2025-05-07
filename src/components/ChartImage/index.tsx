import React, { PropsWithChildren } from "react";

type CustomScatterPointProps = {
  x: number;
  y: number;
  datum: any;
};

export const ChartImage = ({
  x,
  y,
  datum,
}: PropsWithChildren<CustomScatterPointProps>) => {
  return (
    <image
      href={datum.image}
      x={x - 10} // Adjust the x-position if needed
      y={y - 30} // Adjust the y-position if needed
      width={20} // Set the width of the image
      height={20} // Set the height of the image
    />
  );
};
