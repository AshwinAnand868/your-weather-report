import { gql } from "@apollo/client";

const fetchWeatherQuery = gql`
  query MyQuery(
    $current_weather: String!
    $daily: String = "weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max,uv_index_clear_sky_max"
    $hourly: String = "temperature_2m,relative_humidity_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,wind_gusts_10m,uv_index,uv_index_clear_sky"
    $latitude: String!
    $longitude: String!
    $timezone:String!
  ) {
    fetchWeatherDataField(
      current_weather: $current_weather
      daily: $daily
      hourly: $hourly
      latitude: $latitude
      longitude: $longitude
      timezone: $timezone
    ) {
      latitude
      longitude
      timezone
      timezone_abbreviation
      utc_offset_seconds
      generationtime_ms
      current_weather {
        is_day
        temperature
        time
        weathercode
        winddirection
        windspeed
      }
      daily {
        apparent_temperature_max
        apparent_temperature_min
        sunrise
        sunset
        temperature_2m_max
        temperature_2m_min
        time
        weather_code
        uv_index_max
        uv_index_clear_sky_max
      }
      daily_units {
        apparent_temperature_max
        apparent_temperature_min
        sunrise
        sunset
        temperature_2m_min
        temperature_2m_max
        time
        uv_index_clear_sky_max
        uv_index_max
        weather_code
      }
      hourly {
        apparent_temperature
        precipitation
        precipitation_probability
        rain
        relative_humidity_2m
        showers
        snow_depth
        snowfall
        temperature_2m
        time
        uv_index
        uv_index_clear_sky
        wind_gusts_10m
      }
      hourly_units {
        apparent_temperature
        precipitation
        precipitation_probability
        rain
        relative_humidity_2m
        snow_depth
        showers
        snowfall
        temperature_2m
        time
        uv_index
        uv_index_clear_sky
        wind_gusts_10m
      }
    }
  }
`;

export default fetchWeatherQuery;