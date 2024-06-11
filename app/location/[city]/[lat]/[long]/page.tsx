import { getClient } from "@/apollo-client";
import CalloutCard from "@/components/CalloutCard";
import HumidityChart from "@/components/HumidityChart";
import InformationPanel from "@/components/InformationPanel";
import RainChart from "@/components/RainChart";
import StatCard from "@/components/StatCard";
import TempChart from "@/components/TempChart";
import fetchWeatherQuery from "@/graphql/queries/fetchWeatherQueries";
import cleanData from "@/lib/cleanData";
import getBasePath from "@/lib/getBasePath";

export const revalidate = 60; // rebuilds the page after every 60 seconds to avoid providing static data

interface Props {
  params: {
    city: string;
    lat: string;
    long: string;
  };
}

const WeatherPage = async ({ params }: Props) => {
  const { city, lat, long } = params;
  const client = getClient();

  const { data } = await client.query({
    query: fetchWeatherQuery,
    variables: {
      current_weather: "true",
      longitude: long,
      latitude: lat,
      timezone: "GMT",
    },
  });

  const result: Root = data.fetchWeatherDataField;

  const dataToSend = cleanData(result, city);

  const res = await fetch(`${getBasePath()}/api/getWeatherSummary`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      weatherData: dataToSend,
    }),
  });

  const GPTdata = await res.json();
  const { content } = GPTdata;

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <InformationPanel city={city} result={result} lat={lat} long={long} />
      <div className="flex-1 p-5 lg:p-10">
        <div className="p-5">
          <div className="pb-5">
            <h2 className="text-xl font-bold">Todays Overview</h2>
            <p className="text-gray-400 text-sm">
              Last Updated at:{" "}
              {new Date(result.current_weather.time).toLocaleString()} (
              {result.timezone})
            </p>
          </div>

          <div className="m-2 mb-10">
            <CalloutCard message={content} />
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 m-2">
            <StatCard
              title="Maximum Temperature"
              metric={`${result.daily.temperature_2m_max[0].toFixed(1)}°`}
              color="yellow"
            />

            <StatCard
              title="Minimum Temperature"
              metric={`${result.daily.temperature_2m_min[0].toFixed(1)}°`}
              color="green"
            />

            <div>
              <StatCard
                title="UV Index"
                metric={`${result.daily.uv_index_max[0].toFixed(1)}`}
                color="rose"
              />

              {Number(result.daily.uv_index_max[0].toFixed(1)) > 5 && (
                <CalloutCard
                  message={"The UV is high today, be sure to wear SPF!"}
                  warning
                />
              )}
            </div>

            <div className="flex space-x-3">
              <StatCard
                title="Wind Speed"
                metric={`${result.current_weather.windspeed.toFixed(1)}m/s`}
                color="cyan"
              />

              <StatCard
                title="Wind Direction"
                metric={`${result.current_weather.winddirection.toFixed(1)}°`}
                color="violet"
              />
            </div>
          </div>
        </div>

        <hr className="mb-5" />
        <div className="space-y-3">
          <TempChart result={result} />
          <RainChart result={result} />
          <HumidityChart result={result} />
        </div>
      </div>
    </div>
  );
};

export default WeatherPage;
