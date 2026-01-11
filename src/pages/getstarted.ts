export const getstartedPage = `
  <section class="min-h-screen bg-gradient-to-br from-purple-900 via-purple-700 to-purple-600 py-12">
    <div class="container mx-auto px-6">
      <div class="max-w-2xl mx-auto">
        <div class="text-center mb-8">
          <div class="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-4">
            <i class="fas fa-rocket text-white text-3xl"></i>
          </div>
          <h1 class="text-4xl md:text-5xl font-bold mb-4 text-white">Get Started Free</h1>
          <p class="text-xl text-gray-200">Join 10,000+ businesses using Linkx-AI</p>
        </div>
        
        <div class="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          <form class="space-y-6">
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                <input 
                  type="text" 
                  placeholder="John"
                  class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-600 focus:outline-none transition"
                  required
                >
              </div>
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                <input 
                  type="text" 
                  placeholder="Doe"
                  class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-600 focus:outline-none transition"
                  required
                >
              </div>
            </div>
            
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Work Email</label>
              <input 
                type="email" 
                placeholder="you@company.com"
                class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-600 focus:outline-none transition"
                required
              >
            </div>
            
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Company Name</label>
              <input 
                type="text" 
                placeholder="Your Company Inc."
                class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-600 focus:outline-none transition"
                required
              >
            </div>
            
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Company Size</label>
              <select class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-600 focus:outline-none transition">
                <option>1-10 employees</option>
                <option>11-50 employees</option>
                <option>51-200 employees</option>
                <option>201-500 employees</option>
                <option>501+ employees</option>
              </select>
            </div>
            
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Password</label>
              <input 
                type="password" 
                placeholder="Create a secure password"
                class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-600 focus:outline-none transition"
                required
              >
              <p class="text-sm text-gray-500 mt-1">Must be at least 8 characters</p>
            </div>
            
            <div class="flex items-start space-x-3">
              <input type="checkbox" class="w-5 h-5 mt-1 text-purple-600 border-gray-300 rounded focus:ring-purple-500" required>
              <label class="text-sm text-gray-600">
                I agree to the <a href="#" class="text-purple-600 hover:text-purple-700 font-semibold">Terms of Service</a> and <a href="#" class="text-purple-600 hover:text-purple-700 font-semibold">Privacy Policy</a>
              </label>
            </div>
            
            <button 
              type="submit" 
              class="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-lg transition font-semibold text-lg"
            >
              Start Your Free Trial
            </button>
          </form>
          
          <div class="mt-6 text-center">
            <p class="text-gray-600">
              Already have an account? 
              <a href="/signin" class="text-purple-600 hover:text-purple-700 font-semibold">Sign In</a>
            </p>
          </div>
          
          <div class="mt-8 pt-6 border-t border-gray-200">
            <div class="grid grid-cols-3 gap-4 text-center">
              <div>
                <i class="fas fa-check-circle text-green-500 text-2xl mb-2"></i>
                <p class="text-sm text-gray-600">14-day free trial</p>
              </div>
              <div>
                <i class="fas fa-credit-card text-green-500 text-2xl mb-2"></i>
                <p class="text-sm text-gray-600">No credit card</p>
              </div>
              <div>
                <i class="fas fa-times-circle text-green-500 text-2xl mb-2"></i>
                <p class="text-sm text-gray-600">Cancel anytime</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="mt-8 text-center">
          <p class="text-white mb-4">Trusted by industry leaders</p>
          <div class="flex items-center justify-center space-x-8 opacity-70">
            <i class="fab fa-microsoft text-white text-3xl"></i>
            <i class="fab fa-google text-white text-3xl"></i>
            <i class="fab fa-amazon text-white text-3xl"></i>
            <i class="fab fa-apple text-white text-3xl"></i>
          </div>
        </div>
      </div>
    </div>
  </section>
`;
