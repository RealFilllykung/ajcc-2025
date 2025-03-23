"use client"

import { ArrowDown } from "lucide-react"
import { useRef } from "react"

export default function Home() {
  const aboutMeRef = useRef<HTMLElement>(null)

  const scrollToAboutMe = () => {
    aboutMeRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      {/* Home Section */}
      <section className="min-h-screen flex flex-col items-center justify-between p-6 relative">
        <div className="flex-1 flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-center">Hello AJCC</h1>
          <p className="text-xl md:text-2xl mt-4 text-center">from Tharathep Klinla-or (Fill)</p>
        </div>

        <div className="flex flex-col items-center mb-12">
          <button
            onClick={scrollToAboutMe}
            className="mb-6 px-6 py-3 rounded-full bg-white border-2 border-black hover:bg-black hover:text-white transition-colors duration-300 shadow-md"
          >
            Click here to learn more about me
          </button>
          <p className="text-sm mb-4">or scroll down to learn more about the research</p>
          <div className="animate-bounce">
            <ArrowDown className="h-6 w-6" />
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section className="min-h-screen p-6 md:p-12 bg-gray-50 flex flex-col">
        <div className="max-w-5xl mx-auto flex-1">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-12">Research Project</h2>

          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-4">Abstract</h3>
              <p className="mb-4">
                This research explores the intersection of Swiss design principles and modern web development practices.
                Through a series of experiments and case studies, we investigate how the clarity and precision of Swiss
                typography can enhance user experience in digital interfaces.
              </p>
              <p>
                Our findings suggest that adherence to grid systems, hierarchical typography, and minimalist aesthetics
                significantly improves readability and information retention among users across various devices and
                contexts.
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-4">Methodology</h3>
              <p className="mb-4">We conducted a mixed-methods study involving:</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>Comparative analysis of 50 websites using Swiss design principles</li>
                <li>Eye-tracking studies with 25 participants</li>
                <li>In-depth interviews with 10 design professionals</li>
                <li>A/B testing of prototype interfaces with 500 users</li>
              </ul>
              <p>
                Data was collected over a six-month period and analyzed using both quantitative and qualitative methods.
              </p>
            </div>
          </div>

          <div className="mt-12 md:mt-16">
            <h3 className="text-xl md:text-2xl font-bold mb-4">Key Findings</h3>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="border-t-2 border-black pt-4">
                <h4 className="font-bold mb-2">Improved Readability</h4>
                <p>
                  Interfaces designed with Swiss principles showed a 37% improvement in reading speed and comprehension.
                </p>
              </div>
              <div className="border-t-2 border-black pt-4">
                <h4 className="font-bold mb-2">Enhanced Navigation</h4>
                <p>Grid-based layouts reduced user navigation errors by 42% compared to non-grid designs.</p>
              </div>
              <div className="border-t-2 border-black pt-4">
                <h4 className="font-bold mb-2">Increased Engagement</h4>
                <p>Minimalist interfaces with strong typographic hierarchy increased user engagement time by 28%.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center mt-12 mb-8">
          <p className="text-sm mb-4">scroll down to learn more about researcher</p>
          <div className="animate-bounce">
            <ArrowDown className="h-6 w-6" />
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section ref={aboutMeRef} className="min-h-screen p-6 md:p-12 flex flex-col">
        <div className="max-w-5xl mx-auto flex-1">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-12">About Me</h2>

          <div className="mb-12">
            <p className="text-lg mb-6">
              I am a passionate researcher and designer focused on the intersection of Swiss design principles and
              modern digital interfaces. With a background in both design and technology, I strive to create experiences
              that are both aesthetically pleasing and functionally efficient.
            </p>
            <p className="text-lg">
              My work is guided by the belief that clarity, precision, and thoughtful organization are the foundations
              of effective communication in any medium.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-xl md:text-2xl font-bold mb-6">Education</h3>
            <div className="space-y-8">
              <div className="relative pl-8 border-l-2 border-black">
                <div className="absolute w-4 h-4 bg-black rounded-full -left-[9px]"></div>
                <h4 className="font-bold">Master's Degree in Digital Design</h4>
                <p className="text-sm mb-1">University of Design Excellence</p>
                <p className="text-sm">2022 - 2024</p>
                <p className="mt-2">
                  Specialized in user experience design with a focus on typography and grid systems in digital
                  interfaces.
                </p>
              </div>

              <div className="relative pl-8 border-l-2 border-black">
                <div className="absolute w-4 h-4 bg-black rounded-full -left-[9px]"></div>
                <h4 className="font-bold">Bachelor's Degree in Graphic Design</h4>
                <p className="text-sm mb-1">Design Institute of Technology</p>
                <p className="text-sm">2017 - 2021</p>
                <p className="mt-2">
                  Graduated with honors. Thesis on "The Evolution of Swiss Design in the Digital Age."
                </p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-xl md:text-2xl font-bold mb-6">Work Experience</h3>
            <div className="space-y-8">
              <div className="relative pl-8 border-l-2 border-black">
                <div className="absolute w-4 h-4 bg-black rounded-full -left-[9px]"></div>
                <h4 className="font-bold">Senior UX Designer</h4>
                <p className="text-sm mb-1">Design Innovation Labs</p>
                <p className="text-sm">2024 - Present</p>
                <p className="mt-2">
                  Leading the design team in creating user-centered digital products with a focus on accessibility and
                  clean design principles.
                </p>
              </div>

              <div className="relative pl-8 border-l-2 border-black">
                <div className="absolute w-4 h-4 bg-black rounded-full -left-[9px]"></div>
                <h4 className="font-bold">UX Designer</h4>
                <p className="text-sm mb-1">Design Innovation Labs</p>
                <p className="text-sm">2022 - 2024</p>
                <p className="mt-2">
                  Designed and implemented user interfaces for web and mobile applications, focusing on grid-based
                  layouts and typography.
                </p>
              </div>

              <div className="relative pl-8 border-l-2 border-black">
                <div className="absolute w-4 h-4 bg-black rounded-full -left-[9px]"></div>
                <h4 className="font-bold">Junior Designer</h4>
                <p className="text-sm mb-1">Design Innovation Labs</p>
                <p className="text-sm">2021 - 2022</p>
                <p className="mt-2">
                  Assisted senior designers in creating visual assets and conducting user research for various digital
                  products.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-6">Key Achievements</h3>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="border-t-2 border-black pt-4">
                <h4 className="font-bold mb-2">Design System Implementation</h4>
                <p>
                  Led the development of a comprehensive design system based on Swiss principles, reducing design
                  inconsistencies by 78% and development time by 35%.
                </p>
              </div>
              <div className="border-t-2 border-black pt-4">
                <h4 className="font-bold mb-2">Award-Winning Redesign</h4>
                <p>
                  Spearheaded the redesign of our flagship product, resulting in a 42% increase in user engagement and
                  recognition at the Annual Design Excellence Awards.
                </p>
              </div>
              <div className="border-t-2 border-black pt-4">
                <h4 className="font-bold mb-2">Accessibility Initiative</h4>
                <p>
                  Initiated and implemented company-wide accessibility standards, ensuring all products meet WCAG 2.1 AA
                  compliance while maintaining design integrity.
                </p>
              </div>
              <div className="border-t-2 border-black pt-4">
                <h4 className="font-bold mb-2">Research Publication</h4>
                <p>
                  Published "Typography in Digital Interfaces: A Swiss Approach" in the Journal of Digital Design, cited
                  by over 200 researchers and practitioners.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center mt-12 mb-8">
          <p className="text-sm mb-4">Scroll down to exchange the contacts</p>
          <div className="animate-bounce">
            <ArrowDown className="h-6 w-6" />
          </div>
        </div>
      </section>
    </>
  )
}

