import Image from "next/image"
import Link from "next/link"

const primarySchoolAspects = [
  {
    title: "Early Learning",
    image: "/primary-early-learning.jpg",
    description: "Nurturing young minds with engaging activities",
  },
  {
    title: "Literacy & Numeracy",
    image: "/primary-literacy.jpg",
    description: "Building strong foundations in reading and math",
  },
  { title: "Creative Arts", image: "/primary-arts.jpg", description: "Fostering creativity through various art forms" },
  {
    title: "Physical Education",
    image: "/primary-pe.jpg",
    description: "Promoting health and teamwork through sports",
  },
  {
    title: "Science Discovery",
    image: "/primary-science.jpg",
    description: "Hands-on experiments and nature exploration",
  },
  { title: "Social Skills", image: "/primary-social.jpg", description: "Developing empathy and communication skills" },
]

export default function PrimarySchoolPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Riverside Primary School</h1>
          <p className="text-xl md:text-2xl">Nurturing curiosity, Inspiring growth</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Welcome to Riverside Primary</h2>
          <p className="text-lg mb-4">
            At Riverside Primary School, we create a warm and stimulating environment where young learners can explore,
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
          </Link>
        </section>
      </main>
    </div>
  )
}

