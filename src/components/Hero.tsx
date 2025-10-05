export default function Hero() {
  return (
    <section className="pt-32 pb-16 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Lorem ipsum dolor sit
          </h2>
          <h1 className="text-7xl font-bold mb-8 bg-gradient-to-r from-blue-300 via-purple-300 to-yellow-200 bg-clip-text text-transparent leading-tight">
            Brilitopia
          </h1>
          <p className="text-gray-800 leading-relaxed max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        
        <div className="relative flex justify-center items-center min-h-[500px]">
          {/* Background glow blob */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[450px] h-[450px] bg-gradient-to-br from-yellow-100 via-yellow-200 to-yellow-100 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] blur-2xl opacity-50 animate-blob"></div>
          </div>
          
          {/* Decorative sparkles */}
          <div className="absolute top-16 left-20 text-yellow-200 text-4xl animate-pulse">✨</div>
          <div className="absolute top-8 right-32 text-yellow-300 text-3xl animate-pulse delay-100">✨</div>
          <div className="absolute bottom-24 left-12 text-yellow-200 text-2xl animate-pulse delay-200">✨</div>
          <div className="absolute top-32 right-16 text-yellow-300 text-5xl animate-pulse">✦</div>
          <div className="absolute bottom-32 right-20 text-yellow-200 text-3xl animate-pulse delay-150">✦</div>
          
          {/* Main star container */}
          <div className="relative w-80 h-80 flex items-center justify-center">
            {/* Orbiting circle with animated balls */}
            <div className="absolute w-72 h-72 animate-spin-slow">
              <svg className="w-full h-full" viewBox="0 0 300 300">
                {/* Blue orbital ring */}
                <circle
                  cx="150"
                  cy="150"
                  r="140"
                  fill="none"
                  stroke="#93C5FD"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
              </svg>
              
              {/* Orbiting balls */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-5 h-5 bg-purple-400 rounded-full shadow-lg"></div>
              </div>
              <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2">
                <div className="w-4 h-4 bg-teal-400 rounded-full shadow-lg"></div>
              </div>
              <div className="absolute bottom-8 right-8">
                <div className="w-5 h-5 bg-blue-300 rounded-full shadow-lg"></div>
              </div>
            </div>
            
            {/* Star shape with brain inside */}
            <div className="relative z-10">
              <svg className="w-64 h-64" viewBox="0 0 200 200">
                {/* Star shape */}
                <path
                  d="M100,20 L115,70 L165,75 L125,110 L135,160 L100,135 L65,160 L75,110 L35,75 L85,70 Z"
                  fill="#FDE047"
                  className="drop-shadow-xl"
                />
                
                {/* Brain icon in center */}
                <g transform="translate(100, 100)">
                  <path
                    d="M-20,-25 Q-25,-30 -25,-35 Q-25,-42 -18,-42 Q-12,-42 -10,-36 Q-8,-42 -2,-42 Q5,-42 5,-35 Q5,-30 0,-25 L0,-10 Q0,-5 -5,-2 Q-10,0 -10,5 Q-10,10 -15,10 Q-20,10 -20,5 Q-20,0 -25,-2 Q-30,-5 -30,-10 L-20,-25 Z
                       M2,-25 Q-3,-30 -3,-35 Q-3,-42 3,-42 Q10,-42 12,-36 Q14,-42 20,-42 Q27,-42 27,-35 Q27,-30 22,-25 L22,-10 Q22,-5 17,-2 Q12,0 12,5 Q12,10 7,10 Q2,10 2,5 Q2,0 -3,-2 Q-8,-5 -8,-10 L2,-25 Z"
                    fill="white"
                    opacity="0.9"
                  />
                  <circle cx="-12" cy="-28" r="2" fill="white" opacity="0.9"/>
                  <circle cx="12" cy="-28" r="2" fill="white" opacity="0.9"/>
                  <path d="M-15,-20 Q-10,-15 -5,-20" stroke="white" strokeWidth="1.5" fill="none" opacity="0.9"/>
                  <path d="M5,-20 Q10,-15 15,-20" stroke="white" strokeWidth="1.5" fill="none" opacity="0.9"/>
                </g>
              </svg>
            </div>
            
            {/* Extra decorative stars around */}
            <div className="absolute top-20 right-4 text-blue-200 text-2xl animate-pulse delay-100">✦</div>
            <div className="absolute bottom-16 left-8 text-purple-200 text-xl animate-pulse">✦</div>
          </div>
        </div>
      </div>
    </section>
  );
}