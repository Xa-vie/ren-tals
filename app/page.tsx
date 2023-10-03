import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-6">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl mb-2">
          Welcome to our platform!
          <div> Ren-tals </div>
        </h1>
        <p className="text-xl">
          For a range of exquisite cars, navigate to <span className="font-semibold">Cars</span> in the navbar.
        </p>
        <p className="text-xl">
          Interested in hotel listings? Simply click on <span className="font-semibold">Hotels</span>.
        </p>
      </div>
    </section>
  )
}
