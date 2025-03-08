import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-sm leading-relaxed">
              16, Araromi, Ikeshi, Elejigbo, <br />
              Obasanjo Farm, Ota, Ogun State
            </p>
            <p className="mt-2 text-sm font-medium">Phone: +234-702-562-5816</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about-us" className="hover:underline text-sm font-medium">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="hover:underline text-sm font-medium">
                  Admissions
                </Link>
              </li>
              <li>
                <Link href="/student-life" className="hover:underline text-sm font-medium">
                  Student Life
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-accent transition-colors duration-200">
                <span className="sr-only">Facebook</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
                  <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116c.729 0 1.326-.597 1.326-1.326V1.326C24 .597 23.403 0 22.675 0z" />
                </svg>
              </a>
              <a href="https://wa.link/8a5hjz" className="hover:text-accent transition-colors duration-200">
                <span className="sr-only">Whatsapp</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.116 1.516 5.855L0 24l6.293-1.516A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.123 0-4.116-.553-5.855-1.516L2 22l1.516-4.145C2.553 16.116 2 14.123 2 12 2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm4.293-7.707l-1.414 1.414a1 1 0 01-1.414 0l-1.293-1.293a1 1 0 00-1.414 0l-1.293 1.293a1 1 0 01-1.414 0l-1.414-1.414a1 1 0 010-1.414l1.293-1.293a1 1 0 000-1.414L7.293 9.293a1 1 0 010-1.414l1.414-1.414a1 1 0 011.414 0l1.293 1.293a1 1 0 001.414 0l1.293-1.293a1 1 0 011.414 0l1.414 1.414a1 1 0 010 1.414l-1.293 1.293a1 1 0 000 1.414l1.293 1.293a1 1 0 010 1.414z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/therockdominionschool?igsh=YzljYTk1ODg3Zg==" className="hover:text-accent transition-colors duration-200">
                <span className="sr-only">Instagram</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.309.975.975 1.247 2.242 1.309 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.309 3.608-.975.975-2.242 1.247-3.608 1.309-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.309-.975-.975-1.247-2.242-1.309-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.309-3.608.975-.975 2.242-1.247 3.608-1.309 1.266-.058 1.646-.07 4.85-.07zm0-2.163C8.756 0 8.332.012 7.052.07 5.771.128 4.548.334 3.465 1.417 2.382 2.5 2.176 3.723 2.118 5.004.06 6.284.048 6.708.048 12s.012 5.716.07 6.996c.058 1.281.264 2.504 1.347 3.587 1.083 1.083 2.306 1.289 3.587 1.347 1.28.058 1.704.07 6.996.07s5.716-.012 6.996-.07c1.281-.058 2.504-.264 3.587-1.347 1.083-1.083 1.289-2.306 1.347-3.587.058-1.28.07-1.704.07-6.996s-.012-5.716-.07-6.996c-.058-1.281-.264-2.504-1.347-3.587-1.083-1.083-2.306-1.289-3.587-1.347-1.28-.058-1.704-.07-6.996-.07zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                </svg>
              </a>
              <a href="https://youtube.com/@therockdominionschool?si=otJKM3QSLcVMO-n8" className="hover:text-accent transition-colors duration-200">
                <span className="sr-only">Youtube</span>
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
                  <path d="M19.615 3.184c-1.091-.272-5.455-.272-5.455-.272s-4.364 0-5.455.272c-1.091.272-1.955 1.091-2.227 2.182-.272 1.091-.272 3.364-.272 3.364s0 2.273.272 3.364c.272 1.091 1.136 1.91 2.227 2.182 1.091.272 5.455.272 5.455.272s4.364 0 5.455-.272c1.091-.272 1.955-1.091 2.227-2.182.272-1.091.272-3.364.272-3.364s0-2.273-.272-3.364c-.272-1.091-1.136-1.91-2.227-2.182zm-7.615 9.091v-6.182l5.455 3.091-5.455 3.091z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center border-t border-primary-foreground/20 pt-8">
          <p className="text-sm">&copy; 2025 The Rock Dominion. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;