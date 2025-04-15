import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <main
      className="min-h-screen items-center justify-center p-4 text-white"
      style={{ backgroundColor: "#BC002D" }}
    >
      <div className="sm:grid sm:grid-cols-1 md:grid-cols-2 gap-3">
        <div className="hidden sm:block">Image of me will be on this side</div>

        <div>
          <h1 className="text-4xl font-bold">About Me</h1>

          <h2 className="text-2xl font-bold">Education</h2>
          <ol className="list-decimal list-inside">
            <li>Bachelor of Engineering, Computer Engineering, First Hornour Degree, Mahidol University International College (MUIC) (2017 - 2021)</li>
            <li>Master of Science, Computer Science, Mahidol University Faculty of Information and Communication Technology (MUICT) (2022 - 2024)</li>
          </ol>
          <div className="p-1"></div>

          <h2 className="text-2xl font-bold">Work Experiences</h2>
          <ol className="list-decimal list-inside">
            <li>Influencer, Online Station (2016 - present)</li>
            <li>Software Engineer (Internship), SCG (2020 - 2020)</li>
            <li>Business Analyst, ExxonMobil (SAP SD Module) (2021 - 2022)</li>
            <li>Backend Developer, ExxonMobil (.NET C#, MS Azure, Alibaba Cloud) (2022 - 2024)</li>
            <li>Lead Developer, ExxonMobil (.NET C#, React, MS Azure, Alibaba Cloud) (2024 - Present)</li>
          </ol>
          <div className="p-1"></div>

          <h2 className="text-2xl font-bold">Achievements</h2>
          <h3 className="text-1xl">Online Station</h3>
          <ol className="list-disc list-inside">
            <li>Achieved 1,000,000 subscribers as a solo Youtuber [1]</li>
            <li>Achieved a lifetime veiws of 280M+ [1]</li>
          </ol>

          <h3 className="text-1xl">SCG</h3>
          <ol className="list-disc list-inside">
            <li></li>
          </ol>
          
          <h3 className="text-1xl">ExxonMobil</h3>
          <ol className="list-disc list-inside">
            <li></li>
          </ol>

          <h2 className="text-2xl font-bold">Achievements Reference</h2>
          <ol className="list-decimal list-inside">
            <li><Link className="underline" href="https://www.youtube.com/@FilllykungCH">Youtube Channel Portfolio</Link></li>
          </ol>
        </div>
      </div>

      <div className="flex justify-center mt-8">
          <Button asChild className="bg-white text-[#C21E56] hover:bg-white/90">
            <Link href="/">Back to Home</Link>
          </Button>
      </div>


    </main>
  )
}
