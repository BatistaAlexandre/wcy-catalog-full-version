"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";

const DistributedTreeMap = ({ height = 300 }) => {

    const { theme: config, setTheme: setConfig } = useThemeStore();
    const { theme: mode } = useTheme();
    const theme = themes.find((theme) => theme.name === config);

    const series = [
        {
            data: [
                {
                    x: 'New Delhi',
                    y: 218
                },
                {
                    x: 'Kolkata',
                    y: 149
                },
                {
                    x: 'Mumbai',
                    y: 184
                },
                {
                    x: 'Ahmedabad',
                    y: 55
                },
                {
                    x: 'Bangaluru',
                    y: 84
                },
                {
                    x: 'Pune',
                    y: 31
                },
                {
                    x: 'Chennai',
                    y: 70
                },
                {
                    x: 'Jaipur',
                    y: 30
                },
                {
                    x: 'Surat',
                    y: 44
                },
                {
                    x: 'Hyderabad',
                    y: 68
                },
                {
                    x: 'Lucknow',
                    y: 28
                },
                {
                    x: 'Indore',
                    y: 19
                },
                {
                    x: 'Kanpur',
                    y: 29
                }
            ]
        }
    ];
    const options = {
        chart: {
            type: 'treemap',
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: true,
        },
        // colors: [
        //     `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].success})`,
        // ],
        colors: [
            '#3B93A5',
            '#F7B844',
            '#ADD8C7',
            '#EC3C65',
            '#CDD7B6',
            '#C1F666',
            '#D43F97',
            '#1E5D8C',
            '#421243',
            '#7F94B0',
            '#EF6537',
            '#C0ADDB'
        ],
        padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
        },
        plotOptions: {
            treemap: {
                distributed: true,
                enableShades: false
            }
        }
    };
    return (
        <>
            <Chart
                options={options}
                series={series}
                type="treemap"
                height={height}
                width={"100%"}
            />
        </>
    );
};

export default DistributedTreeMap;
