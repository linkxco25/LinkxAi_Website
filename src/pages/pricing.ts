export const pricingPage = `
  <section class="py-20 bg-gradient-to-b from-purple-900 to-purple-700">
    <div class="container mx-auto px-6 text-center">
      <span class="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
        <span>Pricing Plans</span>
      </span>
      
      <h1 class="text-5xl md:text-6xl font-bold mb-6 text-white">
        Simple, Transparent <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">Pricing</span>
      </h1>
      
      <p class="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
        Choose the perfect plan for your business. No hidden fees, cancel anytime.
      </p>
      
      <div class="flex items-center justify-center gap-4 mb-12">
        <span class="text-white font-semibold">Monthly</span>
        <label class="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" class="sr-only peer" id="billingToggle">
          <div class="w-14 h-7 bg-gray-300 peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-purple-400"></div>
        </label>
        <span class="text-white font-semibold">Yearly</span>
        <span class="bg-green-400 text-green-900 px-3 py-1 rounded-full text-sm font-semibold">Save 20%</span>
      </div>
    </div>
  </section>
  
  <section class="py-20 bg-white">
    <div class="container mx-auto px-6">
      <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <!-- Starter -->
        <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition border-2 border-gray-200">
          <div class="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
            <i class="fas fa-bolt text-purple-600 text-xl"></i>
          </div>
          <h3 class="text-2xl font-bold mb-2">Starter</h3>
          <p class="text-gray-600 mb-6">Perfect for small teams getting started</p>
          
          <div class="mb-6">
            <div class="text-4xl font-bold">$24<span class="text-lg text-gray-500">/month</span></div>
            <div class="text-sm text-gray-500">Billed annually</div>
          </div>
          
          <div class="space-y-3 mb-8">
            <div class="flex items-center space-x-3">
              <i class="fas fa-check text-purple-600"></i>
              <span class="text-gray-700">Up to 1,000 contacts</span>
            </div>
            <div class="flex items-center space-x-3">
              <i class="fas fa-check text-purple-600"></i>
              <span class="text-gray-700">AI Email (100/month)</span>
            </div>
            <div class="flex items-center space-x-3">
              <i class="fas fa-check text-purple-600"></i>
              <span class="text-gray-700">Basic SRM features</span>
            </div>
            <div class="flex items-center space-x-3">
              <i class="fas fa-check text-purple-600"></i>
              <span class="text-gray-700">Email support</span>
            </div>
            <div class="flex items-center space-x-3">
              <i class="fas fa-check text-purple-600"></i>
              <span class="text-gray-700">5 team members</span>
            </div>
            <div class="flex items-center space-x-3">
              <i class="fas fa-check text-purple-600"></i>
              <span class="text-gray-700">Basic analytics</span>
            </div>
          </div>
          
          <a href="/get-started" class="block w-full bg-purple-600 hover:bg-purple-700 text-white text-center py-3 rounded-lg transition font-semibold">
            Start Free Trial
          </a>
        </div>
        
        <!-- Professional -->
        <div class="bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition relative transform md:scale-105">
          <div class="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold">
            Most Popular
          </div>
          
          <div class="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6">
            <i class="fas fa-star text-white text-xl"></i>
          </div>
          <h3 class="text-2xl font-bold mb-2 text-white">Professional</h3>
          <p class="text-purple-100 mb-6">For growing businesses that need more power</p>
          
          <div class="mb-6">
            <div class="text-4xl font-bold text-white">$66<span class="text-lg text-purple-200">/month</span></div>
            <div class="text-sm text-purple-200">Billed annually</div>
          </div>
          
          <div class="space-y-3 mb-8">
            <div class="flex items-center space-x-3">
              <i class="fas fa-check text-purple-200"></i>
              <span class="text-white">Up to 10,000 contacts</span>
            </div>
            <div class="flex items-center space-x-3">
              <i class="fas fa-check text-purple-200"></i>
              <span class="text-white">AI Email (1,000/month)</span>
            </div>
            <div class="flex items-center space-x-3">
              <i class="fas fa-check text-purple-200"></i>
              <span class="text-white">Advanced SRM features</span>
            </div>
            <div class="flex items-center space-x-3">
              <i class="fas fa-check text-purple-200"></i>
              <span class="text-white">Data Mining & Insights</span>
            </div>
            <div class="flex items-center space-x-3">
              <i class="fas fa-check text-purple-200"></i>
              <span class="text-white">Priority support</span>
            </div>
            <div class="flex items-center space-x-3">
              <i class="fas fa-check text-purple-200"></i>
              <span class="text-white">20 team members</span>
            </div>
            <div class="flex items-center space-x-3">
              <i class="fas fa-check text-purple-200"></i>
              <span class="text-white">Advanced analytics</span>
            </div>
            <div class="flex items-center space-x-3">
              <i class="fas fa-check text-purple-200"></i>
              <span class="text-white">API access</span>
            </div>
          </div>
          
          <a href="/get-started" class="block w-full bg-white text-purple-600 hover:bg-gray-100 text-center py-3 rounded-lg transition font-semibold">
            Get Started
          </a>
        </div>
        
        <!-- Enterprise -->
        <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition border-2 border-gray-200">
          <div class="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
            <i class="fas fa-building text-purple-600 text-xl"></i>
          </div>
          <h3 class="text-2xl font-bold mb-2">Enterprise</h3>
          <p class="text-gray-600 mb-6">Custom solutions for large organizations</p>
          
          <div class="mb-6">
            <div class="text-4xl font-bold">Custom</div>
            <div class="text-sm text-gray-500">&nbsp;</div>
          </div>
          
          <div class="space-y-3 mb-8">
            <div class="flex items-center space-x-3">
              <i class="fas fa-check text-purple-600"></i>
              <span class="text-gray-700">Unlimited contacts</span>
            </div>
            <div class="flex items-center space-x-3">
              <i class="fas fa-check text-purple-600"></i>
              <span class="text-gray-700">Unlimited AI Email</span>
            </div>
            <div class="flex items-center space-x-3">
              <i class="fas fa-check text-purple-600"></i>
              <span class="text-gray-700">Full SRM suite</span>
            </div>
            <div class="flex items-center space-x-3">
              <i class="fas fa-check text-purple-600"></i>
              <span class="text-gray-700">Advanced Data Mining</span>
            </div>
            <div class="flex items-center space-x-3">
              <i class="fas fa-check text-purple-600"></i>
              <span class="text-gray-700">Dedicated account manager</span>
            </div>
            <div class="flex items-center space-x-3">
              <i class="fas fa-check text-purple-600"></i>
              <span class="text-gray-700">Unlimited team members</span>
            </div>
            <div class="flex items-center space-x-3">
              <i class="fas fa-check text-purple-600"></i>
              <span class="text-gray-700">Custom integrations</span>
            </div>
            <div class="flex items-center space-x-3">
              <i class="fas fa-check text-purple-600"></i>
              <span class="text-gray-700">SLA guarantee</span>
            </div>
          </div>
          
          <a href="/get-started" class="block w-full border-2 border-purple-600 text-purple-600 hover:bg-purple-50 text-center py-3 rounded-lg transition font-semibold">
            Contact Sales
          </a>
        </div>
      </div>
    </div>
  </section>
  
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-6 text-center">
      <h2 class="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
      <div class="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
        <div class="bg-white p-6 rounded-xl shadow">
          <h3 class="font-bold mb-2">Can I change plans later?</h3>
          <p class="text-gray-600">Yes, you can upgrade or downgrade your plan at any time.</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow">
          <h3 class="font-bold mb-2">Is there a free trial?</h3>
          <p class="text-gray-600">Yes, all plans come with a 14-day free trial. No credit card required.</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow">
          <h3 class="font-bold mb-2">What payment methods do you accept?</h3>
          <p class="text-gray-600">We accept all major credit cards, PayPal, and wire transfers.</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow">
          <h3 class="font-bold mb-2">Can I cancel anytime?</h3>
          <p class="text-gray-600">Yes, you can cancel your subscription at any time with no penalties.</p>
        </div>
      </div>
    </div>
  </section>
`;
