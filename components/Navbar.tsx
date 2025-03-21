
"use client"

import { useEffect, useState, useCallback } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import ThemeToggle from "./modeToggle"

interface NavItem {
  name: string
  href: string
}

interface NavSection {
  title: string
  href: string
  items?: NavItem[]
}

const navSections: NavSection[] = [
  {
    title: "About Us",
    href: "/about-us",
    items: [
      { name: "Our History", href: "/about-us#our-history" },
      { name: "Mission & Vision", href: "/about-us#mission-vision" },
      { name: "Core values", href: "/about-us#core-values" },
      { name: "Principal's Message", href: "/about-us#principals-message" },
      { name: "Our Team", href: "/about-us#our-team" },
      { name: "Vacancies", href: "/about-us#vacancies" },
      { name: "FAQs", href: "/about-us#faqs" },
      { name: "Accreditation & Affiliation", href: "/about-us#accreditation-affiliation" },
    ],
  },
  {
    title: "Admission",
    href: "/admission",
    items: [
      { name: "Admission Process", href: "/admission#admission-process" },
      { name: "Application", href: "/admission#application" },
      { name: "International Admission", href: "/admission#international-admission" },
      { name: "Entrance Exam", href: "/admission#entrance-exam" },
      { name: "School Fees", href: "/admission#school-fees" },
      { name: "Our Policy", href: "/admission#our-policy" },
      { name: "Apply Online", href: "/admission#apply-online" },
    ],
  },
  {
    title: "Academics",
    href: "/academics",
    items: [
      { name: "Overview", href: "/academics#overview" },
      { name: "Curriculum", href: "/academics#curriculum" },
      { name: "Primary", href: "/academics#primary" },
      { name: "Secondary", href: "/academics#secondary" },
      { name: "School of Vocation", href: "/academics#school-of-vocation" },
      { name: "Student Development Programs", href: "/academics#student-development-programs" },
    ],
  },
  {
    title: "Contact Us",
    href: "/contact"
  },
  {
    title: "Facilities",
    href: "/facilities"
  },
  {
    title: "Gallery",
    href: "/gallery"
  },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false)
        setOpenMobileDropdown(null)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Handle mobile menu closing
  const handleMobileMenuClose = useCallback(() => {
    setIsOpen(false)
    setOpenMobileDropdown(null)
  }, [])

  const toggleMobileDropdown = useCallback((title: string) => {
    setOpenMobileDropdown(prev => prev === title ? null : title)
  }, [])

  // Handle navigation click
  const handleNavClick = useCallback(() => {
    handleMobileMenuClose()
  }, [handleMobileMenuClose])

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-primary/95 backdrop-blur-sm shadow-lg' : 'bg-primary'
    } text-primary-foreground`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" onClick={handleNavClick} className="text-2xl font-bold hover:opacity-90 transition-opacity">
              The Rock Dominion school
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link
              href="/"
              className="nav-link hover:bg-accent hover:text-accent-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Home
            </Link>
            {navSections.map((section) => (
              <div key={section.title} className="relative group">
                <div className="flex items-center">
                  <Link
                    href={section.href}
                    className="nav-link hover:bg-accent hover:text-accent-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    {section.title}
                  </Link>
                  {section.items && (
                    <button 
                      className="hover:bg-accent hover:text-accent-foreground p-2 rounded-md transition-colors"
                      aria-label={`${section.title} dropdown`}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </button>
                  )}
                </div>
                {section.items && (
                  <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-background text-foreground ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out z-50">
                    <div className="py-1" role="menu" aria-orientation="vertical">
                      {section.items.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                          role="menuitem"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <div className="ml-4">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-primary-foreground hover:text-accent-foreground hover:bg-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-accent focus:ring-white transition-colors"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Toggle menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="/"
            onClick={handleNavClick}
            className="hover:bg-accent hover:text-accent-foreground block px-3 py-2 rounded-md text-base font-medium transition-colors"
          >
            Home
          </Link>
          {navSections.map((section) => (
            <div key={section.title} className="space-y-1">
              <div className="flex items-center justify-between">
                <Link
                  href={section.href}
                  onClick={handleNavClick}
                  className="hover:bg-accent hover:text-accent-foreground block px-3 py-2 rounded-md text-base font-medium transition-colors"
                >
                  {section.title}
                </Link>
                {section.items && (
                  <button
                    className="hover:bg-accent hover:text-accent-foreground p-2 rounded-md transition-colors"
                    onClick={() => toggleMobileDropdown(section.title)}
                    aria-expanded={openMobileDropdown === section.title}
                  >
                    <ChevronDown
                      className={`h-4 w-4 transform transition-transform duration-200 ${
                        openMobileDropdown === section.title ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                )}
              </div>
              {section.items && openMobileDropdown === section.title && (
                <div className="pl-4 space-y-1">
                  {section.items.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={handleNavClick}
                      className="hover:bg-accent hover:text-accent-foreground block px-3 py-2 rounded-md text-sm transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="pt-4 pb-3 border-t border-accent">
          <div className="px-4">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
