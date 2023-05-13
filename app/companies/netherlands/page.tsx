"use client"

import CompanyCard from "@/components/CompanyCard"

import NetherlandsCompanies from "../../../data/netherlands.json"

const Netherlands = () => {
  return (
    <div className="container">
      <div className="flex items-center justify-center m-6">
        <h1 className="text-lg font-bold text-center">
          {NetherlandsCompanies.companies.length > 1
            ? `${NetherlandsCompanies.companies.length} companies`
            : `${NetherlandsCompanies.companies.length} company`}{" "}
          of Netherlands support visa sponsorship perk✈️
        </h1>
      </div>
      <div className="flex flex-row flex-wrap items-center justify-center">
        {NetherlandsCompanies.companies.map((company) => (
          <CompanyCard
            key={company.name}
            name={company.name}
            yearOfMake={company["year-of-make"]}
            industry={company.industry}
            city={company.city}
            numberOfEmployees={company["number-of-employees"]}
            country={company.country}
            linkedinLink={company.linkedin}
          />
        ))}
      </div>
    </div>
  )
}

export default Netherlands
