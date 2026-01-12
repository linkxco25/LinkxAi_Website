export const servicesPage = `
  <section class="hero-section py-20">
    <div class="container mx-auto px-6 text-center">
      <span class="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
        <span>Our Services</span>
      </span>
      
      <h1 class="text-5xl md:text-6xl font-bold mb-6 text-white">
        Everything You Need to<br>
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">Scale Your Business</span>
      </h1>
      
      <p class="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
        Powerful AI-driven tools designed to automate your workflow, enhance customer relationships, and unlock growth opportunities.
      </p>
    </div>
  </section>
  
  <section class="py-20 bg-gradient-to-b from-white to-purple-50">
    <div class="container mx-auto px-6">
      <div class="grid md:grid-cols-2 gap-8 mb-16">
        <div class="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8 hover:shadow-xl transition">
          <div class="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-6">
            <i class="fas fa-envelope text-white text-3xl"></i>
          </div>
          <h3 class="text-3xl font-bold mb-4">AI Email Marketing</h3>
          <p class="text-gray-600 mb-6 text-lg">
            Craft personalized emails that convert. Our AI writes, optimizes, and sends at the perfect time for maximum engagement.
          </p>
          <ul class="space-y-3 mb-6">
            <li class="flex items-center space-x-3">
              <i class="fas fa-check-circle text-purple-600"></i>
              <span>AI-generated subject lines and content</span>
            </li>
            <li class="flex items-center space-x-3">
              <i class="fas fa-check-circle text-purple-600"></i>
              <span>Optimal send time prediction</span>
            </li>
            <li class="flex items-center space-x-3">
              <i class="fas fa-check-circle text-purple-600"></i>
              <span>Advanced segmentation</span>
            </li>
            <li class="flex items-center space-x-3">
              <i class="fas fa-check-circle text-purple-600"></i>
              <span>A/B testing automation</span>
            </li>
          </ul>
          <a href="/products" class="text-purple-600 font-semibold inline-flex items-center space-x-2 hover:underline">
            <span>Learn more</span>
            <i class="fas fa-arrow-right"></i>
          </a>
        </div>
        
        <div class="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 hover:shadow-xl transition">
          <div class="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-6">
            <i class="fas fa-users text-white text-3xl"></i>
          </div>
          <h3 class="text-3xl font-bold mb-4">Smart Relationship Management</h3>
          <p class="text-gray-600 mb-6 text-lg">
            Go beyond traditional CRM. Our SRM uses AI to predict customer needs and automate relationship nurturing.
          </p>
          <ul class="space-y-3 mb-6">
            <li class="flex items-center space-x-3">
              <i class="fas fa-check-circle text-purple-600"></i>
              <span>Predictive customer insights</span>
            </li>
            <li class="flex items-center space-x-3">
              <i class="fas fa-check-circle text-purple-600"></i>
              <span>Automated follow-ups</span>
            </li>
            <li class="flex items-center space-x-3">
              <i class="fas fa-check-circle text-purple-600"></i>
              <span>360° customer view</span>
            </li>
            <li class="flex items-center space-x-3">
              <i class="fas fa-check-circle text-purple-600"></i>
              <span>Smart task prioritization</span>
            </li>
          </ul>
          <a href="/products" class="text-purple-600 font-semibold inline-flex items-center space-x-2 hover:underline">
            <span>Learn more</span>
            <i class="fas fa-arrow-right"></i>
          </a>
        </div>
        
        <div class="bg-gradient-to-br from-pink-50 to-white rounded-2xl p-8 hover:shadow-xl transition">
          <div class="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-6">
            <i class="fas fa-chart-line text-white text-3xl"></i>
          </div>
          <h3 class="text-3xl font-bold mb-4">Data Mining & Insights</h3>
          <p class="text-gray-600 mb-6 text-lg">
            Uncover hidden patterns in your data. Extract actionable insights that drive smarter business decisions.
          </p>
          <ul class="space-y-3 mb-6">
            <li class="flex items-center space-x-3">
              <i class="fas fa-check-circle text-purple-600"></i>
              <span>Real-time analytics dashboards</span>
            </li>
            <li class="flex items-center space-x-3">
              <i class="fas fa-check-circle text-purple-600"></i>
              <span>Pattern recognition</span>
            </li>
            <li class="flex items-center space-x-3">
              <i class="fas fa-check-circle text-purple-600"></i>
              <span>Predictive forecasting</span>
            </li>
            <li class="flex items-center space-x-3">
              <i class="fas fa-check-circle text-purple-600"></i>
              <span>Custom reports</span>
            </li>
          </ul>
          <a href="/products" class="text-purple-600 font-semibold inline-flex items-center space-x-2 hover:underline">
            <span>Learn more</span>
            <i class="fas fa-arrow-right"></i>
          </a>
        </div>
        
        <div class="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 hover:shadow-xl transition">
          <div class="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-6">
            <i class="fas fa-robot text-white text-3xl"></i>
          </div>
          <h3 class="text-3xl font-bold mb-4">Workflow Automation</h3>
          <p class="text-gray-600 mb-6 text-lg">
            Eliminate repetitive tasks. Build powerful automation workflows that save hours every week.
          </p>
          <ul class="space-y-3 mb-6">
            <li class="flex items-center space-x-3">
              <i class="fas fa-check-circle text-purple-600"></i>
              <span>Visual workflow builder</span>
            </li>
            <li class="flex items-center space-x-3">
              <i class="fas fa-check-circle text-purple-600"></i>
              <span>100+ integrations</span>
            </li>
            <li class="flex items-center space-x-3">
              <i class="fas fa-check-circle text-purple-600"></i>
              <span>Conditional logic</span>
            </li>
            <li class="flex items-center space-x-3">
              <i class="fas fa-check-circle text-purple-600"></i>
              <span>Scheduled automation</span>
            </li>
          </ul>
          <a href="/products" class="text-purple-600 font-semibold inline-flex items-center space-x-2 hover:underline">
            <span>Learn more</span>
            <i class="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
      
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold mb-4">Why Choose Linkx-AI Services?</h2>
        <p class="text-gray-600 text-lg max-w-3xl mx-auto mb-12">
          We combine cutting-edge technology with exceptional support to help your business thrive.
        </p>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div class="bg-purple-50 rounded-xl p-6 text-center">
            <i class="fas fa-sparkles text-purple-600 text-4xl mb-3"></i>
            <div class="font-bold text-lg">AI-Powered</div>
            <p class="text-sm text-gray-600 mt-2">Advanced AI algorithms</p>
          </div>
          <div class="bg-blue-50 rounded-xl p-6 text-center">
            <i class="fas fa-bolt text-blue-600 text-4xl mb-3"></i>
            <div class="font-bold text-lg">Lightning Fast</div>
            <p class="text-sm text-gray-600 mt-2">Real-time processing</p>
          </div>
          <div class="bg-pink-50 rounded-xl p-6 text-center">
            <i class="fas fa-shield-halved text-pink-600 text-4xl mb-3"></i>
            <div class="font-bold text-lg">Enterprise Security</div>
            <p class="text-sm text-gray-600 mt-2">Bank-level encryption</p>
          </div>
          <div class="bg-green-50 rounded-xl p-6 text-center">
            <i class="fas fa-chart-bar text-green-600 text-4xl mb-3"></i>
            <div class="font-bold text-lg">Advanced Analytics</div>
            <p class="text-sm text-gray-600 mt-2">Deep insights</p>
          </div>
        </div>
      </div>
      
      <!-- Service Benefits Section -->
      <div class="bg-gradient-to-br from-purple-50 via-white to-blue-50 rounded-3xl p-8 md:p-12 mb-16">
        <h2 class="text-3xl font-bold mb-8 text-center">Service Benefits</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="w-20 h-20 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
              <i class="fas fa-clock text-purple-600 text-3xl"></i>
            </div>
            <h3 class="font-bold text-xl mb-2">Save Time</h3>
            <p class="text-gray-600">Automate repetitive tasks and free up 20+ hours per week for strategic work that drives growth.</p>
          </div>
          <div class="text-center">
            <div class="w-20 h-20 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
              <i class="fas fa-dollar-sign text-blue-600 text-3xl"></i>
            </div>
            <h3 class="font-bold text-xl mb-2">Reduce Costs</h3>
            <p class="text-gray-600">Cut operational costs by 30-40% through intelligent automation and optimized workflows.</p>
          </div>
          <div class="text-center">
            <div class="w-20 h-20 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
              <i class="fas fa-rocket text-green-600 text-3xl"></i>
            </div>
            <h3 class="font-bold text-xl mb-2">Accelerate Growth</h3>
            <p class="text-gray-600">Scale faster with AI-powered insights and automation that grows with your business needs.</p>
          </div>
        </div>
      </div>
      
      <!-- Integration Section -->
      <div class="mb-16">
        <h2 class="text-3xl font-bold mb-8 text-center">Seamless Integrations</h2>
        <p class="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Connect Linkx-AI with your favorite tools and platforms. Our services work seamlessly with 100+ popular business applications.
        </p>
        <div class="grid grid-cols-3 md:grid-cols-6 gap-6">
          <div class="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition flex items-center justify-center">
            <i class="fab fa-google text-4xl text-gray-400"></i>
          </div>
          <div class="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition flex items-center justify-center">
            <i class="fab fa-microsoft text-4xl text-gray-400"></i>
          </div>
          <div class="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition flex items-center justify-center">
            <i class="fab fa-salesforce text-4xl text-gray-400"></i>
          </div>
          <div class="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition flex items-center justify-center">
            <i class="fab fa-slack text-4xl text-gray-400"></i>
          </div>
          <div class="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition flex items-center justify-center">
            <i class="fab fa-hubspot text-4xl text-gray-400"></i>
          </div>
          <div class="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition flex items-center justify-center">
            <i class="fab fa-stripe text-4xl text-gray-400"></i>
          </div>
        </div>
      </div>
      
      <!-- Customer Success Stories -->
      <div class="bg-purple-50 rounded-3xl p-8 md:p-12">
        <h2 class="text-3xl font-bold mb-8 text-center">Success Stories</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white rounded-xl p-6">
            <div class="mb-4">
              <span class="text-4xl font-bold text-purple-600">200%</span>
              <p class="text-gray-600 mt-2">Increase in qualified leads within first quarter</p>
            </div>
            <p class="text-sm text-gray-500 italic">"Linkx-AI transformed our entire sales process"</p>
          </div>
          <div class="bg-white rounded-xl p-6">
            <div class="mb-4">
              <span class="text-4xl font-bold text-purple-600">35%</span>
              <p class="text-gray-600 mt-2">Reduction in operational downtime</p>
            </div>
            <p class="text-sm text-gray-500 italic">"The data mining capabilities are game-changing"</p>
          </div>
          <div class="bg-white rounded-xl p-6">
            <div class="mb-4">
              <span class="text-4xl font-bold text-purple-600">90%</span>
              <p class="text-gray-600 mt-2">Faster supplier discovery</p>
            </div>
            <p class="text-sm text-gray-500 italic">"Found qualified suppliers in hours instead of weeks"</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <section class="py-20 bg-white">
    <div class="container mx-auto px-6 text-center">
      <h2 class="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
      <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        Start using our powerful AI services today and see the difference.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="/get-started" class="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg transition inline-flex items-center justify-center space-x-2">
          <span>Get Started Free</span>
          <i class="fas fa-arrow-right"></i>
        </a>
        <a href="/pricing" class="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-4 rounded-lg transition">
          View Pricing
        </a>
      </div>
    </div>
  </section>
`;
