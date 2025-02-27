import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p>  16, Araromi, Ikeshi, Elejigbo, </p>
          <p>Obasanjo Farm, Ota, Ogun State</p>
          <p>Phone:+2347025625816</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul>
            <li>
              <Link href="/about-us" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/admissions" className="hover:underline">
                Admissions
              </Link>
            </li>
            <li>
              <Link href="/student-life" className="hover:underline">
               Students Life
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
