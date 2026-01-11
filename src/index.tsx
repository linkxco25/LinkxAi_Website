import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'
import { getLayout } from './pages/layout'
import { aboutPage } from './pages/about'
import { servicesPage } from './pages/services'
import { productsPage } from './pages/products'
import { pricingPage } from './pages/pricing'
import { signinPage } from './pages/signin'
import { getstartedPage } from './pages/getstarted'
import { watchdemoPage } from './pages/watchdemo'

const app = new Hono()

// Serve static files
app.use('/static/*', serveStatic({ root: './public' }))

// Routes
app.get('/about', (c) => {
  return c.html(getLayout('About Us', aboutPage, 'about'))
})

app.get('/services', (c) => {
  return c.html(getLayout('Our Services', servicesPage, 'services'))
})

app.get('/products', (c) => {
  return c.html(getLayout('Our Products', productsPage, 'products'))
})

app.get('/pricing', (c) => {
  return c.html(getLayout('Pricing', pricingPage, 'pricing'))
})

app.get('/signin', (c) => {
  return c.html(getLayout('Sign In', signinPage, 'signin'))
})

app.get('/get-started', (c) => {
  return c.html(getLayout('Get Started', getstartedPage, 'getstarted'))
})

app.get('/watch-demo', (c) => {
  return c.html(getLayout('Watch Demo', watchdemoPage, 'watchdemo'))
})
app.get('/', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Linkx-AI - AI-Powered Business Growth Platform</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <link href="/static/styles.css" rel="stylesheet">
    </head>
    <body class="bg-white">
        <!-- Navigation -->
        <nav class="fixed top-0 left-0 right-0 bg-transparent z-50 py-4">
            <div class="container mx-auto px-6 flex items-center justify-between">
                <div class="flex items-center space-x-2">
                    <div class="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center">
                        <i class="fas fa-link text-white text-xl"></i>
                    </div>
                    <span class="text-white text-xl font-bold">Linkx-AI</span>
                </div>
                
                <div class="hidden md:flex items-center space-x-8 text-white">
                    <a href="#home" class="hover:text-purple-300 transition">Home</a>
                    <a href="#about" class="hover:text-purple-300 transition">About</a>
                    <a href="#services" class="hover:text-purple-300 transition">Services</a>
                    <a href="#products" class="hover:text-purple-300 transition">Products</a>
                    <a href="#pricing" class="hover:text-purple-300 transition">Pricing</a>
                </div>
                
                <div class="flex items-center space-x-4">
                    <a href="/signin" class="text-white hover:text-purple-300 transition">Sign In</a>
                    <a href="/get-started" class="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition">
                        Get Started Free
                    </a>
                </div>
            </div>
        </nav>

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
                            <a href="/watch-demo" class="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-lg transition">
                                Watch Demo
                            </a>
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

        <!-- Products Section -->
        <section id="products" class="py-20 bg-gradient-to-b from-white to-purple-50">
            <div class="container mx-auto px-6">
                <div class="text-center mb-4">
                    <span class="inline-flex items-center space-x-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold">
                        <i class="fas fa-sparkles"></i>
                        <span>Our Products</span>
                    </span>
                </div>
                
                <h2 class="text-4xl md:text-5xl font-bold text-center mb-4">
                    Powerful AI Tools to <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Transform</span><br>
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Your Business</span>
                </h2>
                
                <p class="text-center text-gray-600 text-lg mb-16 max-w-3xl mx-auto">
                    Three cutting-edge products working together to automate your marketing, strengthen customer relationships, and unlock data-driven growth.
                </p>
                
                <!-- Linkx Mail -->
                <div class="mb-20 bg-gradient-to-br from-purple-50 to-white rounded-3xl p-8 md:p-12 shadow-lg">
                    <div class="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div class="inline-flex items-center space-x-3 mb-4">
                                <div class="w-14 h-14 bg-purple-600 rounded-2xl flex items-center justify-center">
                                    <i class="fas fa-envelope text-white text-2xl"></i>
                                </div>
                                <span class="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                            </div>
                            
                            <h3 class="text-3xl font-bold mb-4">Linkx Mail</h3>
                            <h4 class="text-xl text-purple-600 font-semibold mb-4">Smart Email Marketing That Converts</h4>
                            
                            <p class="text-gray-600 mb-6">
                                Create personalized email campaigns powered by AI. Our intelligent system writes compelling subject lines, optimizes send times, and increases open rates by 40%.
                            </p>
                            
                            <div class="bg-white rounded-xl p-4 mb-6 inline-block">
                                <div class="flex items-center space-x-3">
                                    <i class="fas fa-clock text-purple-600 text-2xl"></i>
                                    <div>
                                        <div class="text-2xl font-bold">20 hrs</div>
                                        <div class="text-sm text-gray-500">Saved Per Week</div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="grid grid-cols-2 gap-4 mb-6">
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
                                <a href="/products" class="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition flex items-center space-x-2">
                                    <span>Learn More</span>
                                    <i class="fas fa-arrow-right"></i>
                                </a>
                                <a href="/get-started" class="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-6 py-3 rounded-lg transition">
                                    Start Free Trial
                                </a>
                            </div>
                        </div>
                        
                        <div class="relative">
                            <div class="absolute top-4 right-4 bg-white rounded-xl shadow-lg px-4 py-2">
                                <span class="text-sm font-semibold text-purple-600"><i class="fas fa-sparkles"></i> AI-Powered</span>
                            </div>
                            <img src="/static/images/linkx-mail.png" alt="Linkx Mail" class="rounded-2xl shadow-xl">
                        </div>
                    </div>
                </div>
                
                <!-- Linkx Mining -->
                <div class="mb-20 bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 md:p-12 shadow-lg">
                    <div class="grid md:grid-cols-2 gap-12 items-center">
                        <div class="order-2 md:order-1 relative">
                            <div class="absolute top-4 left-4 bg-white rounded-xl shadow-lg px-4 py-2">
                                <span class="text-sm font-semibold text-purple-600"><i class="fas fa-robot"></i> AI Powered</span>
                            </div>
                            <img src="/static/images/linkx-mining.png" alt="Linkx Mining" class="rounded-2xl shadow-xl">
                        </div>
                        
                        <div class="order-1 md:order-2">
                            <div class="inline-flex items-center space-x-3 mb-4">
                                <div class="w-14 h-14 bg-purple-600 rounded-2xl flex items-center justify-center">
                                    <i class="fas fa-chart-bar text-white text-2xl"></i>
                                </div>
                                <span class="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">AI Powered</span>
                            </div>
                            
                            <h3 class="text-3xl font-bold mb-4">Linkx Mining</h3>
                            <h4 class="text-xl text-purple-600 font-semibold mb-4">Operations Management</h4>
                            
                            <p class="text-gray-600 mb-6">
                                Complete visibility and control over mining operations. Monitor performance, optimize workflows, and reduce downtime with real-time insights.
                            </p>
                            
                            <div class="bg-white rounded-xl p-4 mb-6 inline-block">
                                <div class="flex items-center space-x-3">
                                    <i class="fas fa-arrow-trend-up text-purple-600 text-2xl"></i>
                                    <div>
                                        <div class="text-2xl font-bold">30%</div>
                                        <div class="text-sm text-gray-500">Reduction in Downtime</div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="grid grid-cols-2 gap-4 mb-6">
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
                                <a href="/products" class="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition flex items-center space-x-2">
                                    <span>Explore Features</span>
                                    <i class="fas fa-arrow-right"></i>
                                </a>
                                <a href="/get-started" class="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-6 py-3 rounded-lg transition">
                                    Start Free Trial
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Linkx SRM -->
                <div class="bg-gradient-to-br from-pink-50 to-white rounded-3xl p-8 md:p-12 shadow-lg">
                    <div class="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div class="inline-flex items-center space-x-3 mb-4">
                                <div class="w-14 h-14 bg-purple-600 rounded-2xl flex items-center justify-center">
                                    <i class="fas fa-users text-white text-2xl"></i>
                                </div>
                                <span class="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm font-semibold">Enterprise Ready</span>
                            </div>
                            
                            <h3 class="text-3xl font-bold mb-4">Linkx SRM</h3>
                            <h4 class="text-xl text-purple-600 font-semibold mb-4">Supplier Discovery</h4>
                            
                            <p class="text-gray-600 mb-6">
                                Find the perfect supplier in minutes, not days. Our AI-powered platform connects you with verified suppliers and streamlines your procurement process.
                            </p>
                            
                            <div class="bg-white rounded-xl p-4 mb-6 inline-block">
                                <div class="flex items-center space-x-3">
                                    <i class="fas fa-gauge-high text-purple-600 text-2xl"></i>
                                    <div>
                                        <div class="text-2xl font-bold">90%</div>
                                        <div class="text-sm text-gray-500">Faster Supplier Discovery</div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="grid grid-cols-2 gap-4 mb-6">
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
                                <a href="/products" class="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition flex items-center space-x-2">
                                    <span>See How It Works</span>
                                    <i class="fas fa-arrow-right"></i>
                                </a>
                                <a href="/get-started" class="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-6 py-3 rounded-lg transition">
                                    Start Free Trial
                                </a>
                            </div>
                        </div>
                        
                        <div class="relative">
                            <div class="absolute top-4 right-4 bg-white rounded-xl shadow-lg px-4 py-2">
                                <span class="text-sm font-semibold text-purple-600"><i class="fas fa-shield-halved"></i> AI-Powered</span>
                            </div>
                            <img src="/static/images/linkx-srm.png" alt="Linkx SRM" class="rounded-2xl shadow-xl">
                        </div>
                    </div>
                </div>
                
                <div class="text-center mt-12">
                    <a href="/products" class="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-4 rounded-lg transition inline-flex items-center space-x-2">
                        <span class="font-semibold">View All Products & Features</span>
                        <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        </section>

        <!-- Features Section -->
        <section id="services" class="py-20 bg-white">
            <div class="container mx-auto px-6">
                <div class="text-center mb-4">
                    <span class="inline-flex items-center space-x-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold">
                        <span>Our Core Features</span>
                    </span>
                </div>
                
                <h2 class="text-4xl md:text-5xl font-bold text-center mb-4">
                    Everything You Need to <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Scale</span><br>
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Your Business</span>
                </h2>
                
                <p class="text-center text-gray-600 text-lg mb-16 max-w-3xl mx-auto">
                    Powerful AI-driven tools designed to automate your workflow, enhance customer relationships, and unlock growth opportunities.
                </p>
                
                <div class="grid md:grid-cols-2 gap-8 mb-16">
                    <div class="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8 hover:shadow-xl transition">
                        <div class="w-14 h-14 bg-purple-600 rounded-2xl flex items-center justify-center mb-6">
                            <i class="fas fa-envelope text-white text-2xl"></i>
                        </div>
                        <h3 class="text-2xl font-bold mb-4">AI Email Marketing</h3>
                        <p class="text-gray-600 mb-6">
                            Craft personalized emails that convert. Our AI writes, optimizes, and sends at the perfect time for maximum engagement.
                        </p>
                        <a href="#" class="text-purple-600 font-semibold inline-flex items-center space-x-2 hover:underline">
                            <span>Learn more</span>
                            <i class="fas fa-arrow-right"></i>
                        </a>
                    </div>
                    
                    <div class="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 hover:shadow-xl transition">
                        <div class="w-14 h-14 bg-purple-600 rounded-2xl flex items-center justify-center mb-6">
                            <i class="fas fa-users text-white text-2xl"></i>
                        </div>
                        <h3 class="text-2xl font-bold mb-4">Smart Relationship Management</h3>
                        <p class="text-gray-600 mb-6">
                            Go beyond traditional CRM. Our SRM uses AI to predict customer needs and automate relationship nurturing.
                        </p>
                        <a href="#" class="text-purple-600 font-semibold inline-flex items-center space-x-2 hover:underline">
                            <span>Learn more</span>
                            <i class="fas fa-arrow-right"></i>
                        </a>
                    </div>
                    
                    <div class="bg-gradient-to-br from-pink-50 to-white rounded-2xl p-8 hover:shadow-xl transition">
                        <div class="w-14 h-14 bg-purple-600 rounded-2xl flex items-center justify-center mb-6">
                            <i class="fas fa-chart-line text-white text-2xl"></i>
                        </div>
                        <h3 class="text-2xl font-bold mb-4">Data Mining & Insights</h3>
                        <p class="text-gray-600 mb-6">
                            Uncover hidden patterns in your data. Extract actionable insights that drive smarter business decisions.
                        </p>
                        <a href="#" class="text-purple-600 font-semibold inline-flex items-center space-x-2 hover:underline">
                            <span>Learn more</span>
                            <i class="fas fa-arrow-right"></i>
                        </a>
                    </div>
                    
                    <div class="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 hover:shadow-xl transition">
                        <div class="w-14 h-14 bg-purple-600 rounded-2xl flex items-center justify-center mb-6">
                            <i class="fas fa-robot text-white text-2xl"></i>
                        </div>
                        <h3 class="text-2xl font-bold mb-4">Workflow Automation</h3>
                        <p class="text-gray-600 mb-6">
                            Eliminate repetitive tasks. Build powerful automation workflows that save hours every week.
                        </p>
                        <a href="#" class="text-purple-600 font-semibold inline-flex items-center space-x-2 hover:underline">
                            <span>Learn more</span>
                            <i class="fas fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
                
                <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div class="bg-purple-50 rounded-xl p-6 text-center">
                        <i class="fas fa-sparkles text-purple-600 text-2xl mb-3"></i>
                        <div class="font-semibold">AI-Powered</div>
                    </div>
                    <div class="bg-blue-50 rounded-xl p-6 text-center">
                        <i class="fas fa-bolt text-blue-600 text-2xl mb-3"></i>
                        <div class="font-semibold">Lightning Fast</div>
                    </div>
                    <div class="bg-pink-50 rounded-xl p-6 text-center">
                        <i class="fas fa-shield-halved text-pink-600 text-2xl mb-3"></i>
                        <div class="font-semibold">Enterprise Security</div>
                    </div>
                    <div class="bg-green-50 rounded-xl p-6 text-center">
                        <i class="fas fa-chart-bar text-green-600 text-2xl mb-3"></i>
                        <div class="font-semibold">Advanced Analytics</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- About Section -->
        <section id="about" class="py-20 hero-section">
            <div class="container mx-auto px-6">
                <div class="text-center mb-4">
                    <span class="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold">
                        <span>About Linkx-AI</span>
                    </span>
                </div>
                
                <h2 class="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
                    Empowering Businesses<br>
                    to <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">Grow Smarter</span>
                </h2>
                
                <div class="grid md:grid-cols-2 gap-12 items-center">
                    <div class="relative">
                        <div class="absolute -top-8 -left-8 bg-purple-600/80 backdrop-blur-sm rounded-2xl px-6 py-4 z-10">
                            <div class="text-white">
                                <div class="text-sm mb-1">Years of Excellence</div>
                                <div class="text-5xl font-bold">7+</div>
                            </div>
                        </div>
                        <img src="/static/images/about-section-new.png" alt="About Linkx-AI" class="rounded-2xl shadow-2xl">
                        <div class="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4">
                            <div class="flex items-center space-x-3">
                                <div class="flex -space-x-2">
                                    <img src="https://i.pravatar.cc/40?img=1" class="w-10 h-10 rounded-full border-2 border-white" alt="Team member">
                                    <img src="https://i.pravatar.cc/40?img=2" class="w-10 h-10 rounded-full border-2 border-white" alt="Team member">
                                    <img src="https://i.pravatar.cc/40?img=3" class="w-10 h-10 rounded-full border-2 border-white" alt="Team member">
                                </div>
                                <div>
                                    <div class="text-sm font-semibold text-purple-600">+50</div>
                                    <div class="text-xs text-gray-500">Join our growing team of innovators shaping the future of business automation.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="text-white">
                        <p class="text-lg mb-6">
                            At Linkx-AI, we're on a mission to democratize AI-powered business tools. Founded in 2017, we've helped thousands of businesses transform their operations with intelligent automation, predictive analytics, and seamless customer management.
                        </p>
                        
                        <p class="text-lg mb-8">
                            Our platform combines the power of artificial intelligence with intuitive design, making enterprise-grade tools accessible to businesses of all sizes.
                        </p>
                        
                        <div class="space-y-4 mb-8">
                            <div class="flex items-center space-x-3">
                                <i class="fas fa-check-circle text-purple-300 text-xl"></i>
                                <span>Customer-first approach in everything we do</span>
                            </div>
                            <div class="flex items-center space-x-3">
                                <i class="fas fa-check-circle text-purple-300 text-xl"></i>
                                <span>Continuous innovation with cutting-edge AI</span>
                            </div>
                            <div class="flex items-center space-x-3">
                                <i class="fas fa-check-circle text-purple-300 text-xl"></i>
                                <span>Transparent and honest business practices</span>
                            </div>
                            <div class="flex items-center space-x-3">
                                <i class="fas fa-check-circle text-purple-300 text-xl"></i>
                                <span>Data security and privacy as top priority</span>
                            </div>
                        </div>
                        
                        <div class="grid grid-cols-3 gap-6">
                            <div class="text-center">
                                <div class="flex items-center justify-center mb-3">
                                    <i class="fas fa-users text-purple-300 text-3xl"></i>
                                </div>
                                <div class="text-3xl font-bold mb-2">10,000+</div>
                                <div class="text-sm text-gray-300">Happy Customers</div>
                            </div>
                            <div class="text-center">
                                <div class="flex items-center justify-center mb-3">
                                    <i class="fas fa-globe text-purple-300 text-3xl"></i>
                                </div>
                                <div class="text-3xl font-bold mb-2">50+</div>
                                <div class="text-sm text-gray-300">Countries Served</div>
                            </div>
                            <div class="text-center">
                                <div class="flex items-center justify-center mb-3">
                                    <i class="fas fa-trophy text-purple-300 text-3xl"></i>
                                </div>
                                <div class="text-3xl font-bold mb-2">15+</div>
                                <div class="text-sm text-gray-300">Industry Awards</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Industries Section -->
        <section class="py-20 bg-white">
            <div class="container mx-auto px-6">
                <h2 class="text-4xl md:text-5xl font-bold text-center mb-4">
                    Built for Your Industry
                </h2>
                
                <p class="text-center text-gray-600 text-lg mb-16 max-w-2xl mx-auto">
                    Tailored solutions for different business needs
                </p>
                
                <div class="grid md:grid-cols-3 gap-6">
                    <div class="border-2 border-gray-200 rounded-2xl p-8 hover:border-purple-600 hover:shadow-xl transition">
                        <div class="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                            <i class="fas fa-shopping-cart text-purple-600 text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-bold mb-3">E-commerce</h3>
                        <p class="text-gray-600">
                            Manage inventory, orders, and customer relationships seamlessly
                        </p>
                    </div>
                    
                    <div class="border-2 border-gray-200 rounded-2xl p-8 hover:border-purple-600 hover:shadow-xl transition">
                        <div class="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                            <i class="fas fa-building text-purple-600 text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-bold mb-3">Real Estate</h3>
                        <p class="text-gray-600">
                            Track properties, leads, and automate client communications
                        </p>
                    </div>
                    
                    <div class="border-2 border-gray-200 rounded-2xl p-8 hover:border-purple-600 hover:shadow-xl transition">
                        <div class="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                            <i class="fas fa-briefcase text-purple-600 text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-bold mb-3">Professional Services</h3>
                        <p class="text-gray-600">
                            Project management, time tracking, and client billing
                        </p>
                    </div>
                    
                    <div class="border-2 border-gray-200 rounded-2xl p-8 hover:border-purple-600 hover:shadow-xl transition">
                        <div class="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                            <i class="fas fa-heartbeat text-purple-600 text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-bold mb-3">Healthcare</h3>
                        <p class="text-gray-600">
                            Patient management, appointments, and compliance tracking
                        </p>
                    </div>
                    
                    <div class="border-2 border-gray-200 rounded-2xl p-8 hover:border-purple-600 hover:shadow-xl transition">
                        <div class="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                            <i class="fas fa-graduation-cap text-purple-600 text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-bold mb-3">Education</h3>
                        <p class="text-gray-600">
                            Student management, course delivery, and engagement analytics
                        </p>
                    </div>
                    
                    <div class="border-2 border-gray-200 rounded-2xl p-8 hover:border-purple-600 hover:shadow-xl transition">
                        <div class="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                            <i class="fas fa-hotel text-purple-600 text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-bold mb-3">Hospitality</h3>
                        <p class="text-gray-600">
                            Bookings, customer service, and reputation management
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Pricing Section -->
        <section id="pricing" class="py-20 bg-gradient-to-b from-white to-purple-50">
            <div class="container mx-auto px-6">
                <div class="text-center mb-4">
                    <span class="inline-flex items-center space-x-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold">
                        <span>Pricing Plans</span>
                    </span>
                </div>
                
                <h2 class="text-4xl md:text-5xl font-bold text-center mb-4">
                    Simple, Transparent <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Pricing</span>
                </h2>
                
                <p class="text-center text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                    Choose the perfect plan for your business. No hidden fees, cancel anytime.
                </p>
                
                <div class="flex items-center justify-center gap-4 mb-12">
                    <span class="font-semibold">Monthly</span>
                    <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" class="sr-only peer" id="billingToggle">
                        <div class="w-14 h-7 bg-gray-300 peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-purple-600"></div>
                    </label>
                    <span class="font-semibold">Yearly</span>
                    <span class="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-semibold">Save 20%</span>
                </div>
                
                <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <!-- Starter -->
                    <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition">
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
                    <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition">
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
                            <div class="flex items-center space-x-3">
                                <i class="fas fa-check text-purple-600"></i>
                                <span class="text-gray-700">On-premise option</span>
                            </div>
                        </div>
                        
                        <a href="/get-started" class="block w-full border-2 border-purple-600 text-purple-600 hover:bg-purple-50 text-center py-3 rounded-lg transition font-semibold">
                            Contact Sales
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Testimonials Section -->
        <section class="py-20 bg-purple-50">
            <div class="container mx-auto px-6">
                <div class="text-center mb-4">
                    <span class="inline-flex items-center space-x-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold">
                        <span>Testimonials</span>
                    </span>
                </div>
                
                <h2 class="text-4xl md:text-5xl font-bold text-center mb-16">
                    Trusted by Industry<br>
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Leaders Worldwide</span>
                </h2>
                
                <div class="max-w-4xl mx-auto">
                    <div class="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
                        <i class="fas fa-quote-left text-purple-200 text-5xl mb-6"></i>
                        
                        <p class="text-xl md:text-2xl text-gray-800 mb-8 leading-relaxed">
                            "Linkx-AI transformed our entire sales process. We saw a 200% increase in qualified leads within the first quarter. The AI Email tool alone saves our team 20+ hours per week."
                        </p>
                        
                        <div class="flex items-center justify-between">
                            <div class="flex items-center space-x-4">
                                <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full"></div>
                                <div>
                                    <div class="font-bold text-lg">Sarah Mitchell</div>
                                    <div class="text-gray-600">CEO, TechVentures Inc.</div>
                                </div>
                            </div>
                            
                            <div class="flex space-x-1">
                                <i class="fas fa-star text-yellow-400 text-xl"></i>
                                <i class="fas fa-star text-yellow-400 text-xl"></i>
                                <i class="fas fa-star text-yellow-400 text-xl"></i>
                                <i class="fas fa-star text-yellow-400 text-xl"></i>
                                <i class="fas fa-star text-yellow-400 text-xl"></i>
                            </div>
                        </div>
                    </div>
                    
                    <div class="flex justify-center items-center space-x-4 mt-8">
                        <button class="w-12 h-12 rounded-full border-2 border-purple-600 flex items-center justify-center hover:bg-purple-600 hover:text-white transition">
                            <i class="fas fa-chevron-left"></i>
                        </button>
                        
                        <div class="flex space-x-2">
                            <div class="w-3 h-3 rounded-full bg-purple-600"></div>
                            <div class="w-3 h-3 rounded-full bg-gray-300"></div>
                            <div class="w-3 h-3 rounded-full bg-gray-300"></div>
                            <div class="w-3 h-3 rounded-full bg-gray-300"></div>
                            <div class="w-3 h-3 rounded-full bg-gray-300"></div>
                        </div>
                        
                        <button class="w-12 h-12 rounded-full border-2 border-purple-600 flex items-center justify-center hover:bg-purple-600 hover:text-white transition">
                            <i class="fas fa-chevron-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="py-20 hero-section">
            <div class="container mx-auto px-6 text-center">
                <div class="max-w-3xl mx-auto">
                    <div class="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <i class="fas fa-rocket text-white text-3xl"></i>
                    </div>
                    
                    <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">
                        Ready to transform with <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">AI today?</span>
                    </h2>
                    
                    <p class="text-xl text-gray-300 mb-8">
                        Join 50,000+ businesses already using Linkx-AI to automate emails,<br>
                        enhance CRM, and unlock data insights.
                    </p>
                    
                    <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                        <div class="flex items-center space-x-2 text-white">
                            <i class="fas fa-check-circle text-purple-300"></i>
                            <span>No credit card required</span>
                        </div>
                        <div class="flex items-center space-x-2 text-white">
                            <i class="fas fa-check-circle text-purple-300"></i>
                            <span>14-day free trial</span>
                        </div>
                        <div class="flex items-center space-x-2 text-white">
                            <i class="fas fa-check-circle text-purple-300"></i>
                            <span>Cancel anytime</span>
                        </div>
                    </div>
                    
                    <div class="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="/get-started" class="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg transition inline-flex items-center justify-center space-x-2">
                            <span class="font-semibold">Get Started Free</span>
                            <i class="fas fa-arrow-right"></i>
                        </a>
                        <a href="/get-started" class="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-lg transition border-2 border-white/30">
                            Talk to Sales
                        </a>
                    </div>
                    
                    <div class="flex items-center justify-center space-x-4 mt-8">
                        <div class="flex -space-x-2">
                            <div class="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 border-2 border-white flex items-center justify-center text-white font-bold">A</div>
                            <div class="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 border-2 border-white flex items-center justify-center text-white font-bold">C</div>
                            <div class="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-blue-400 border-2 border-white flex items-center justify-center text-white font-bold">E</div>
                            <div class="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-orange-400 border-2 border-white flex items-center justify-center text-white font-bold">D</div>
                            <div class="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-red-400 border-2 border-white flex items-center justify-center text-white font-bold">F</div>
                        </div>
                        <div class="text-white">
                            <div class="font-bold">1,247 people</div>
                            <div class="text-sm text-gray-300">signed up this week</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Newsletter Section -->
        <section class="py-16 bg-gray-900">
            <div class="container mx-auto px-6">
                <div class="max-w-3xl mx-auto text-center">
                    <h3 class="text-2xl font-bold text-white mb-4">Stay in the loop</h3>
                    <p class="text-gray-400 mb-6">
                        Get the latest updates, tips, and exclusive offers delivered to your inbox.
                    </p>
                    
                    <div class="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                        <input type="email" placeholder="Enter your email" class="flex-1 px-6 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-purple-600 focus:outline-none">
                        <button class="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg transition font-semibold">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer class="bg-gray-900 text-gray-400 py-12">
            <div class="container mx-auto px-6">
                <div class="grid md:grid-cols-5 gap-8 mb-12">
                    <div>
                        <div class="flex items-center space-x-2 mb-6">
                            <div class="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center">
                                <i class="fas fa-link text-white"></i>
                            </div>
                            <span class="text-white text-xl font-bold">Linkx-AI</span>
                        </div>
                        <p class="mb-4">
                            Empowering businesses with AI-driven tools for smarter growth, better relationships, and data-driven decisions.
                        </p>
                        <div class="space-y-2">
                            <div class="flex items-center space-x-2">
                                <i class="fas fa-envelope"></i>
                                <a href="mailto:hello@linkx-ai.com">hello@linkx-ai.com</a>
                            </div>
                            <div class="flex items-center space-x-2">
                                <i class="fas fa-phone"></i>
                                <a href="tel:+15555551234567">+1 (555) 123-4567</a>
                            </div>
                            <div class="flex items-center space-x-2">
                                <i class="fas fa-map-marker-alt"></i>
                                <span>San Francisco, CA</span>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <h4 class="text-white font-semibold mb-4">Product</h4>
                        <ul class="space-y-2">
                            <li><a href="#" class="hover:text-purple-400 transition">AI Email</a></li>
                            <li><a href="#" class="hover:text-purple-400 transition">SRM</a></li>
                            <li><a href="#" class="hover:text-purple-400 transition">Data Mining</a></li>
                            <li><a href="#" class="hover:text-purple-400 transition">Automation</a></li>
                            <li><a href="#" class="hover:text-purple-400 transition">Analytics</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 class="text-white font-semibold mb-4">Company</h4>
                        <ul class="space-y-2">
                            <li><a href="#" class="hover:text-purple-400 transition">About Us</a></li>
                            <li><a href="#" class="hover:text-purple-400 transition">Careers</a></li>
                            <li><a href="#" class="hover:text-purple-400 transition">Blog</a></li>
                            <li><a href="#" class="hover:text-purple-400 transition">Press</a></li>
                            <li><a href="#" class="hover:text-purple-400 transition">Partners</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 class="text-white font-semibold mb-4">Resources</h4>
                        <ul class="space-y-2">
                            <li><a href="#" class="hover:text-purple-400 transition">Documentation</a></li>
                            <li><a href="#" class="hover:text-purple-400 transition">Help Center</a></li>
                            <li><a href="#" class="hover:text-purple-400 transition">Community</a></li>
                            <li><a href="#" class="hover:text-purple-400 transition">Tutorials</a></li>
                            <li><a href="#" class="hover:text-purple-400 transition">API Reference</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 class="text-white font-semibold mb-4">Legal</h4>
                        <ul class="space-y-2">
                            <li><a href="#" class="hover:text-purple-400 transition">Privacy Policy</a></li>
                            <li><a href="#" class="hover:text-purple-400 transition">Terms of Service</a></li>
                            <li><a href="#" class="hover:text-purple-400 transition">Cookie Policy</a></li>
                            <li><a href="#" class="hover:text-purple-400 transition">GDPR</a></li>
                        </ul>
                    </div>
                </div>
                
                <div class="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p>© 2026 Linkx-AI. All rights reserved.</p>
                    
                    <div class="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" class="hover:text-purple-400 transition">
                            <i class="fab fa-twitter text-xl"></i>
                        </a>
                        <a href="#" class="hover:text-purple-400 transition">
                            <i class="fab fa-linkedin text-xl"></i>
                        </a>
                        <a href="#" class="hover:text-purple-400 transition">
                            <i class="fab fa-facebook text-xl"></i>
                        </a>
                        <a href="#" class="hover:text-purple-400 transition">
                            <i class="fab fa-instagram text-xl"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>

        <script src="/static/app.js"></script>
    </body>
    </html>
  `)
})

export default app
