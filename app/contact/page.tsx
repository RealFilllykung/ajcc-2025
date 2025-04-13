import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <main
      className="flex flex-col min-h-screen items-center justify-center p-4 text-white"
      style={{ backgroundColor: "#C21E56" }}
    >
      <div className="max-w-3xl w-full space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-center">Contact</h1>
        <div className="text-lg text-center space-y-4">
          <p>Email: your.email@example.com</p>
          <p>LinkedIn: linkedin.com/in/yourprofile</p>
          <p>Twitter: @yourhandle</p>
          <p>Academic Institution: Your University</p>
        </div>
        <div className="flex justify-center mt-8">
          <Button asChild className="bg-white text-[#C21E56] hover:bg-white/90">
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
