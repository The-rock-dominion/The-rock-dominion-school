import type React from "react"
import Link from "next/link"
import { Book, GraduationCap, Users } from "lucide-react"

const ePortal = () => {
  return (
    <section className="py-16 px-4 bg-background text-foreground">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 relative text-primary dark:text-white">
          E-Portal Access
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary mt-2"></span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <PortalCard
            title="Student Portal"
            description="Access your courses, assignments, and grades"
            icon={<Book className="w-12 h-12" />}
            href="/student-portal"
          />
          <PortalCard
            title="Parent Portal"
            description="Monitor your child's progress and communicate with teachers"
            icon={<Users className="w-12 h-12" />}
            href="/parent-portal"
          />
          <PortalCard
            title="Staff Portal"
            description="Manage classes, grades, and administrative tasks"
            icon={<GraduationCap className="w-12 h-12" />}
            href="/staff-portal"
          />
        </div>
      </div>
    </section>
  )
}

const PortalCard = ({
  title,
  description,
  icon,
  href,
}: { title: string; description: string; icon: React.ReactNode; href: string }) => {
  return (
    <Link href={href} className="group">
      <div className="bg-white dark:bg-card text-foreground dark:text-card-foreground rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-gray-200 dark:border-gray-700">
        <div className="p-6">
          <div className="flex items-center justify-center mb-4 text-primary dark:text-primary-foreground">{icon}</div>
          <h3 className="text-xl font-semibold mb-2 text-center group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-muted-foreground text-center">{description}</p>
        </div>
        <div className="bg-primary text-primary-foreground py-2 px-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Access Portal
        </div>
      </div>
    </Link>
  )
}

export default ePortal

