import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <section className="container flex flex-col items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-center gap-2">
        <h1 className="text-3xl text-center font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
          A list of all companies around the world that offer visa sponsorship🚀
        </h1>
        <p className="max-w-[700px] text-lg text-center text-muted-foreground sm:text-xl">
          We created a list of companies around the world mostly countries with
          high rate of tech immigrants which they offer visa sponsorship.
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          href={siteConfig.links.docs}
          rel="noreferrer"
          className={buttonVariants({ size: "lg" })}
        >
          Companies
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.idpay}
          className={buttonVariants({ variant: "outline", size: "lg" })}
        >
          Donate✨
        </Link>
      </div>
    </section>
  )
}
