import WaveDivider from "@/components/waveDivider"
import Image from "next/image"
import Link from "next/link"

const secondarySchoolAspects = [
  {
    title: "Academic Excellence",
    image: "/SS class.jpg",
    description: "Rigorous curriculum and dedicated faculty",
  },
  {
    title: "Sports Programs",
    image: "/Happy student.jpg",
    description: "Diverse athletic opportunities for all students",
  },
  {
    title: "Arts and Culture",
    image: "/Cultural day 4.jpg",
    description: "Vibrant arts scene and cultural activities",
  },
  {
    title: "Science and Technology",
    image: "/school building 4.jpg",
    description: "State-of-the-art labs and innovative programs",
  },
  {
    title: "Community Service",
    image: "/secondar-award.jpg",
    description: "Engaging students in local and global initiatives",
  },
  {
    title: "Student Life",
    image: "/teacher secondary.jpg",
    description: "Rich extracurricular activities and events",
  },
]

export default function SecondarySchoolPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="relative bg-blue text-primary-foreground py-40">
        <div className="absolute inset-0">
          <Image src="/secondary banner.jpg" alt="Header Background" layout="fill" objectFit="cover" className="opacity-50" />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">The Rock Dominion Secondary School</h1>
          <p className="text-xl md:text-2xl drop-shadow-md">Empowering minds, Shaping futures</p>
        </div>
      </header>
      <WaveDivider />
      <main className="container mx-auto px-4 py-12">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Welcome to The Rock Dominion Secondary</h2>
          <p className="text-lg mb-4">
            At The Rock Dominion Secondary School, we are committed to providing a nurturing and challenging environment where
            students can thrive academically, socially, and personally. Our dedicated faculty and state-of-the-art
            facilities ensure that every student receives a world-class education.
          </p>
          <p className="text-lg">
            Explore the various aspects of our school below and discover The Rock Dominion Secondary difference.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {secondarySchoolAspects.map((aspect, index) => (
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
            className="inline-flex px-6 py-3 rounded-md text-lg font-semibold bg-blue-500 hover:bg-primary/90 text-primary-foreground transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Apply Now
          </Link> <br/>
          <Link
          href="/primary"
          className="text-primary pt-10"
    
          >
           
           Primary
          </Link>
        </section>
      </main>
    </div>
  )
}