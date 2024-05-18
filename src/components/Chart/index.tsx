import React, { useEffect, useState, useCallback } from "react";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  BarProps,
  VictoryLabel,
} from "victory";
import { ChartDataPoint } from "global";

import { chartDataType, chartDataArrayType } from "./types";

export const Chart: React.FC<{ data: any }> = ({ data }) => {
  console.log(`data: ${JSON.stringify(data)}`);
  // const barColors: string[] = ["#ff0000", "#00ff00", "#0000ff", "orange"];
  const [barColors, setBarColors] = useState([]);

  const handleBarColors = (chartData: chartDataArrayType) => {
    if (chartData.length > 0) {
      const barColorArray: any = chartData.reduce(
        (acc: string[], currValue, currIndex) => {
          acc.push(currValue.fill);
          return acc;
        },
        []
      );
      setBarColors(barColorArray);
    }
  };

  const getBarColor = (index: number) => {
    return barColors[index % barColors.length];
  };

  useEffect(() => {
    handleBarColors(data);
  }, [data]);

  return (
    <VictoryChart theme={VictoryTheme.material} domainPadding={40} width={800}>
      <VictoryAxis
        tickValues={[1, 2, 3, 4, 5]}
        tickFormat={["React Native", "AWS", "Shopify", "React", "Node.JS"]}
        style={{
          grid: {
            stroke: "none",
          },
        }}
      />
      <VictoryAxis
        dependentAxis
        style={{
          grid: {
            stroke: "none",
          },
        }}
      />
      <VictoryBar
        data={data}
        x="quarter"
        y={(d) => d.visitors / 1000}
        style={{
          data: {
            fill: ({ datum }: BarProps) => getBarColor(datum.quarter - 1),
          },
        }}
        animate={{
          duration: 2000,
          onLoad: { duration: 1000 },
        }}
      />
      <VictoryLabel
        x={0}
        y={30}
        text="Visitors in 1,000s"
        style={{
          fill: "#fff",
        }}
      />
    </VictoryChart>
  );
};
