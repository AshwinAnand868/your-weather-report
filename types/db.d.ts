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