import Link from "next/link";

export default function Footer() {
  return (
    <footer id="kontak" className="bg-gradient-to-b from-teal-200 to-teal-300 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Brilitopia
            </h3>
            <p className="text-gray-800 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 text-lg mb-4">Lorem ipsum</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-800 hover:text-teal-700 transition">
                  Lorem ipsum
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 text-lg mb-4">Lorem ipsum</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-800 hover:text-teal-700 transition">
                  Lorem ipsum
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-teal-400 text-center text-gray-800">
          <p>&copy; 2024 Brilitopia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}