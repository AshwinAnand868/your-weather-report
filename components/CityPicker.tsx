"use client";

import { Country } from "country-state-city";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Select from "react-select";

const countryOptions = Country.getAllCountries().map((country) => {
    return {
        value: {
            latitude: country.latitude,
            longitude: country.longitude,
            isoCode: country.isoCode
        },
        label: country.name,
    }
});


const CityPicker = () => {

    const [selectedCountry, setSelectedCountry] = useState<CountryOption>(null);
    const [selectedCity, setSelectedCity] = useState<CityOption>(null);
    const router = useRouter(); // 

    const handleSelectedCountry = (option: CountryOption) => {
        setSelectedCountry(option);
        // make the city null when user changes the country
        setSelectedCity(null);
    }

  return (
    <div>
        <Select
            className="text-black"
            value={selectedCountry}
            onChange={handleSelectedCountry}
            options={countryOptions}
        />
    </div>
  )
}

export default CityPicker