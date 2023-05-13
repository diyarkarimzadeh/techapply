"use client"

import React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Icons } from "./icons"

interface Props {
  title: string
  flag: string
  url: string
}

const CountryCart = ({ title, flag, url }: Props): React.JSX.Element => {
  const router = useRouter()

  const handleNav = () => {
    router.push(url)
  }

  return (
    <div className="w-[320px] m-3">
      <Link rel="noreferrer" href={url}>
        <Card
          className="cursor-pointer backdrop-brightness-50"
          onClick={() => {
            handleNav()
          }}
        >
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>
              {flag} {title}
            </CardTitle>
            <Icons.arrow color="grey" />
          </CardHeader>
        </Card>
      </Link>
    </div>
  )
}

export default CountryCart
