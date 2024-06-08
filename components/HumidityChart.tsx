'use client';

import { AreaChart, Card, Title } from "@tremor/react";

type HumidityChartProps = {
    result: Root
}

function HumidityChart({result}: HumidityChartProps) {
    const hourly = result.hourly.time
                    .slice(0, 24)
                    .map(time => new Date(time).toLocaleString("en-US", {
                        hour: "numeric",
                        hour12: false,
                    }));
    
    const data = hourly.map((hour, i) => ({
        time: Number(hour),
        "Humidity (%)": result.hourly.relative_humidity_2m[i],
    }));

    const dataFormatter = (num: number) => {
      return  `${num.toString()} %`
    }

  return (
    <Card>
        <Title>Humidity Levels</Title>
        <AreaChart
            className="mt-6"
            data={data}
            showLegend
            index="time"
            categories={["Humidity (%)"]}
            colors={["teal"]}
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

export default HumidityChart;