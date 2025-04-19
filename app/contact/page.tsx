"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import LinkedinButton from "@/components/custom/contact/LinkedinButton"
import GithubButton from "@/components/custom/contact/GithubButton"
import FacebookButton from "@/components/custom/contact/FacebookButton"
import GmailButton from "@/components/custom/contact/GmailButton"
import OutlookButton from "@/components/custom/contact/OutlookButton"

export default function ContactPage() {
  return (
    <main
      className="flex flex-col min-h-screen items-center p-4 text-white"
      style={{ backgroundColor: "#C21E56" }}
    >
      <section className="flex flex-col items-center p-4">
        <div className="max-w-md w-full">

          <div className="flex flex-col space-y-4 mt-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center">Email Link Tree</h2>
            <GmailButton></GmailButton>
            <OutlookButton></OutlookButton>
            <h2 className="text-3xl md:text-4xl font-bold text-center">Social Media Link Tree</h2>
            <LinkedinButton></LinkedinButton>
            <GithubButton></GithubButton>
            <FacebookButton></FacebookButton>
          </div>
        </div>
      </section>
        <div className="flex justify-center mt-8">
          <Button asChild className="bg-white text-[#C21E56] hover:bg-white/90">
            <Link href="/">Back to Home</Link>
          </Button>
        </div>

    </main>
  )
}
