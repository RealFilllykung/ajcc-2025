import Link from "next/link"

export default function TopMenuBar() {
  return (
    <div className="w-full fixed top-0 z-10">
      <div className="bg-black text-white py-3 md:py-4 px-6 rounded-b-3xl mx-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
        <nav className="flex justify-between items-center">
          <Link
            href="/about"
            className="text-sm md:text-base font-medium uppercase hover:text-gray-300 transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-sm md:text-base font-medium uppercase hover:text-gray-300 transition-colors"
          >
            Contact
          </Link>
          <Link
            href="/projects"
            className="text-sm md:text-base font-medium uppercase hover:text-gray-300 transition-colors"
          >
            Projects
          </Link>
        </nav>
      </div>
    </div>
  )
}

