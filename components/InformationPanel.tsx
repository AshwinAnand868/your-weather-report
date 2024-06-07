import weatherCodeToString from "@/lib/weatherCodeToString";
import { MoonIcon, SunIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import CityPicker from "./CityPicker";

type Props = {
  city: string;
  result: Root;
  lat: string;
  long: string;
};

function InformationPanel({ city, result, lat, long }: Props) {
  console.log("Sunrise");
  console.log(result.daily.sunrise);
  return (
    <div className="bg-gradient-to-br from-[#394568] to-[#1837BE] text-white p-10">
      <div className="pb-5">
        <h1 className="text-6xl font-bold">{decodeURI(city)}</h1>
        <p className="text-xm text-gray-400">
          Long/Lat: {long}, {lat}
        </p>
      </div>

      <CityPicker />

      <hr className="my-10" />

      <div className="flex items-center justify-between">
        <div>
          <p className="text-xl">
            {new Date().toLocaleDateString("en-GB", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <p className="font-extralight">
            Timezone: {Intl.DateTimeFormat().resolvedOptions().timeZone}
          </p>
        </div>

        <p className="text-xl font-bold uppercase">
          {new Date().toLocaleTimeString("en-GB", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}
        </p>
      </div>

      <hr className="mt-10 mb-5" />

      <div className="flex items-center justify-between">
        <div>
          <Image
            src={`https://www.weatherbit.io/static/img/icons/${
              weatherCodeToString[result.current_weather.weathercode].icon
            }.png`}
            alt={weatherCodeToString[result.current_weather.weathercode].label}
            width={75}
            height={75}
          />

          <div className="flex justify-between items-center space-x-10">
            <p className="text-6xl font-bold">
              {result.current_weather.temperature.toFixed(1)}°C
            </p>
            <p className="font-extralight text-lg text-right">
              {weatherCodeToString[result.current_weather.weathercode].label}
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-2 py-5">
        <div className="flex items-center justify-between py-3 px-4 border border-[#6F90CD] rounded-md bg-[#405885] space-x-2">
          <SunIcon className="h-10 w-10 text-gray-400" />

          <div className="flex-1 flex justify-between items-center">
            <p className="font-extralight">Sunrise</p>
            <p className="uppercase text-2xl">
              {new Date(result.daily.sunrise[0]).toLocaleTimeString("en-GB", {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              })}
              <span className="text-xs">&nbsp; GMT</span>
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between py-3 px-4 border border-[#6F90CD] rounded-md bg-[#405885] space-x-2">
          <MoonIcon className="h-10 w-10 text-gray-400" />

          <div className="flex-1 flex justify-between items-center">
            <p className="font-extralight">Sunset</p>
            <p className="uppercase text-2xl">
              {new Date(result.daily.sunset[0]).toLocaleTimeString("en-GB", {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              })}
              <span className="text-xs">&nbsp; GMT</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InformationPanel;
