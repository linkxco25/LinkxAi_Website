export const aboutPage = `
  <section class="hero-section py-20">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <span class="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
          <span>About Linkx-AI</span>
        </span>
        
        <h1 class="text-5xl md:text-6xl font-bold mb-6 text-white">
          Empowering Businesses<br>
          to <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">Grow Smarter</span>
        </h1>
        
        <p class="text-xl text-gray-300 max-w-3xl mx-auto">
          Founded in 2017, we've helped thousands of businesses transform their operations with intelligent automation, predictive analytics, and seamless customer management.
        </p>
      </div>
      
      <div class="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div class="relative">
          <div class="absolute -top-8 -left-8 bg-purple-600/80 backdrop-blur-sm rounded-2xl px-6 py-4 z-10">
            <div class="text-white">
              <div class="text-sm mb-1">Years of Excellence</div>
              <div class="text-5xl font-bold">7+</div>
            </div>
          </div>
          <img src="/static/images/about-team-new.png" alt="About Linkx-AI" class="rounded-2xl shadow-2xl">
          <div class="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4">
            <div class="flex items-center space-x-3">
              <div class="flex -space-x-2">
                <img src="https://i.pravatar.cc/40?img=1" class="w-10 h-10 rounded-full border-2 border-white" alt="Team member">
                <img src="https://i.pravatar.cc/40?img=2" class="w-10 h-10 rounded-full border-2 border-white" alt="Team member">
                <img src="https://i.pravatar.cc/40?img=3" class="w-10 h-10 rounded-full border-2 border-white" alt="Team member">
              </div>
              <div>
                <div class="text-sm font-semibold text-purple-600">+50</div>
                <div class="text-xs text-gray-500">Join our team</div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="text-white">
          <h2 class="text-3xl font-bold mb-6 text-purple-300">Our Mission</h2>
          <p class="text-lg mb-6">
            Linkx AI empowers businesses to achieve operational excellence through intelligent, AI-driven SaaS solutions that automate complex workflows, enhance productivity, and drive data-driven decision-making.
          </p>
          
          <h2 class="text-3xl font-bold mb-6 text-purple-300">Our Vision</h2>
          <p class="text-lg mb-6">
            To become the leading provider of industry-specific AI-powered business automation tools, transforming how companies manage procurement, communications, and operations across diverse sectors.
          </p>
          
          <h2 class="text-3xl font-bold mb-6 text-purple-300">Who We Are</h2>
          <p class="text-lg mb-8">
            Linkx AI is an innovative technology company specializing in AI-powered Software-as-a-Service (SaaS) solutions for enterprise businesses. We develop intelligent applications that solve real-world operational challenges across procurement, email management, and resource operations. Our multi-tenant platforms combine cutting-edge AI technology with industry-specific expertise to deliver measurable ROI and operational efficiency.
          </p>
        </div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center text-white">
          <div class="flex items-center justify-center mb-4">
            <i class="fas fa-users text-purple-300 text-5xl"></i>
          </div>
          <div class="text-4xl font-bold mb-2">10,000+</div>
          <div class="text-gray-300">Happy Customers</div>
        </div>
        
        <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center text-white">
          <div class="flex items-center justify-center mb-4">
            <i class="fas fa-globe text-purple-300 text-5xl"></i>
          </div>
          <div class="text-4xl font-bold mb-2">50+</div>
          <div class="text-gray-300">Countries Served</div>
        </div>
        
        <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center text-white">
          <div class="flex items-center justify-center mb-4">
            <i class="fas fa-trophy text-purple-300 text-5xl"></i>
          </div>
          <div class="text-4xl font-bold mb-2">15+</div>
          <div class="text-gray-300">Industry Awards</div>
        </div>
      </div>
      
      <div class="text-center mb-20">
        <h2 class="text-3xl font-bold text-white mb-8">Our Values</h2>
        <div class="grid md:grid-cols-4 gap-6">
          <div class="bg-white/5 backdrop-blur-sm rounded-xl p-6">
            <i class="fas fa-heart text-pink-400 text-3xl mb-4"></i>
            <h3 class="text-white font-bold mb-2">Customer First</h3>
            <p class="text-gray-300 text-sm">Your success is our success</p>
          </div>
          <div class="bg-white/5 backdrop-blur-sm rounded-xl p-6">
            <i class="fas fa-lightbulb text-yellow-400 text-3xl mb-4"></i>
            <h3 class="text-white font-bold mb-2">Innovation</h3>
            <p class="text-gray-300 text-sm">Always pushing boundaries</p>
          </div>
          <div class="bg-white/5 backdrop-blur-sm rounded-xl p-6">
            <i class="fas fa-shield-alt text-blue-400 text-3xl mb-4"></i>
            <h3 class="text-white font-bold mb-2">Trust</h3>
            <p class="text-gray-300 text-sm">Transparent and reliable</p>
          </div>
          <div class="bg-white/5 backdrop-blur-sm rounded-xl p-6">
            <i class="fas fa-rocket text-purple-400 text-3xl mb-4"></i>
            <h3 class="text-white font-bold mb-2">Excellence</h3>
            <p class="text-gray-300 text-sm">Quality in everything we do</p>
          </div>
        </div>
      </div>
      
      <!-- Our Story Section -->
      <div class="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 mb-20">
        <h2 class="text-3xl font-bold text-white mb-8 text-center">Our Story</h2>
        <div class="grid md:grid-cols-2 gap-8 text-white">
          <div>
            <h3 class="text-xl font-bold mb-4 text-purple-300">The Beginning</h3>
            <p class="text-gray-300 mb-6">
              Linkx-AI was born in 2017 when a team of AI researchers and business professionals came together with a shared vision: to make enterprise-level AI tools accessible to businesses of all sizes. What started as a small startup in San Francisco has grown into a global platform serving thousands of businesses across 50+ countries.
            </p>
            <h3 class="text-xl font-bold mb-4 text-purple-300">Our Growth</h3>
            <p class="text-gray-300">
              Over the past 7 years, we've expanded from a single product to a comprehensive suite of AI-powered business tools. Our platform has processed over 100 million emails, managed relationships with 5 million suppliers, and analyzed terabytes of business data to help companies make smarter decisions.
            </p>
          </div>
          <div>
            <h3 class="text-xl font-bold mb-4 text-purple-300">Our Technology</h3>
            <p class="text-gray-300 mb-6">
              We leverage cutting-edge machine learning algorithms, natural language processing, and predictive analytics to deliver real-time insights and automation. Our AI models are trained on millions of business interactions, constantly learning and improving to provide better results for our customers.
            </p>
            <h3 class="text-xl font-bold mb-4 text-purple-300">Looking Forward</h3>
            <p class="text-gray-300">
              As we continue to grow, our commitment remains unchanged: to empower businesses with AI-driven tools that are powerful yet easy to use, enterprise-grade yet affordable, and constantly evolving to meet the changing needs of modern business.
            </p>
          </div>
        </div>
      </div>
      
      <!-- Leadership Team -->
      <div class="mb-20">
        <h2 class="text-3xl font-bold text-white mb-8 text-center">Leadership Team</h2>
        <div class="grid md:grid-cols-4 gap-8">
          <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div class="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
              <i class="fas fa-user text-white text-4xl"></i>
            </div>
            <h3 class="text-white font-bold mb-1">Michael Chen</h3>
            <p class="text-purple-300 text-sm mb-2">CEO & Founder</p>
            <p class="text-gray-300 text-xs">Former VP at Google AI, Stanford PhD</p>
          </div>
          <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div class="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center">
              <i class="fas fa-user text-white text-4xl"></i>
            </div>
            <h3 class="text-white font-bold mb-1">Sarah Williams</h3>
            <p class="text-purple-300 text-sm mb-2">CTO</p>
            <p class="text-gray-300 text-xs">Ex-Amazon ML Engineer, MIT Graduate</p>
          </div>
          <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div class="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full flex items-center justify-center">
              <i class="fas fa-user text-white text-4xl"></i>
            </div>
            <h3 class="text-white font-bold mb-1">David Park</h3>
            <p class="text-purple-300 text-sm mb-2">VP of Product</p>
            <p class="text-gray-300 text-xs">Former Product Lead at Salesforce</p>
          </div>
          <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div class="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-orange-400 to-red-400 rounded-full flex items-center justify-center">
              <i class="fas fa-user text-white text-4xl"></i>
            </div>
            <h3 class="text-white font-bold mb-1">Lisa Rodriguez</h3>
            <p class="text-purple-300 text-sm mb-2">VP of Customer Success</p>
            <p class="text-gray-300 text-xs">20+ years in Enterprise SaaS</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <section class="py-20 bg-white">
    <div class="container mx-auto px-6 text-center">
      <h2 class="text-4xl font-bold mb-6">Ready to Join Us?</h2>
      <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        Be part of our journey to transform businesses worldwide with AI-powered tools.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="/get-started" class="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg transition inline-flex items-center justify-center space-x-2">
          <span>Get Started Free</span>
          <i class="fas fa-arrow-right"></i>
        </a>
        <a href="/products" class="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-4 rounded-lg transition">
          Explore Our Products
        </a>
      </div>
    </div>
  </section>
`;
