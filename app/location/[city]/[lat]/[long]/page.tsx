interface Props {
    params : {
        city: string,
        lat: string,
        long: string
    }
}

const WeatherPage = ({params}: Props) => {

    const {city, lat, long} = params;

  return (
    <div>Welcome to weather page {city} {lat} {long}</div>
  )
}

export default WeatherPage