import { NavItem } from "@/types/nav"

interface SiteConfig {
  name: string
  description: string
  mainNav: NavItem[]
  // links: {
  //   twitter: string
  //   github: string
  //   docs: string
  // }
}

export const siteConfig: SiteConfig = {
  name: "Better Profile",
  description: "Seu LinkedIn com recomendações personalizadas",
  mainNav: [
    {
      title: "Documentation",
      href: "/",
    },
  ],
  // links: {
  //   twitter: "/",
  //   github: "/",
  //   docs: "/",
  // },
}
