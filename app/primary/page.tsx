
import Image from "next/image"
import Link from "next/link"

const primarySchoolAspects = [
  {
    title: "Early Learning",
    image: "/nusurey 1.jpg",
    description: "Nurturing young minds with engaging activities",
  },
  {
    title: "Literacy & Numeracy",
    image: "/Primary 3.jpg",
    description: "Building strong foundations in reading and math",
  },
  { title: "Creative Arts", image: "/Cultural day 2.jpg", description: "Fostering creativity through various art forms" },
  {
    title: "Physical Education",
    image: "/Teacher primary.jpg",
    description: "Promoting health and teamwork through sports",
  },
  {
    title: "Science Discovery",
    image: "/Happy student 2.jpg",
    description: "Hands-on experiments and nature exploration",
  },
  { title: "Social Skills", image: "/Award 2.jpg", description: "Developing empathy and communication skills" },
]

export default function PrimarySchoolPage() {
  return (
    <div className="min-h-screen bg-background text-foreground ">
      <header className="relative bg-primary text-primary-foreground p-20 z-10">
        <div className="absolute inset-0">
          <Image src="/Primary banner.jpg" alt="Header Background" layout="fill" objectFit="cover" className="opacity-50" />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">The Rock Dominion Primary School</h1>
          <p className="text-2xl md:text-3xl font-light drop-shadow-md">Nurturing curiosity, Inspiring growth</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Welcome to T.R.D primary</h2>
          <p className="text-lg mb-4">
            At T.R.D, we create a warm and stimulating environment where young learners can explore,
            discover, and grow. Our dedicated teachers and innovative programs ensure that every child receives a strong
            foundation for lifelong learning.
          </p>
          <p className="text-lg">Discover the exciting world of primary education at Riverside below.</p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {primarySchoolAspects.map((aspect, index) => (
            <div
              key={index}
              className="bg-card text-card-foreground rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <div className="relative h-48">
                <Image src={aspect.image || "/placeholder.svg"} alt={aspect.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{aspect.title}</h3>
                <p className="text-muted-foreground">{aspect.description}</p>
              </div>
            </div>
          ))}
        </section>

        <section className="mt-12 text-center">
          <Link
            href="/admissions"
            className="inline-flex px-6 py-3 rounded-md text-lg font-semibold bg-[hsl(var(--button))] hover:bg-[hsl(var(--button))/0.9] text-[hsl(var(--button-foreground))] transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Apply Now
          </Link><br/>
          <Link
          href="/secondary"
          className="text-primary p-30"
    
          >
            Secondary
          </Link>
        </section>
      </main>
    </div>
  )
}
