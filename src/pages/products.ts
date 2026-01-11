export const productsPage = `
  <section class="hero-section py-20">
    <div class="container mx-auto px-6 text-center">
      <span class="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
        <span>Our Products</span>
      </span>
      
      <h1 class="text-5xl md:text-6xl font-bold mb-6 text-white">
        Powerful AI Tools to<br>
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">Transform Your Business</span>
      </h1>
      
      <p class="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
        Three cutting-edge products working together to automate your marketing, strengthen customer relationships, and unlock data-driven growth.
      </p>
    </div>
  </section>
  
  <section class="py-20 bg-gradient-to-b from-white to-purple-50">
    <div class="container mx-auto px-6">
      <!-- Linkx Mail -->
      <div class="mb-20 bg-gradient-to-br from-purple-50 to-white rounded-3xl p-8 md:p-12 shadow-xl">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div class="inline-flex items-center space-x-3 mb-4">
              <div class="w-14 h-14 bg-purple-600 rounded-2xl flex items-center justify-center">
                <i class="fas fa-envelope text-white text-2xl"></i>
              </div>
              <span class="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-semibold">Most Popular</span>
            </div>
            
            <h3 class="text-4xl font-bold mb-4">Linkx Mail</h3>
            <h4 class="text-2xl text-purple-600 font-semibold mb-4">Smart Email Marketing That Converts</h4>
            
            <p class="text-gray-600 mb-6 text-lg">
              Create personalized email campaigns powered by AI. Our intelligent system writes compelling subject lines, optimizes send times, and increases open rates by 40%.
            </p>
            
            <div class="bg-white rounded-xl p-6 mb-6 inline-block shadow-lg">
              <div class="flex items-center space-x-4">
                <i class="fas fa-clock text-purple-600 text-3xl"></i>
                <div>
                  <div class="text-3xl font-bold">20 hrs</div>
                  <div class="text-sm text-gray-500">Saved Per Week</div>
                </div>
              </div>
            </div>
            
            <div class="grid grid-cols-2 gap-4 mb-8">
              <div class="flex items-center space-x-2">
                <i class="fas fa-check text-purple-600"></i>
                <span class="text-gray-700">AI-generated content</span>
              </div>
              <div class="flex items-center space-x-2">
                <i class="fas fa-check text-purple-600"></i>
                <span class="text-gray-700">40% higher open rates</span>
              </div>
              <div class="flex items-center space-x-2">
                <i class="fas fa-check text-purple-600"></i>
                <span class="text-gray-700">Smart segmentation</span>
              </div>
              <div class="flex items-center space-x-2">
                <i class="fas fa-check text-purple-600"></i>
                <span class="text-gray-700">A/B testing automation</span>
              </div>
            </div>
            
            <div class="flex gap-4">
              <a href="/get-started" class="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition flex items-center space-x-2">
                <span>Get Started</span>
                <i class="fas fa-arrow-right"></i>
              </a>
              <a href="/pricing" class="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-6 py-3 rounded-lg transition">
                View Pricing
              </a>
            </div>
          </div>
          
          <div class="relative">
            <img src="/static/images/linkx-mail.png" alt="Linkx Mail" class="rounded-2xl shadow-2xl">
          </div>
        </div>
      </div>
      
      <!-- Linkx Mining -->
      <div class="mb-20 bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 md:p-12 shadow-xl">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="order-2 md:order-1 relative">
            <img src="/static/images/linkx-mining.png" alt="Linkx Mining" class="rounded-2xl shadow-2xl">
          </div>
          
          <div class="order-1 md:order-2">
            <div class="inline-flex items-center space-x-3 mb-4">
              <div class="w-14 h-14 bg-purple-600 rounded-2xl flex items-center justify-center">
                <i class="fas fa-chart-bar text-white text-2xl"></i>
              </div>
              <span class="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">AI Powered</span>
            </div>
            
            <h3 class="text-4xl font-bold mb-4">Linkx Mining</h3>
            <h4 class="text-2xl text-purple-600 font-semibold mb-4">Operations Management</h4>
            
            <p class="text-gray-600 mb-6 text-lg">
              Complete visibility and control over mining operations. Monitor performance, optimize workflows, and reduce downtime with real-time insights.
            </p>
            
            <div class="bg-white rounded-xl p-6 mb-6 inline-block shadow-lg">
              <div class="flex items-center space-x-4">
                <i class="fas fa-arrow-trend-up text-purple-600 text-3xl"></i>
                <div>
                  <div class="text-3xl font-bold">30%</div>
                  <div class="text-sm text-gray-500">Reduction in Downtime</div>
                </div>
              </div>
            </div>
            
            <div class="grid grid-cols-2 gap-4 mb-8">
              <div class="flex items-center space-x-2">
                <i class="fas fa-check text-purple-600"></i>
                <span class="text-gray-700">Real-time monitoring</span>
              </div>
              <div class="flex items-center space-x-2">
                <i class="fas fa-check text-purple-600"></i>
                <span class="text-gray-700">Predictive maintenance</span>
              </div>
              <div class="flex items-center space-x-2">
                <i class="fas fa-check text-purple-600"></i>
                <span class="text-gray-700">Performance analytics</span>
              </div>
              <div class="flex items-center space-x-2">
                <i class="fas fa-check text-purple-600"></i>
                <span class="text-gray-700">Workflow optimization</span>
              </div>
            </div>
            
            <div class="flex gap-4">
              <a href="/get-started" class="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition flex items-center space-x-2">
                <span>Get Started</span>
                <i class="fas fa-arrow-right"></i>
              </a>
              <a href="/pricing" class="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-6 py-3 rounded-lg transition">
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Linkx SRM -->
      <div class="bg-gradient-to-br from-pink-50 to-white rounded-3xl p-8 md:p-12 shadow-xl">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div class="inline-flex items-center space-x-3 mb-4">
              <div class="w-14 h-14 bg-purple-600 rounded-2xl flex items-center justify-center">
                <i class="fas fa-users text-white text-2xl"></i>
              </div>
              <span class="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm font-semibold">Enterprise Ready</span>
            </div>
            
            <h3 class="text-4xl font-bold mb-4">Linkx SRM</h3>
            <h4 class="text-2xl text-purple-600 font-semibold mb-4">Supplier Discovery</h4>
            
            <p class="text-gray-600 mb-6 text-lg">
              Find the perfect supplier in minutes, not days. Our AI-powered platform connects you with verified suppliers and streamlines your procurement process.
            </p>
            
            <div class="bg-white rounded-xl p-6 mb-6 inline-block shadow-lg">
              <div class="flex items-center space-x-4">
                <i class="fas fa-gauge-high text-purple-600 text-3xl"></i>
                <div>
                  <div class="text-3xl font-bold">90%</div>
                  <div class="text-sm text-gray-500">Faster Supplier Discovery</div>
                </div>
              </div>
            </div>
            
            <div class="grid grid-cols-2 gap-4 mb-8">
              <div class="flex items-center space-x-2">
                <i class="fas fa-check text-purple-600"></i>
                <span class="text-gray-700">AI supplier matching</span>
              </div>
              <div class="flex items-center space-x-2">
                <i class="fas fa-check text-purple-600"></i>
                <span class="text-gray-700">Instant verification</span>
              </div>
              <div class="flex items-center space-x-2">
                <i class="fas fa-check text-purple-600"></i>
                <span class="text-gray-700">Smart negotiations</span>
              </div>
              <div class="flex items-center space-x-2">
                <i class="fas fa-check text-purple-600"></i>
                <span class="text-gray-700">Automated onboarding</span>
              </div>
            </div>
            
            <div class="flex gap-4">
              <a href="/get-started" class="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition flex items-center space-x-2">
                <span>Get Started</span>
                <i class="fas fa-arrow-right"></i>
              </a>
              <a href="/pricing" class="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-6 py-3 rounded-lg transition">
                View Pricing
              </a>
            </div>
          </div>
          
          <div class="relative">
            <img src="/static/images/linkx-srm.png" alt="Linkx SRM" class="rounded-2xl shadow-2xl">
          </div>
        </div>
      </div>
    </div>
  </section>
`;
