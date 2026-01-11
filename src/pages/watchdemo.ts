export const watchdemoPage = `
  <section class="min-h-screen bg-gradient-to-br from-purple-900 via-purple-700 to-purple-600 py-12">
    <div class="container mx-auto px-6">
      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-12">
          <div class="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
            <i class="fas fa-play text-white text-4xl"></i>
          </div>
          <h1 class="text-4xl md:text-5xl font-bold mb-4 text-white">Watch Linkx-AI in Action</h1>
          <p class="text-xl text-gray-200 max-w-3xl mx-auto">
            See how our AI-powered platform helps businesses automate workflows, boost productivity, and drive growth.
          </p>
        </div>
        
        <!-- Video Player -->
        <div class="bg-white rounded-2xl shadow-2xl overflow-hidden mb-12">
          <div class="aspect-video bg-gradient-to-br from-purple-900 to-purple-700 flex items-center justify-center relative">
            <div class="text-center">
              <button class="w-24 h-24 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full flex items-center justify-center transition group mb-4 mx-auto">
                <i class="fas fa-play text-white text-3xl group-hover:scale-110 transition"></i>
              </button>
              <p class="text-white text-lg">Click to play demo video</p>
              <p class="text-gray-300 text-sm mt-2">Duration: 3:45 minutes</p>
            </div>
            
            <!-- Video Placeholder -->
            <div class="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-purple-700/50 flex items-center justify-center opacity-0 hover:opacity-100 transition">
              <div class="text-center text-white">
                <i class="fas fa-video text-6xl mb-4"></i>
                <p class="text-lg font-semibold">Product Demo Video</p>
              </div>
            </div>
          </div>
          
          <div class="p-8">
            <h2 class="text-2xl font-bold mb-4">What You'll Learn</h2>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="flex items-start space-x-3">
                <i class="fas fa-check-circle text-purple-600 text-xl mt-1"></i>
                <div>
                  <h3 class="font-semibold mb-1">AI Email Marketing</h3>
                  <p class="text-gray-600 text-sm">Create personalized campaigns in minutes</p>
                </div>
              </div>
              <div class="flex items-start space-x-3">
                <i class="fas fa-check-circle text-purple-600 text-xl mt-1"></i>
                <div>
                  <h3 class="font-semibold mb-1">Smart CRM</h3>
                  <p class="text-gray-600 text-sm">Manage customer relationships effortlessly</p>
                </div>
              </div>
              <div class="flex items-start space-x-3">
                <i class="fas fa-check-circle text-purple-600 text-xl mt-1"></i>
                <div>
                  <h3 class="font-semibold mb-1">Data Analytics</h3>
                  <p class="text-gray-600 text-sm">Get actionable insights instantly</p>
                </div>
              </div>
              <div class="flex items-start space-x-3">
                <i class="fas fa-check-circle text-purple-600 text-xl mt-1"></i>
                <div>
                  <h3 class="font-semibold mb-1">Automation</h3>
                  <p class="text-gray-600 text-sm">Save 20+ hours per week</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Demo Highlights -->
        <div class="grid md:grid-cols-3 gap-6 mb-12">
          <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <i class="fas fa-clock text-purple-300 text-4xl mb-4"></i>
            <h3 class="text-white font-bold text-xl mb-2">3:45 Minutes</h3>
            <p class="text-gray-300 text-sm">Quick overview of all features</p>
          </div>
          <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <i class="fas fa-users text-purple-300 text-4xl mb-4"></i>
            <h3 class="text-white font-bold text-xl mb-2">10K+ Views</h3>
            <p class="text-gray-300 text-sm">Join thousands who watched</p>
          </div>
          <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <i class="fas fa-star text-purple-300 text-4xl mb-4"></i>
            <h3 class="text-white font-bold text-xl mb-2">4.9/5 Rating</h3>
            <p class="text-gray-300 text-sm">Highly rated by viewers</p>
          </div>
        </div>
        
        <!-- Additional Resources -->
        <div class="bg-white rounded-2xl shadow-2xl p-8">
          <h2 class="text-2xl font-bold mb-6 text-center">More Resources</h2>
          <div class="grid md:grid-cols-3 gap-6">
            <div class="text-center p-6 border-2 border-gray-200 rounded-xl hover:border-purple-600 transition">
              <i class="fas fa-book text-purple-600 text-3xl mb-3"></i>
              <h3 class="font-bold mb-2">Documentation</h3>
              <p class="text-gray-600 text-sm mb-4">Detailed guides and tutorials</p>
              <a href="#" class="text-purple-600 hover:text-purple-700 font-semibold text-sm">
                Read Docs <i class="fas fa-arrow-right"></i>
              </a>
            </div>
            <div class="text-center p-6 border-2 border-gray-200 rounded-xl hover:border-purple-600 transition">
              <i class="fas fa-calendar text-purple-600 text-3xl mb-3"></i>
              <h3 class="font-bold mb-2">Schedule Demo</h3>
              <p class="text-gray-600 text-sm mb-4">Talk to our sales team</p>
              <a href="#" class="text-purple-600 hover:text-purple-700 font-semibold text-sm">
                Book Call <i class="fas fa-arrow-right"></i>
              </a>
            </div>
            <div class="text-center p-6 border-2 border-gray-200 rounded-xl hover:border-purple-600 transition">
              <i class="fas fa-comments text-purple-600 text-3xl mb-3"></i>
              <h3 class="font-bold mb-2">Live Chat</h3>
              <p class="text-gray-600 text-sm mb-4">Get instant answers</p>
              <a href="#" class="text-purple-600 hover:text-purple-700 font-semibold text-sm">
                Start Chat <i class="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
        
        <!-- CTA Section -->
        <div class="mt-12 text-center">
          <h2 class="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p class="text-xl text-gray-200 mb-8">
            Start your free 14-day trial today. No credit card required.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/get-started" class="bg-white hover:bg-gray-100 text-purple-600 px-8 py-4 rounded-lg transition inline-flex items-center justify-center space-x-2 font-semibold">
              <span>Get Started Free</span>
              <i class="fas fa-arrow-right"></i>
            </a>
            <a href="/pricing" class="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-lg transition border-2 border-white/30 font-semibold">
              View Pricing
            </a>
          </div>
        </div>
        
        <!-- Testimonial -->
        <div class="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-8">
          <div class="flex items-center justify-center mb-4">
            <i class="fas fa-quote-left text-purple-300 text-3xl"></i>
          </div>
          <p class="text-white text-lg text-center mb-6 italic">
            "The demo video helped me understand exactly how Linkx-AI could transform our business. We signed up immediately after watching!"
          </p>
          <div class="flex items-center justify-center space-x-4">
            <img src="https://i.pravatar.cc/60?img=5" class="w-12 h-12 rounded-full border-2 border-white" alt="User">
            <div class="text-white">
              <div class="font-bold">Michael Chen</div>
              <div class="text-sm text-gray-300">CTO, StartupHub</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
`;
