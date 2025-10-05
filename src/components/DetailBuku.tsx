export default function DetailBuku() {
  return (
    <section className="py-16 px-6 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-teal-200 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-teal-300 rounded-full px-8 py-3 mb-6">
              <h2 className="text-2xl font-bold text-white">
                Buku Cerita<br />Anak Edukatif
              </h2>
            </div>
            
            <p className="text-gray-800 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing eli
            </p>
            
            <div className="flex flex-wrap gap-4 mb-6">
              <span className="font-bold text-gray-900">Lorem ipsum</span>
              <span className="font-bold text-gray-900">Lorem ipsum</span>
              <span className="font-bold text-gray-900">Lorem ipsum</span>
            </div>
            
            <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-8 py-3 rounded-lg transition-colors shadow-md">
              Beli Sekarang
            </button>
          </div>
          
          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-200 to-teal-300 rounded-full blur-3xl opacity-60"></div>
            <div className="relative w-96 h-96 bg-gradient-to-br from-teal-200 to-teal-300 rounded-full flex items-center justify-center">
              <div className="absolute bottom-8 left-12 w-32 h-32 bg-yellow-300 rounded-3xl flex items-center justify-center shadow-lg animate-bounce">
                <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-4xl">🍪</span>
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-orange-400 rounded-full"></div>
              </div>
              
              <div className="relative w-72 h-80 bg-white rounded-2xl shadow-2xl overflow-hidden">
                <div className="grid grid-cols-2 gap-2 p-4 h-full">
                  <div className="bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg"></div>
                  <div className="bg-gradient-to-br from-orange-300 via-red-400 to-orange-500 rounded-lg"></div>
                </div>
              </div>
              
              <div className="absolute bottom-4 right-8 w-28 h-28 bg-pink-300 rounded-3xl flex items-center justify-center shadow-lg animate-bounce delay-150">
                <div className="w-16 h-16 bg-pink-400 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🧁</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}