import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ProjectsPage() {
  return (
    <main
      className="flex flex-col min-h-screen items-center justify-center p-4 text-white"
      style={{ backgroundColor: "#C21E56" }}
    >
      <div className="max-w-3xl w-full space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-center">Projects</h1>
        <div className="text-lg space-y-8">
          <div className="border border-white p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">Research Project 1</h2>
            <p>
              Description of your first academic research project. Include details about methodology, findings, and any
              publications.
            </p>
          </div>

          <div className="border border-white p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">Research Project 2</h2>
            <p>
              Description of your second academic research project. Include details about methodology, findings, and any
              publications.
            </p>
          </div>

          <div className="border border-white p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">Conference Presentations</h2>
            <p>List of conferences you've presented at, including AJCC and others.</p>
          </div>
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
