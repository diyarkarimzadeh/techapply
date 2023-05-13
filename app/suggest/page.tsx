import React from "react"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

const Suggest = () => {
  return (
    <section className="container flex flex-col items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-center gap-2">
        <h1 className="text-3xl text-center font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
          Suggest a Company✨
        </h1>
        <p className="max-w-[700px] text-lg text-center text-muted-foreground sm:text-xl">
          For suggest a company which provides visa sponsorship please contact
          me on Telegram.
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          href="https://t.me/heydiyar"
          rel="noreferrer"
          className={buttonVariants({ size: "lg" })}
        >
          Telegram
        </Link>
        {/* <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline", size: "lg" })}
        >
          Email
        </Link> */}
      </div>
    </section>
  )
}

export default Suggest
