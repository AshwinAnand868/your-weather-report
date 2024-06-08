'use client';

import { AreaChart, Card, Title } from "@tremor/react";

type RainChartProps = {
    result: Root
}

function RainChart({result}: RainChartProps) {
    const hourly = result.hourly.time
                    .slice(0, 24)
                    .map(time => new Date(time).toLocaleString("en-US", {
                        hour: "numeric",
                        hour12: false,
                    }));
    
    const data = hourly.map((hour, i) => ({
        time: Number(hour),
        "Rain (%)": result.hourly.precipitation_probability[i],
    }));

    const dataFormatter = (num: number) => {
      return  `${num.toString()} %`
    }

  return (
    <Card>
        <Title>Chances of Rain</Title>
        <AreaChart
            className="mt-6"
            data={data}
            showLegend
            index="time"
            categories={["Rain (%)"]}
            colors={["blue"]}
            minValue={0}
            maxValue={100}
            valueFormatter={dataFormatter}
            yAxisWidth={60}
            xAxisLabel="24 Hours (Time)"
            showAnimation={true}
        />
    </Card>
  )
}

export default RainChart;