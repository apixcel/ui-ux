import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white py-12 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-start space-y-4">
          <h3 className="text-lg font-bold">About</h3>
          <p>Learn more about our company and our mission.</p>
          <Link href="/" className="text-primary hover:underline">
            Read More
          </Link>
        </div>
        <div className="flex flex-col items-start space-y-4">
          <h3 className="text-lg font-bold">Services</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:underline">
                Web Design
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Web Development
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Digital Marketing
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start space-y-4">
          <h3 className="text-lg font-bold">Contact</h3>
          <p>Get in touch with us for more information.</p>
          <div className="flex space-x-4">
            <Link href="/" className="text-primary hover:underline">
              Email
            </Link>
            <Link href="/" className="text-primary hover:underline">
              Phone
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-sm">&copy; 2024 My Website. All rights reserved.</p>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
