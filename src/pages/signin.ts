export const signinPage = `
  <section class="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-purple-700 to-purple-600 py-12">
    <div class="container mx-auto px-6">
      <div class="max-w-md mx-auto bg-white rounded-2xl shadow-2xl p-8">
        <div class="text-center mb-8">
          <div class="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center mx-auto mb-4">
            <i class="fas fa-link text-white text-3xl"></i>
          </div>
          <h1 class="text-3xl font-bold mb-2">Welcome Back</h1>
          <p class="text-gray-600">Sign in to your Linkx-AI account</p>
        </div>
        
        <form class="space-y-6">
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
            <input 
              type="email" 
              placeholder="you@example.com"
              class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-600 focus:outline-none transition"
              required
            >
          </div>
          
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Password</label>
            <input 
              type="password" 
              placeholder="••••••••"
              class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-600 focus:outline-none transition"
              required
            >
          </div>
          
          <div class="flex items-center justify-between">
            <label class="flex items-center">
              <input type="checkbox" class="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500">
              <span class="ml-2 text-sm text-gray-600">Remember me</span>
            </label>
            <a href="#" class="text-sm text-purple-600 hover:text-purple-700">Forgot password?</a>
          </div>
          
          <button 
            type="submit" 
            class="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg transition font-semibold"
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
            <button class="flex items-center justify-center px-4 py-2 border-2 border-gray-200 rounded-lg hover:border-purple-600 transition">
              <i class="fab fa-google text-xl"></i>
            </button>
            <button class="flex items-center justify-center px-4 py-2 border-2 border-gray-200 rounded-lg hover:border-purple-600 transition">
              <i class="fab fa-github text-xl"></i>
            </button>
            <button class="flex items-center justify-center px-4 py-2 border-2 border-gray-200 rounded-lg hover:border-purple-600 transition">
              <i class="fab fa-linkedin text-xl"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
`;
