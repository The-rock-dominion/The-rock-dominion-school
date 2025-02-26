import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p>123 Riverside Lane</p>
          <p>Riverside City, RC 12345</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul>
            <li>
              <Link href="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/admissions" className="hover:underline">
                Admissions
              </Link>
            </li>
            <li>
              <Link href="/events" className="hover:underline">
                Events
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-accent">
              Facebook
            </a>
            <a href="#" className="hover:text-accent">
              Twitter
            </a>
            <a href="#" className="hover:text-accent">
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>&copy; 2025 The Rock Dominion. All rights reserved.</p>
      </div>
    </div>
  </footer>

   

  )
}

export default Footer
