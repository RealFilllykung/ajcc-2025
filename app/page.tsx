import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronDown } from "lucide-react"
import TopMenuBar from "@/components/top-menu-bar"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center relative">
      {/* Top Menu Bar */}
      <TopMenuBar />

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center flex-1 px-4 md:px-8 lg:px-16 text-center pt-16 md:pt-20">
        {/* Avatar */}
        <div className="my-8 md:my-12">
          <Avatar className="h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48">
            <AvatarImage src="/placeholder.svg" alt="Profile" />
            <AvatarFallback>TK</AvatarFallback>
          </Avatar>
        </div>

        {/* Header Text */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4">Hello, AJCC 2025</h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 md:mb-12">
          from Tharathep Klinla-or (Fill)
        </p>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="flex flex-col items-center mb-8 md:mb-12">
        <p className="text-sm md:text-base text-muted-foreground mb-2 md:mb-3">Scroll down to start exploring</p>
        <div className="animate-bounce">
          <ChevronDown className="h-6 w-6 md:h-8 md:w-8" />
        </div>
      </div>
    </main>
  )
}

