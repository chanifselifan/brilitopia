export default function ProductsSection() {
  return (
    <section id="produk" className="py-16 px-6 bg-gradient-to-b from-yellow-50 to-yellow-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">PRODUK</h2>
            <p className="text-gray-800 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing eli
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-200 to-blue-300 rounded-[3rem] p-8 flex flex-col items-center shadow-lg hover:scale-105 transition-transform duration-300">
            <div className="w-full aspect-[3/4] bg-white rounded-2xl shadow-md mb-6 overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <div className="grid grid-cols-2 gap-2 w-full h-full">
                  <div className="bg-gray-800 rounded-lg"></div>
                  <div className="bg-gradient-to-br from-orange-300 to-red-400 rounded-lg"></div>
                </div>
              </div>
            </div>
            <h3 className="text-white text-2xl font-bold text-center drop-shadow-md">
              Buku Cerita<br />Anak Edukatif
            </h3>
          </div>
          
          <div className="bg-gradient-to-br from-purple-300 to-purple-400 rounded-[3rem] p-8 flex flex-col items-center shadow-lg hover:scale-105 transition-transform duration-300">
            <div className="w-full aspect-[3/4] bg-gray-900 rounded-2xl shadow-md mb-6 overflow-hidden flex items-center justify-center">
              <div className="w-4/5 h-4/5 bg-white rounded-xl"></div>
            </div>
            <h3 className="text-white text-2xl font-bold text-center drop-shadow-md">
              Video Cerita<br />Anak Edukatif
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}