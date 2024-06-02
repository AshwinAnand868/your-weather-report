import { getClient } from "@/apollo-client";
import fetchWeatherQuery from "@/graphql/queries/fetchWeatherQueries";

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
      timezone: 'GMT'
    }
  });

  const result: Root = data.myQuery;

  console.log(result);

  return (
    <div>
      Welcome to weather page {city} {lat} {long}
    </div>
  );
};

export default WeatherPage;
