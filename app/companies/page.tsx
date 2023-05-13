import React from "react"

import CountryCart from "@/components/CountryCart"

import countryList from "../../data/countries.json"

const Companies = () => {
  return (
    <div className="container">
      <div className="flex items-center justify-center m-6">
        <h1 className="text-lg font-bold text-center">
          📍Select your desired country to see Visa Sponsorship companies
        </h1>
      </div>
      <div className="flex flex-row flex-wrap items-center justify-center">
        {countryList.country.map((country) => (
          <CountryCart
            key={country.id}
            title={country.name}
            flag={country.flag}
            url={country.url}
          />
        ))}
      </div>
    </div>
  )
}

export default Companies
