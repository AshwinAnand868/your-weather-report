'use client';

import { AreaChart, Card, Title } from "@tremor/react";

type TempChartProps = {
    result: Root
}

function TempChart({result}: TempChartProps) {


    const hourly = result.hourly.time
                    .slice(0, 24)
                    .map(time => new Date(time).toLocaleString("en-US", {
                        hour: "numeric",
                        hour12: false,
                    }));
    
    const data = hourly.map((hour, i) => ({
        time: Number(hour),
        "UV Index": result.hourly.uv_index[i],
        "Temperature (°C)": result.hourly.temperature_2m[i],
    }));

    const dataFormatter = (num: number) => {
      return  num.toString()
    }

  return (
    <Card>
        <Title>Temperature & UV Index</Title>
        <AreaChart
            className="mt-6 h-72 text-[15px]"
            data={data}
            showLegend
            index="time"
            categories={["Temperature (°C)", "UV Index"]}
            colors={["yellow", "rose"]}
            minValue={0}
            valueFormatter={dataFormatter}
            yAxisWidth={40}
            xAxisLabel="24 Hours (Time)"
        />
    </Card>
  )
}

export default TempChart