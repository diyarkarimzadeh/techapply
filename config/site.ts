export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Tech Apply",
  description:
    "A list of all companies around the world that offer visa sponsorship.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Companies",
      href: "/companies",
    },
    {
      title: "Suggest new company",
      href: "/suggest",
    },
    {
      title: "Donate me✨",
      href: "https://idpay.ir/diyarkarimzadeh",
      target: "_blank",
    },
    // {
    //   title: "Developed by Diyar Karimzadeh☕",
    //   href: "https://t.me/heydiyar",
    //   target: "_blank",
    // },
  ],
  links: {
    twitter: "https://twitter.com/heydiyar",
    github: "https://github.com/diyarkarimzadeh",
    docs: "/companies",
  },
}
