"use client"

import {
    Area,
    AreaChart,
    CartesianGrid,
    XAxis,
    YAxis
} from "recharts"
import {
    ChartConfig,
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent
} from "./ui/chart"

import { TrendingUp } from "lucide-react";

const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
]

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "var(--chart-2)",
    },
    mobile: {
        label: "Mobile",
        color: "var(--chart-1)",
    },
} satisfies ChartConfig

const AppAreaChart = () => {
    return (
        <div>
            <h1 className="text-lg font-medium mb-2">
                Area Chart - Total Visitors
            </h1>
            <p className="text-muted-foreground leading-none mb-8">
                Showing total visitors for the last 6 months
            </p>

            <ChartContainer
                config={chartConfig}
                className="min-h-[300px] w-full"
            >
                <AreaChart
                    accessibilityLayer
                    data={chartData}
                    margin={{
                        left: 12,
                        right: 12,
                    }}
                >

                    <CartesianGrid vertical={false} />

                    <XAxis
                        dataKey="month"
                        tickLine={false}
                        axisLine={false}
                        tickMargin={8}
                        tickFormatter={(value) => value.slice(0, 3)}
                    />

                    <YAxis
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                    />

                    <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent />}
                    />

                    <ChartLegend
                        content={<ChartLegendContent />} className="mt-4"
                    />

                    <defs>
                        <linearGradient
                            id="fillDesktop"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                        >
                            <stop
                                offset="5%"
                                stopColor="var(--color-desktop)"
                                stopOpacity={0.8}
                            />

                            <stop
                                offset="95%"
                                stopColor="var(--color-desktop)"
                                stopOpacity={0.1}
                            />
                        </linearGradient>

                        <linearGradient
                            id="fillMobile"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                        >
                            <stop
                                offset="5%"
                                stopColor="var(--color-mobile)"
                                stopOpacity={0.8}
                            />

                            <stop
                                offset="95%"
                                stopColor="var(--color-mobile)"
                                stopOpacity={0.1}
                            />
                        </linearGradient>
                    </defs>

                    <Area
                        dataKey="mobile"
                        type="natural"
                        fill="url(#fillMobile)"
                        fillOpacity={0.4}
                        stroke="var(--color-mobile)"
                        stackId="a"
                    />

                    <Area
                        dataKey="desktop"
                        type="natural"
                        fill="url(#fillDesktop)"
                        fillOpacity={0.4}
                        stroke="var(--color-desktop)"
                        stackId="a"
                    />
                </AreaChart>
            </ChartContainer>

            <div className="mt-8 flex flex-col gap-2">
                <div className="flex items-center gap-2 leading-none font-medium">
                    Trending up by 5.2% this month
                    <TrendingUp className="h-4 w-4 text-green-500" />
                </div>

                <div className="text-muted-foreground leading-none">
                    January - June 2025
                </div>
            </div>
        </div>
    )
}

export default AppAreaChart;