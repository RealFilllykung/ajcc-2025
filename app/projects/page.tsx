import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ProjectsPage() {
  return (
    <main
      className="flex flex-col min-h-screen items-center p-4 text-white"
      style={{ backgroundColor: "#C21E56" }}
    >
      <div className="max-w-3xl w-full space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-center">Verifiable Credential Wallet for Digital Transcript</h1>
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold">Problem Statement</h2>
            <p>
              The current transcript system have the following problems:
            </p>
            <ol className="list-decimal list-inside">
              <li>Damage physical transcript document</li>
              <li>Long transcript issuing process</li>
              <li>Transcript forgery</li>
              <li>Long process of transcript validation</li>
            </ol>
          </div>

          <div>
            <h2 className="text-3xl font-bold">Proposed Solution</h2>
            <p>After tackling the problem for awhile, one of the framework that can prevent the problem to occur is to use self-sovereigh identity (SSI) framework. As a result from our implementation, we have achieved the following benefits:</p>
            <ol className="list-decimal list-inside">
              <li>Transcript damage prevention</li>
              <li>Shorten the transcript issuing process</li>
              <li>Transcript forgery prevention</li>
              <li>Shorten the transcript validation process</li>
            </ol>
          </div>

          <div>
            <h2 className="text-3xl font-bold">Basic Self Sovereign Identity Concept</h2>
          </div>

          <div>
            <h2 className="text-3xl font-bold">Implementation</h2>
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
