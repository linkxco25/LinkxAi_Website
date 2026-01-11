export const homePage = `
  <!-- Hero Section -->
  <section id="home" class="hero-section pt-32 pb-20 relative overflow-hidden">
    <div class="container mx-auto px-6">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div class="text-white">
          <div class="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <i class="fas fa-sparkles text-purple-300"></i>
            <span class="text-sm">AI-Powered Business Growth Platform</span>
          </div>
          
          <h1 class="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Grow Your Business<br>
            with AI <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">Software</span>
          </h1>
          
          <p class="text-lg text-gray-300 mb-8">
            Manage marketing, sales, and customer service in one platform. Build relationships, close deals faster, and delight your customers with AI Email, SRM, and Data Mining.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4">
            <a href="/get-started" class="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg transition flex items-center justify-center space-x-2">
              <span>Get Started Free</span>
              <i class="fas fa-arrow-right"></i>
            </a>
            <button class="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-lg transition">
              Watch Demo
            </button>
          </div>
          
          <div class="flex items-center space-x-8 mt-12">
            <div>
              <div class="text-3xl font-bold">10K+</div>
              <div class="text-sm text-gray-400">Active Users</div>
            </div>
            <div>
              <div class="text-3xl font-bold">95%</div>
              <div class="text-sm text-gray-400">Satisfaction</div>
            </div>
            <div>
              <div class="text-3xl font-bold">3x</div>
              <div class="text-sm text-gray-400">Revenue Growth</div>
            </div>
          </div>
        </div>
        
        <div class="relative">
          <div class="relative z-10">
            <img src="/static/images/hero-dashboard.png" alt="Dashboard Analytics" class="rounded-2xl shadow-2xl">
            
            <!-- Floating Stats -->
            <div class="absolute -left-4 top-1/4 bg-white rounded-2xl shadow-xl p-4 animate-float">
              <div class="flex items-center space-x-3">
                <div class="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <i class="fas fa-chart-line text-purple-600"></i>
                </div>
                <div>
                  <div class="text-sm text-gray-500">Revenue</div>
                  <div class="text-xl font-bold text-green-600">+127%</div>
                </div>
              </div>
            </div>
            
            <div class="absolute -right-4 bottom-1/4 bg-white rounded-2xl shadow-xl p-4 animate-float" style="animation-delay: 0.5s;">
              <div class="flex items-center space-x-3">
                <div class="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <i class="fas fa-users text-purple-600"></i>
                </div>
                <div>
                  <div class="text-sm text-gray-500">AI Tasks</div>
                  <div class="text-xl font-bold text-purple-600">2.4K</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Wave Divider -->
    <div class="absolute bottom-0 left-0 right-0">
      <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
      </svg>
    </div>
  </section>
`;
