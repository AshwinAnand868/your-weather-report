"use client";

import { GlobeAltIcon } from "@heroicons/react/16/solid";
import { City, Country } from "country-state-city";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Select from "react-select";

type CountryOption = {
  value: {
      latitude: string,
      longitude: string,
      isoCode: string
  },
  label: string
} | null;

type CityOption = {
  value: {
      latitude: string,
      longitude: string,
      countryCode: string,
      name: string,
      stateCode: string,
  }, 
  label: string,
} | null;

const countryOptions = Country.getAllCountries().map((country) => {
  return {
    value: {
      latitude: country.latitude,
      longitude: country.longitude,
      isoCode: country.isoCode,
    },
    label: country.name,
  };
});

const CityPicker = () => {
  const [selectedCountry, setSelectedCountry] = useState<CountryOption>(null);
  const [selectedCity, setSelectedCity] = useState<CityOption>(null);
  const router = useRouter(); //

  const handleSelectedCountry = (option: CountryOption) => {
    setSelectedCountry(option);
    // make the city null when user changes the country
    setSelectedCity(null);
  };

  const handleSelectedCity = (cityOption: CityOption) => {
    setSelectedCity(cityOption);
    router.push(`/location/${cityOption?.value.name}/${cityOption?.value.latitude}/${cityOption?.value.longitude}`);
  }

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="flex space-x-2 text-white/80 items-center">
          <GlobeAltIcon className="h-5 w-5 text-white" />
          <label htmlFor="country">Country</label>
        </div>
        <Select
          className="text-black"
          value={selectedCountry}
          onChange={handleSelectedCountry}
          options={countryOptions}
        />
      </div>

      {selectedCountry && (
        <div className="space-y-2">
          <div className="flex space-x-2 text-white/80 items-center">
            <GlobeAltIcon className="h-5 w-5 text-white" />
            <label htmlFor="city">City</label>
          </div>
          <Select
            className="text-black"
            value={selectedCity}
            onChange={handleSelectedCity}
            options={City.getCitiesOfCountry(selectedCountry.value.isoCode)?.map(city => (
                {
                    value: {
                        latitude: city.latitude!,
                        longitude: city.longitude!,
                        countryCode: city.countryCode,
                        name: city.name,
                        stateCode: city.stateCode
                    },
                    label: city.name
                }
            ))}
          />
        </div>
      )}
    </div>
  );
};

export default CityPicker;
