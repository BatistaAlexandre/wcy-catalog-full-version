"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";
import {
  getGridConfig,
  getYAxisConfig,
  getLabel,
} from "@/lib/appex-chart-options";

const StackedColumn2 = ({ height = 300 }) => {
  const { theme: config, setTheme: setConfig, isRtl } = useThemeStore();
  const { theme: mode } = useTheme();

  const theme = themes.find((theme) => theme.name === config);

  const series = [
    {
      name: "PRODUCT A",
      data: [44, 55, 41, 67, 22, 43],
    },
    {
      name: "PRODUCT B",
      data: [13, 23, 20, 8, 13, 27],
    },
    {
      name: "PRODUCT C",
      data: [11, 17, 15, 15, 21, 14],
    },
  ];

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
      stacked: true,
      stackType: "100%",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    colors: [
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].info})`,
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].warning})`,
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].primary})`,
    ],
    tooltip: {
      theme: mode === "dark" ? "dark" : "light",
    },
    grid: getGridConfig(
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartGird})`
    ),
    yaxis: getYAxisConfig(
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartLabel})`
    ),
    plotOptions: {
      bar: {
        columnWidth: "45%",
        borderRadius: 2,
        dataLabels: {
          position: "top",
        },
      },
    },
    xaxis: {
      categories: [
        "2011 Q1",
        "2012 Q2",
        "2013 Q3",
        "2014 Q4",
        "2015 Q5",
        "2016 Q6",
      ],
      labels: getLabel(
        `hsl(${theme?.cssVars[
          mode === "dark" || mode === "system" ? "dark" : "light"
        ].chartLabel
        })`
      ),
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },
    legend: {
      labels: {
        colors: `hsl(${theme?.cssVars[
            mode === "dark" || mode === "system" ? "dark" : "light"
          ].chartLabel
          })`,
      },
      itemMargin: {
        horizontal: 5,
        vertical: 5,
      },
      markers: {
        width: 10,
        height: 10,
        radius: 10,
        offsetX: isRtl ? 5 : -5
      }
    },
  };
  return (
    <>
      <Chart
        options={options}
        series={series}
        type="bar"
        height={height}
        width={"100%"}
      />
    </>
  );
};

export default StackedColumn2;
