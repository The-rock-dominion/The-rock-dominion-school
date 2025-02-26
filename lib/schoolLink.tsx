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
export default SchoolLink