export const signinPage = `
  <style>
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }
    @keyframes pulse-glow {
      0%, 100% { opacity: 0.5; }
      50% { opacity: 1; }
    }
    .floating-shape {
      animation: float 6s ease-in-out infinite;
    }
    .floating-shape-delayed {
      animation: float 8s ease-in-out infinite 1s;
    }
    .pulse-circle {
      animation: pulse-glow 4s ease-in-out infinite;
    }
  </style>
  
  <section class="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-purple-700 to-purple-600 py-12 relative overflow-hidden">
    <!-- Animated background shapes -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="floating-shape absolute top-20 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      <div class="floating-shape-delayed absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
      <div class="pulse-circle absolute top-1/2 left-1/4 w-72 h-72 bg-pink-400/5 rounded-full blur-2xl"></div>
      
      <!-- Floating icons -->
      <div class="floating-shape absolute top-32 right-1/4 text-white/10">
        <i class="fas fa-envelope text-6xl"></i>
      </div>
      <div class="floating-shape-delayed absolute bottom-32 left-1/3 text-white/10">
        <i class="fas fa-chart-line text-7xl"></i>
      </div>
      <div class="pulse-circle absolute top-2/3 right-1/3 text-white/10">
        <i class="fas fa-users text-5xl"></i>
      </div>
    </div>
    
    <div class="container mx-auto px-6 relative z-10">
      <div class="max-w-md mx-auto bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl p-8 transform hover:scale-[1.02] transition-transform duration-300">
        <div class="text-center mb-8">
          <div class="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <i class="fas fa-link text-white text-3xl"></i>
          </div>
          <h1 class="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Welcome Back</h1>
          <p class="text-gray-600">Sign in to your Linkx-AI account</p>
        </div>
        
        <form class="space-y-6">
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <i class="fas fa-envelope text-gray-400"></i>
              </div>
              <input 
                type="email" 
                placeholder="you@example.com"
                class="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-600 focus:outline-none transition"
                required
              >
            </div>
          </div>
          
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Password</label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <i class="fas fa-lock text-gray-400"></i>
              </div>
              <input 
                type="password" 
                placeholder="••••••••"
                class="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-600 focus:outline-none transition"
                required
              >
            </div>
          </div>
          
          <div class="flex items-center justify-between">
            <label class="flex items-center">
              <input type="checkbox" class="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500">
              <span class="ml-2 text-sm text-gray-600">Remember me</span>
            </label>
            <a href="#" class="text-sm text-purple-600 hover:text-purple-700 font-medium">Forgot password?</a>
          </div>
          
          <button 
            type="submit" 
            class="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white py-3 rounded-lg transition font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Sign In
          </button>
        </form>
        
        <div class="mt-6 text-center">
          <p class="text-gray-600">
            Don't have an account? 
            <a href="/get-started" class="text-purple-600 hover:text-purple-700 font-semibold">Get Started Free</a>
          </p>
        </div>
        
        <div class="mt-8 pt-6 border-t border-gray-200">
          <p class="text-center text-sm text-gray-500 mb-4">Or continue with</p>
          <div class="grid grid-cols-3 gap-3">
            <button class="flex items-center justify-center px-4 py-3 border-2 border-gray-200 rounded-lg hover:border-purple-600 hover:bg-purple-50 transition transform hover:-translate-y-0.5">
              <i class="fab fa-google text-xl text-gray-600"></i>
            </button>
            <button class="flex items-center justify-center px-4 py-3 border-2 border-gray-200 rounded-lg hover:border-purple-600 hover:bg-purple-50 transition transform hover:-translate-y-0.5">
              <i class="fab fa-github text-xl text-gray-600"></i>
            </button>
            <button class="flex items-center justify-center px-4 py-3 border-2 border-gray-200 rounded-lg hover:border-purple-600 hover:bg-purple-50 transition transform hover:-translate-y-0.5">
              <i class="fab fa-linkedin text-xl text-gray-600"></i>
            </button>
          </div>
        </div>
        
        <!-- Trust badges -->
        <div class="mt-8 flex items-center justify-center space-x-4 text-xs text-gray-500">
          <div class="flex items-center space-x-1">
            <i class="fas fa-shield-halved text-purple-600"></i>
            <span>Secure Connection</span>
          </div>
          <div class="flex items-center space-x-1">
            <i class="fas fa-lock text-purple-600"></i>
            <span>SSL Encrypted</span>
          </div>
        </div>
      </div>
    </div>
  </section>
`;
