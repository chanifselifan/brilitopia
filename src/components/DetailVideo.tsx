export default function DetailVideo() {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-purple-100 to-purple-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative flex justify-center order-2 md:order-1">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-300 to-purple-400 rounded-full blur-3xl opacity-60"></div>
            <div className="relative w-96 h-96 bg-gradient-to-br from-purple-300 to-purple-400 rounded-full flex items-center justify-center">
              <div className="absolute top-8 left-12 w-32 h-32 bg-yellow-300 rounded-3xl flex items-center justify-center shadow-lg animate-bounce">
                <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-4xl">🍪</span>
                </div>
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-orange-400 rounded-full"></div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-yellow-500 rounded-full"></div>
              </div>
              
              <div className="relative w-72 h-80 bg-gray-900 rounded-2xl shadow-2xl overflow-hidden flex items-center justify-center">
                <div className="w-5/6 h-5/6 bg-white rounded-xl overflow-hidden">
                  <div className="w-full h-2/3 bg-gradient-to-br from-green-400 to-blue-500"></div>
                  <div className="p-3 space-y-2">
                    <div className="h-2 bg-gray-300 rounded w-full"></div>
                    <div className="h-2 bg-gray-300 rounded w-4/5"></div>
                    <div className="h-2 bg-gray-300 rounded w-3/5"></div>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-12 right-8 w-28 h-28 bg-pink-300 rounded-3xl flex items-center justify-center shadow-lg animate-bounce delay-150">
                <div className="w-16 h-16 bg-pink-400 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🧁</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="inline-block bg-purple-400 rounded-full px-8 py-3 mb-6">
              <h2 className="text-2xl font-bold text-white">
                Video Cerita<br />Anak Edukatif
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
              Tonton Sekarang
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}