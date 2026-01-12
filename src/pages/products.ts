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
      <!-- AI Mail -->
      <div id="linkx-mail" class="mb-32 scroll-mt-20">
        <div class="bg-gradient-to-br from-purple-50 to-white rounded-3xl p-8 md:p-12 shadow-xl">
          <div class="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <div class="inline-flex items-center space-x-3 mb-4">
                <div class="w-14 h-14 bg-purple-600 rounded-2xl flex items-center justify-center">
                  <i class="fas fa-envelope text-white text-2xl"></i>
                </div>
                <span class="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-semibold">Most Popular</span>
              </div>
              
              <h3 class="text-4xl font-bold mb-4">AI Mail</h3>
              <h4 class="text-2xl text-purple-600 font-semibold mb-4">Smart Email Marketing</h4>
              
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
            </div>
            
            <div class="relative">
              <img src="/static/images/linkx-mail-new.png" alt="AI Mail" class="rounded-2xl shadow-2xl">
            </div>
          </div>
          
          <!-- Detailed Specifications -->
          <div class="bg-white rounded-2xl p-8 mb-8">
            <h5 class="text-2xl font-bold mb-6 text-gray-800">Specifications & Features</h5>
            <div class="grid md:grid-cols-3 gap-8">
              <div>
                <h6 class="font-semibold text-purple-600 mb-4 flex items-center">
                  <i class="fas fa-robot mr-2"></i> AI & Automation
                </h6>
                <ul class="space-y-2 text-gray-600">
                  <li class="flex items-start"><i class="fas fa-check text-purple-600 mr-2 mt-1"></i>AI-powered content generation</li>
                  <li class="flex items-start"><i class="fas fa-check text-purple-600 mr-2 mt-1"></i>Automatic subject line optimization</li>
                  <li class="flex items-start"><i class="fas fa-check text-purple-600 mr-2 mt-1"></i>Smart send time optimization</li>
                  <li class="flex items-start"><i class="fas fa-check text-purple-600 mr-2 mt-1"></i>Automated A/B testing</li>
                  <li class="flex items-start"><i class="fas fa-check text-purple-600 mr-2 mt-1"></i>Intelligent segmentation</li>
                </ul>
              </div>
              <div>
                <h6 class="font-semibold text-purple-600 mb-4 flex items-center">
                  <i class="fas fa-chart-line mr-2"></i> Analytics & Insights
                </h6>
                <ul class="space-y-2 text-gray-600">
                  <li class="flex items-start"><i class="fas fa-check text-purple-600 mr-2 mt-1"></i>Real-time dashboards</li>
                  <li class="flex items-start"><i class="fas fa-check text-purple-600 mr-2 mt-1"></i>Predictive analytics</li>
                  <li class="flex items-start"><i class="fas fa-check text-purple-600 mr-2 mt-1"></i>ROI tracking</li>
                  <li class="flex items-start"><i class="fas fa-check text-purple-600 mr-2 mt-1"></i>Customizable reports</li>
                  <li class="flex items-start"><i class="fas fa-check text-purple-600 mr-2 mt-1"></i>Smart alerts</li>
                </ul>
              </div>
              <div>
                <h6 class="font-semibold text-purple-600 mb-4 flex items-center">
                  <i class="fas fa-plug mr-2"></i> Integrations
                </h6>
                <ul class="space-y-2 text-gray-600">
                  <li class="flex items-start"><i class="fas fa-check text-purple-600 mr-2 mt-1"></i>Major CRMs (Salesforce, HubSpot)</li>
                  <li class="flex items-start"><i class="fas fa-check text-purple-600 mr-2 mt-1"></i>E-commerce (Shopify, WooCommerce)</li>
                  <li class="flex items-start"><i class="fas fa-check text-purple-600 mr-2 mt-1"></i>Zapier & REST API</li>
                  <li class="flex items-start"><i class="fas fa-check text-purple-600 mr-2 mt-1"></i>Google Analytics</li>
                  <li class="flex items-start"><i class="fas fa-check text-purple-600 mr-2 mt-1"></i>Custom webhooks</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div class="flex gap-4 justify-center">
            <a href="/get-started" class="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg transition font-semibold text-lg inline-flex items-center space-x-2">
              <span>Start Free Trial</span>
              <i class="fas fa-arrow-right"></i>
            </a>
            <a href="/pricing" class="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-4 rounded-lg transition font-semibold text-lg">
              View Pricing
            </a>
          </div>
        </div>
      </div>
      
      <!-- Mining Management -->
      <div id="linkx-mining" class="mb-32 scroll-mt-20">
        <div class="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 md:p-12 shadow-xl">
          <div class="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div class="order-2 md:order-1 relative">
              <img src="/static/images/linkx-mining-new.png" alt="Mining Management" class="rounded-2xl shadow-2xl">
            </div>
            
            <div class="order-1 md:order-2">
              <div class="inline-flex items-center space-x-3 mb-4">
                <div class="w-14 h-14 bg-purple-600 rounded-2xl flex items-center justify-center">
                  <i class="fas fa-chart-bar text-white text-2xl"></i>
                </div>
                <span class="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">AI Powered</span>
              </div>
              
              <h3 class="text-4xl font-bold mb-4">Mining Management</h3>
              <h4 class="text-2xl text-purple-600 font-semibold mb-4">Operations Management</h4>
              
              <p class="text-gray-600 mb-6 text-lg">
                Complete visibility and control over your operations. Monitor performance, optimize workflows, and reduce downtime with real-time insights.
              </p>
              
              <div class="bg-white rounded-xl p-6 mb-6 inline-block shadow-lg">
                <div class="flex items-center space-x-4">
                  <i class="fas fa-arrow-trend-up text-purple-600 text-3xl"></i>
                  <div>
                    <div class="text-3xl font-bold">30%</div>
                    <div class="text-sm text-gray-500">Downtime Reduction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Detailed Specifications -->
          <div class="bg-white rounded-2xl p-8 mb-8">
            <h5 class="text-2xl font-bold mb-6 text-gray-800">Specifications & Features</h5>
            <div class="grid md:grid-cols-3 gap-8">
              <div>
                <h6 class="font-semibold text-blue-600 mb-4 flex items-center">
                  <i class="fas fa-gauge-high mr-2"></i> Real-Time Monitoring
                </h6>
                <ul class="space-y-2 text-gray-600">
                  <li class="flex items-start"><i class="fas fa-check text-blue-600 mr-2 mt-1"></i>24/7 monitoring</li>
                  <li class="flex items-start"><i class="fas fa-check text-blue-600 mr-2 mt-1"></i>Customizable alerts</li>
                  <li class="flex items-start"><i class="fas fa-check text-blue-600 mr-2 mt-1"></i>Multi-site dashboards</li>
                  <li class="flex items-start"><i class="fas fa-check text-blue-600 mr-2 mt-1"></i>Performance metrics</li>
                  <li class="flex items-start"><i class="fas fa-check text-blue-600 mr-2 mt-1"></i>Detailed activity logs</li>
                </ul>
              </div>
              <div>
                <h6 class="font-semibold text-blue-600 mb-4 flex items-center">
                  <i class="fas fa-brain mr-2"></i> Predictive AI
                </h6>
                <ul class="space-y-2 text-gray-600">
                  <li class="flex items-start"><i class="fas fa-check text-blue-600 mr-2 mt-1"></i>Predictive maintenance</li>
                  <li class="flex items-start"><i class="fas fa-check text-blue-600 mr-2 mt-1"></i>Anomaly detection</li>
                  <li class="flex items-start"><i class="fas fa-check text-blue-600 mr-2 mt-1"></i>Automatic optimization</li>
                  <li class="flex items-start"><i class="fas fa-check text-blue-600 mr-2 mt-1"></i>Load forecasting</li>
                  <li class="flex items-start"><i class="fas fa-check text-blue-600 mr-2 mt-1"></i>AI recommendations</li>
                </ul>
              </div>
              <div>
                <h6 class="font-semibold text-blue-600 mb-4 flex items-center">
                  <i class="fas fa-shield-halved mr-2"></i> Security & Compliance
                </h6>
                <ul class="space-y-2 text-gray-600">
                  <li class="flex items-start"><i class="fas fa-check text-blue-600 mr-2 mt-1"></i>End-to-end encryption</li>
                  <li class="flex items-start"><i class="fas fa-check text-blue-600 mr-2 mt-1"></i>ISO 27001 compliance</li>
                  <li class="flex items-start"><i class="fas fa-check text-blue-600 mr-2 mt-1"></i>Complete audit trails</li>
                  <li class="flex items-start"><i class="fas fa-check text-blue-600 mr-2 mt-1"></i>Granular access control</li>
                  <li class="flex items-start"><i class="fas fa-check text-blue-600 mr-2 mt-1"></i>Automatic backups</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div class="flex gap-4 justify-center">
            <a href="/get-started" class="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg transition font-semibold text-lg inline-flex items-center space-x-2">
              <span>Start Free Trial</span>
              <i class="fas fa-arrow-right"></i>
            </a>
            <a href="/pricing" class="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-4 rounded-lg transition font-semibold text-lg">
              View Pricing
            </a>
          </div>
        </div>
      </div>
      
      <!-- SRM -->
      <div id="linkx-srm" class="scroll-mt-20">
        <div class="bg-gradient-to-br from-pink-50 to-white rounded-3xl p-8 md:p-12 shadow-xl">
          <div class="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <div class="inline-flex items-center space-x-3 mb-4">
                <div class="w-14 h-14 bg-purple-600 rounded-2xl flex items-center justify-center">
                  <i class="fas fa-users text-white text-2xl"></i>
                </div>
                <span class="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm font-semibold">Enterprise Ready</span>
              </div>
              
              <h3 class="text-4xl font-bold mb-4">SRM</h3>
              <h4 class="text-2xl text-purple-600 font-semibold mb-4">Supplier Discovery</h4>
              
              <p class="text-gray-600 mb-6 text-lg">
                Find the perfect supplier in minutes, not days. Our AI-powered platform connects you with verified suppliers and streamlines your procurement process.
              </p>
              
              <div class="bg-white rounded-xl p-6 mb-6 inline-block shadow-lg">
                <div class="flex items-center space-x-4">
                  <i class="fas fa-gauge-high text-purple-600 text-3xl"></i>
                  <div>
                    <div class="text-3xl font-bold">90%</div>
                    <div class="text-sm text-gray-500">Faster Discovery</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="relative">
              <img src="/static/images/linkx-srm-new.png" alt="SRM" class="rounded-2xl shadow-2xl">
            </div>
          </div>
          
          <!-- Detailed Specifications -->
          <div class="bg-white rounded-2xl p-8 mb-8">
            <h5 class="text-2xl font-bold mb-6 text-gray-800">Specifications & Features</h5>
            <div class="grid md:grid-cols-3 gap-8">
              <div>
                <h6 class="font-semibold text-pink-600 mb-4 flex items-center">
                  <i class="fas fa-search mr-2"></i> Search & Matching
                </h6>
                <ul class="space-y-2 text-gray-600">
                  <li class="flex items-start"><i class="fas fa-check text-pink-600 mr-2 mt-1"></i>Advanced AI matching</li>
                  <li class="flex items-start"><i class="fas fa-check text-pink-600 mr-2 mt-1"></i>100K+ supplier database</li>
                  <li class="flex items-start"><i class="fas fa-check text-pink-600 mr-2 mt-1"></i>Instant verification</li>
                  <li class="flex items-start"><i class="fas fa-check text-pink-600 mr-2 mt-1"></i>Smart filters</li>
                  <li class="flex items-start"><i class="fas fa-check text-pink-600 mr-2 mt-1"></i>Personalized recommendations</li>
                </ul>
              </div>
              <div>
                <h6 class="font-semibold text-pink-600 mb-4 flex items-center">
                  <i class="fas fa-handshake mr-2"></i> Management & Collaboration
                </h6>
                <ul class="space-y-2 text-gray-600">
                  <li class="flex items-start"><i class="fas fa-check text-pink-600 mr-2 mt-1"></i>Automated negotiations</li>
                  <li class="flex items-start"><i class="fas fa-check text-pink-600 mr-2 mt-1"></i>Contract management</li>
                  <li class="flex items-start"><i class="fas fa-check text-pink-600 mr-2 mt-1"></i>Simplified onboarding</li>
                  <li class="flex items-start"><i class="fas fa-check text-pink-600 mr-2 mt-1"></i>Integrated messaging</li>
                  <li class="flex items-start"><i class="fas fa-check text-pink-600 mr-2 mt-1"></i>Shared documents</li>
                </ul>
              </div>
              <div>
                <h6 class="font-semibold text-pink-600 mb-4 flex items-center">
                  <i class="fas fa-chart-pie mr-2"></i> Performance & Risk
                </h6>
                <ul class="space-y-2 text-gray-600">
                  <li class="flex items-start"><i class="fas fa-check text-pink-600 mr-2 mt-1"></i>Continuous evaluation</li>
                  <li class="flex items-start"><i class="fas fa-check text-pink-600 mr-2 mt-1"></i>Risk analysis</li>
                  <li class="flex items-start"><i class="fas fa-check text-pink-600 mr-2 mt-1"></i>Real-time KPIs</li>
                  <li class="flex items-start"><i class="fas fa-check text-pink-600 mr-2 mt-1"></i>Compliance alerts</li>
                  <li class="flex items-start"><i class="fas fa-check text-pink-600 mr-2 mt-1"></i>Audit reports</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div class="flex gap-4 justify-center">
            <a href="/get-started" class="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg transition font-semibold text-lg inline-flex items-center space-x-2">
              <span>Start Free Trial</span>
              <i class="fas fa-arrow-right"></i>
            </a>
            <a href="/pricing" class="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-4 rounded-lg transition font-semibold text-lg">
              View Pricing
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <!-- CTA Section -->
  <section class="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
    <div class="container mx-auto px-6 text-center">
      <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
        Ready to Transform Your Business?
      </h2>
      <p class="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
        Join over 10,000 businesses using our solutions to automate their processes and accelerate their growth.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="/get-started" class="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition inline-flex items-center justify-center">
          Get Started Free
          <i class="fas fa-arrow-right ml-2"></i>
        </a>
        <a href="/watch-demo" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition inline-flex items-center justify-center">
          <i class="fas fa-play mr-2"></i>
          Watch Demo
        </a>
      </div>
    </div>
  </section>
`;
