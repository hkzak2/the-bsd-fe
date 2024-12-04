import React from 'react';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background py-32">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 w-[500px] h-[500px] bg-[#ff3b3b]/20 dark:bg-[#ff3b3b]/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-1/2 w-[500px] h-[500px] bg-[#4CAF50]/20 dark:bg-[#4CAF50]/20 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <h1 className="text-6xl md:text-8xl font-bold">
            <span className="text-gradient">Boycott</span>
            <br />
            Israeli Tech
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            "You don't need to be Muslim to stand up for Palestine.
            <br />You just need to be human."
          </p>
          
          <div className="flex justify-center gap-6">
            <div className="group cursor-pointer">
              <div className="w-24 h-24 rounded-2xl card-gradient p-6 flex items-center justify-center mb-2">
                <span className="text-3xl group-hover:scale-110 transition-transform">🔍</span>
              </div>
              <span className="text-sm text-muted-foreground">Search</span>
            </div>
            
            <div className="group cursor-pointer">
              <div className="w-24 h-24 rounded-2xl card-gradient p-6 flex items-center justify-center mb-2">
                <span className="text-3xl group-hover:scale-110 transition-transform">📱</span>
              </div>
              <span className="text-sm text-muted-foreground">Companies</span>
            </div>
            
            <div className="group cursor-pointer">
              <div className="w-24 h-24 rounded-2xl card-gradient p-6 flex items-center justify-center mb-2">
                <span className="text-3xl group-hover:scale-110 transition-transform">💪</span>
              </div>
              <span className="text-sm text-muted-foreground">Take Action</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}