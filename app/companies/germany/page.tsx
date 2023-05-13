"use client"

import CompanyCard from "@/components/CompanyCard"

import GermanyCompanies from "../../../data/germany.json"

const Germany = () => {
  return (
    <div className="container">
      <div className="flex items-center justify-center m-6">
        <h1 className="text-lg font-bold text-center">
          {GermanyCompanies.companies.length > 1
            ? `${GermanyCompanies.companies.length} companies`
            : `${GermanyCompanies.companies.length} company`}{" "}
          of Germany support visa sponsorship perk✈️
        </h1>
      </div>
      <div className="flex flex-row flex-wrap items-center justify-center">
        {GermanyCompanies.companies.map((company) => (
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

export default Germany
