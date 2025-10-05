import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-12 h-12 bg-yellow-200 rounded-full flex items-center justify-center border-4 border-blue-300">
            <span className="text-2xl">⭐</span>
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
            Brilitopia
          </span>
        </Link>
        
        <div className="hidden md:flex items-center gap-6">
          <Link href="#" className="px-6 py-2 bg-teal-300 text-gray-800 font-semibold rounded hover:bg-teal-400 transition">
            Beranda
          </Link>
          <Link href="#tentang" className="text-gray-800 font-semibold hover:text-teal-600 transition">
            Tentang
          </Link>
          <Link href="#produk" className="text-gray-800 font-semibold hover:text-teal-600 transition">
            Produk
          </Link>
          <Link href="#kontak" className="text-gray-800 font-semibold hover:text-teal-600 transition">
            Kontak
          </Link>
          <button className="p-2 hover:bg-gray-100 rounded-full transition">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}