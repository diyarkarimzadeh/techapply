"use client"

import CompanyCard from "@/components/CompanyCard"

import NewzealandCompanies from "../../../data/newzealand.json"

const Newzealand = () => {
  return (
    <div className="container">
      <div className="flex items-center justify-center m-6">
        <h1 className="text-lg font-bold text-center">
          {NewzealandCompanies.companies.length > 1
            ? `${NewzealandCompanies.companies.length} companies`
            : `${NewzealandCompanies.companies.length} company`}{" "}
          of New Zealand support visa sponsorship perk✈️
        </h1>
      </div>
      <div className="flex flex-row flex-wrap items-center justify-center">
        {NewzealandCompanies.companies.map((company) => (
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

export default Newzealand
