import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white py-12 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-start space-y-4">
          <h3 className="text-lg font-bold">DesignSolution</h3>
          <p>Learn more about our company and our mission.</p>
          <Link href="/" className="hover:underline">
            Read More
          </Link>
        </div>
        <div className="flex flex-col items-start space-y-4">
          <h3 className="text-lg font-bold">Services</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/services" className="hover:underline">
                Services
              </Link>
            </li>
            <li>
              <Link href="/project-showcase" className="hover:underline">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:underline">
                Pricing
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start space-y-4">
          <h3 className="text-lg font-bold">Contact</h3>
          <p>Get in touch with us for more information.</p>
          <div className="flex space-x-4">
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-sm">&copy; 2024 My Website. All rights reserved.</p>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/privacy-policy" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:underline">
                Terms of Service
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
