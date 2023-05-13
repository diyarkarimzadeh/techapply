"use-client"

import React from "react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Icons } from "./icons"

interface Props {
  name: string
  yearOfMake: string
  industry: string
  city: string
  numberOfEmployees: string
  country: string
  linkedinLink?: string
}

const CompanyCard = ({
  name,
  yearOfMake,
  industry,
  city,
  numberOfEmployees,
  country,
  linkedinLink,
}: Props) => {
  const formatNumber = (inputNumber: string): string => {
    if (Number(inputNumber) >= 1000) {
      const thousandNumber = Number(inputNumber) / 1000
      return `${thousandNumber.toString()}K`
    } else {
      return inputNumber
    }
  }

  const handleClick = () => {
    window.open(linkedinLink, "_blank")
  }

  return (
    <div className="w-[450px] m-3">
      <Card
        onClick={() => {
          handleClick()
        }}
        className="cursor-pointer backdrop-brightness-50"
      >
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>{name}</CardTitle>
            <CardDescription className="mt-2">
              {city}, {country}, {yearOfMake}
            </CardDescription>
          </div>
          <Icons.arrow color="grey" />
        </CardHeader>
        <CardContent>
          ⚒️Industry: <b>{industry}</b>
          <br />
          🧑‍💻Employees: <b>{formatNumber(numberOfEmployees)}</b>
        </CardContent>
      </Card>
    </div>
  )
}

export default CompanyCard
