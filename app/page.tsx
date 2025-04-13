"use client"

import { useEffect, useState } from "react"
import { ArrowDown } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrolled])

  return (
    <main className="flex flex-col min-h-[200vh] text-white" style={{ backgroundColor: "#C21E56" }}>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen relative">
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold">Hello, AJCC</h1>
          <p className="text-xl md:text-2xl">from Tharathe Klinla-or</p>
        </div>

        <div className="absolute bottom-10 flex flex-col items-center animate-bounce">
          <p className="mb-2">Scroll down to start exploring</p>
          <ArrowDown className="h-6 w-6" />
        </div>
      </section>

      {/* Explore Section */}
      <section className="flex flex-col items-center justify-center min-h-screen p-4">
        <div className="max-w-md w-full space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center">What do you want to explore first?</h2>

          <div className="flex flex-col space-y-4 mt-8">
            <Button asChild className="h-14 text-lg bg-white text-[#C21E56] hover:bg-white/90">
              <Link href="/about">About me</Link>
            </Button>

            <Button asChild className="h-14 text-lg bg-white text-[#C21E56] hover:bg-white/90">
              <Link href="/contact">Contact</Link>
            </Button>

            <Button asChild className="h-14 text-lg bg-white text-[#C21E56] hover:bg-white/90">
              <Link href="/projects">Project</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
