import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ProjectsPage() {
  return (
    <main
      className="flex flex-col min-h-screen items-center p-4 text-white"
      style={{ backgroundColor: "#BC002D" }}
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
            <p>Here are some of the basic terminology that we need to know first.</p>
            <ol className="list-decimal list-inside">
              <li>Verifiable credential (VC): The credential that can be self verifiable. You can think it as a message for this framework.</li>
              <li>Verifiable presentation (VP): The envelope that keeps VC inside.</li>
              <li>Issuer: The person who issue VC</li>
              <li>Holder: The person that will receive VC from issuer and keep it with itself</li>
              <li>Verifier: The person that will receive VP from holder and verify the validity of VC</li>
              <li>Data registry: The database that keeps the record of VC</li>
            </ol>
            <p>After we know some basic terms already, now we can have a look on how the component interact to each other</p>
            {/* <Image></Image> */}
            <p>Now let's understand the basic scenario which VC will get transfer from issuer to verifier. Here are the list of actions for each component to transfer VC from issuer to verifier.</p>
            <ol className="list-decimal list-inside">
              <li>Holder request VC from issuer</li>
              <li>Issuer generate new VC, save the VC inside data registry, and send it to the holder</li>
              <li>Holder will save VC into a digital wallet</li>
              <li>Verifier request VC from holder</li>
              <li>Holder create VP which will attach VC inside VP and send it to verifier</li>
              <li>Verifier verify the validity of VC and choose to accept or decline</li>
            </ol>
          </div>

          <div>
            <h2 className="text-3xl font-bold">Implementation</h2>
            <p>For this project, we only focus on the holder module. The program implementation will only cont</p>
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
