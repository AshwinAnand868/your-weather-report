import CityPicker from "./CityPicker"

type Props = {
    city: string,
    result: Root,
    lat: string,
    long: string
}

function InformationPanel({city, result, lat, long}: Props) {
  return (
    <div className="bg-gradient-to-br from-[#394568] to-[#1837BE] text-white p-10">
        <div className="pb-5">
            <h1 className="text-6xl font-bold">{decodeURI(city)}</h1>
            <p className="text-xm text-gray-400">
                Long/Lat: {long}, {lat}
            </p>
        </div>
        <CityPicker />

    </div>
  )
}

export default InformationPanel