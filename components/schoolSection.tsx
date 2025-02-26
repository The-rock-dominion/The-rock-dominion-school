import Image from "next/image"
import Link from "next/link"

const SchoolLink = ({ name, image, href }: { name: string; image: string; href: string }) => {
  return (
    <Link href={href} className="group">
      <div className="relative h-64 md:h-80 overflow-hidden rounded-lg shadow-lg">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 transition-opacity duration-300 group-hover:bg-opacity-20">
          <h2 className="text-2xl font-bold text-white text-center px-4 py-2 bg-black bg-opacity-50 rounded">{name}</h2>
        </div>
      </div>
    </Link>
  )
}

const SchoolSection = () => {
  return (
    <section className="py-16 px-4 bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 relative">
          Our Schools
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-accent mt-2"></span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
        <SchoolLink name="The Rock Dominion Creche & Preparatory School" image="/Crech.jpg" href="/primary" />
          <SchoolLink name="The Rock Dominion Primary School" image="/primary.jpg" href="/primary" />
          <SchoolLink name="The Rock Dominion Secondary School" image="/Secondaryschool.jpg" href="/secondary" />
        </div>
      </div>
    </section>
  )
}

export default SchoolSection

