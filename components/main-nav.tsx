import * as React from "react"
import Link from "next/link"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { SearchBar } from "./SearchBar"
import { Ampersand, Building, Car } from "lucide-react"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex gap-6 md:gap-10 ">
      <div className="flex items-center space-x-2">
        <span className="inline-block font-bold">{siteConfig.name.substring(0, 3)}</span>
        <Car className="h-7 w-7" />
        <Ampersand className="h-4 w-4" />
        <Building className="h-6 w-6" />
        <span className="inline-block font-bold">{siteConfig.name.substring(3)}</span>
      </div>
      {items?.length ? (
        <nav className="flex gap-6">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center text-sm font-medium text-muted-foreground",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}
    </div>
  )
}
