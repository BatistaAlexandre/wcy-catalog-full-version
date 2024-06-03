"use client";
import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import CustomTooltip from "./custom-tooltip";

const SpecifiedDomain = ({ height = 300 }) => {
  const { theme: config, setTheme: setConfig } = useThemeStore();
  const { theme: mode } = useTheme();
  const theme = themes.find((theme) => theme.name === config);
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <ResponsiveContainer height={height}>
      <LineChart height={height} data={data} layout="vertical">
        <CartesianGrid
          stroke={`hsl(${
            theme?.cssVars[
              mode === "dark" || mode === "system" ? "dark" : "light"
            ].chartGird
          })`}
          strokeDasharray="3 3"
          vertical={false}
        />
        <XAxis
          tick={{
            fill: mode === "dark" ? "#cbd5e1" : "#64748b",
            fontSize: "12px",
          }}
          tickLine={false}
          stroke={`hsl(${
            theme?.cssVars[mode === "dark" ? "dark" : "light"].chartGird
          })`}
          axisLine={false}
          type="number"
          domain={[0, "dataMax + 1000"]}
        />
        <YAxis
          tick={{
            fill: mode === "dark" ? "#cbd5e1" : "#64748b",
            fontSize: "12px",
          }}
          tickLine={false}
          stroke={`hsl(${
            theme?.cssVars[mode === "dark" ? "dark" : "light"].chartGird
          })`}
          dataKey="name"
          type="category"
        />
        <Tooltip content={CustomTooltip} />
        <Line
          type="monotone"
          dataKey="pv"
          stroke={`hsl(${
            theme?.cssVars[mode === "dark" ? "dark" : "light"].info
          })`}
          strokeDasharray="5 5"
          dot={{
            stroke: `hsl(${
              theme?.cssVars[mode === "dark" ? "dark" : "light"].info
            })`,
            strokeWidth: 2,
          }}
        />
        <Line
          type="monotone"
          dataKey="uv"
          stroke={`hsl(${
            theme?.cssVars[mode === "dark" ? "dark" : "light"].warning
          })`}
          strokeDasharray="3 4 5 2"
          dot={{
            stroke: `hsl(${
              theme?.cssVars[mode === "dark" ? "dark" : "light"].warning
            })`,
            strokeWidth: 2,
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SpecifiedDomain;
