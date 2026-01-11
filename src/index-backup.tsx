import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'
import { getLayout } from './pages/layout'
import { aboutPage } from './pages/about'
import { servicesPage } from './pages/services'
import { productsPage } from './pages/products'
import { pricingPage } from './pages/pricing'
import { signinPage } from './pages/signin'
import { getstartedPage } from './pages/getstarted'

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

// Home page (from old index.tsx)
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
                    <a href="/" class="flex items-center space-x-2">
                        <div class="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center">
                            <i class="fas fa-link text-white text-xl"></i>
                        </div>
                        <span class="text-white text-xl font-bold">Linkx-AI</span>
                    </a>
                </div>
                
                <div class="hidden md:flex items-center space-x-8 text-white">
                    <a href="/" class="hover:text-purple-300 transition font-semibold text-purple-300">Home</a>
                    <a href="/about" class="hover:text-purple-300 transition">About</a>
                    <a href="/services" class="hover:text-purple-300 transition">Services</a>
                    <a href="/products" class="hover:text-purple-300 transition">Products</a>
                    <a href="/pricing" class="hover:text-purple-300 transition">Pricing</a>
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
                            <button class="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-lg transition">
                                Watch Demo
                            </button>
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

        <!-- Quick Links -->
        <section class="py-12 bg-white">
            <div class="container mx-auto px-6">
                <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
                    <a href="/products" class="bg-purple-50 hover:bg-purple-100 p-6 rounded-xl text-center transition group">
                        <i class="fas fa-envelope text-purple-600 text-3xl mb-3 group-hover:scale-110 transition"></i>
                        <div class="font-semibold">Linkx Mail</div>
                    </a>
                    <a href="/products" class="bg-blue-50 hover:bg-blue-100 p-6 rounded-xl text-center transition group">
                        <i class="fas fa-chart-bar text-blue-600 text-3xl mb-3 group-hover:scale-110 transition"></i>
                        <div class="font-semibold">Linkx Mining</div>
                    </a>
                    <a href="/products" class="bg-pink-50 hover:bg-pink-100 p-6 rounded-xl text-center transition group">
                        <i class="fas fa-users text-pink-600 text-3xl mb-3 group-hover:scale-110 transition"></i>
                        <div class="font-semibold">Linkx SRM</div>
                    </a>
                    <a href="/services" class="bg-green-50 hover:bg-green-100 p-6 rounded-xl text-center transition group">
                        <i class="fas fa-robot text-green-600 text-3xl mb-3 group-hover:scale-110 transition"></i>
                        <div class="font-semibold">Automation</div>
                    </a>
                    <a href="/pricing" class="bg-yellow-50 hover:bg-yellow-100 p-6 rounded-xl text-center transition group">
                        <i class="fas fa-star text-yellow-600 text-3xl mb-3 group-hover:scale-110 transition"></i>
                        <div class="font-semibold">Pricing</div>
                    </a>
                </div>
            </div>
        </section>

        <!-- Features Preview -->
        <section class="py-20 bg-gradient-to-b from-white to-purple-50">
            <div class="container mx-auto px-6 text-center">
                <span class="inline-flex items-center space-x-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                    <span>Why Choose Linkx-AI</span>
                </span>
                
                <h2 class="text-4xl md:text-5xl font-bold mb-6">
                    Everything You Need to <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Scale</span>
                </h2>
                
                <p class="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
                    Powerful AI-driven tools designed to automate your workflow and unlock growth.
                </p>
                
                <div class="grid md:grid-cols-4 gap-6 mb-12">
                    <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition">
                        <i class="fas fa-sparkles text-purple-600 text-4xl mb-4"></i>
                        <h3 class="font-bold text-lg mb-2">AI-Powered</h3>
                        <p class="text-gray-600 text-sm">Advanced AI algorithms</p>
                    </div>
                    <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition">
                        <i class="fas fa-bolt text-blue-600 text-4xl mb-4"></i>
                        <h3 class="font-bold text-lg mb-2">Lightning Fast</h3>
                        <p class="text-gray-600 text-sm">Real-time processing</p>
                    </div>
                    <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition">
                        <i class="fas fa-shield-halved text-pink-600 text-4xl mb-4"></i>
                        <h3 class="font-bold text-lg mb-2">Enterprise Security</h3>
                        <p class="text-gray-600 text-sm">Bank-level encryption</p>
                    </div>
                    <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition">
                        <i class="fas fa-chart-bar text-green-600 text-4xl mb-4"></i>
                        <h3 class="font-bold text-lg mb-2">Advanced Analytics</h3>
                        <p class="text-gray-600 text-sm">Deep insights</p>
                    </div>
                </div>
                
                <a href="/services" class="inline-flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg transition">
                    <span>Explore All Services</span>
                    <i class="fas fa-arrow-right"></i>
                </a>
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
                        Join 10,000+ businesses already using Linkx-AI to automate workflows and unlock growth.
                    </p>
                    
                    <div class="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                        <div class="flex items-center justify-center space-x-2 text-white">
                            <i class="fas fa-check-circle text-purple-300"></i>
                            <span>14-day free trial</span>
                        </div>
                        <div class="flex items-center justify-center space-x-2 text-white">
                            <i class="fas fa-check-circle text-purple-300"></i>
                            <span>No credit card required</span>
                        </div>
                        <div class="flex items-center justify-center space-x-2 text-white">
                            <i class="fas fa-check-circle text-purple-300"></i>
                            <span>Cancel anytime</span>
                        </div>
                    </div>
                    
                    <div class="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="/get-started" class="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg transition inline-flex items-center justify-center space-x-2">
                            <span class="font-semibold">Get Started Free</span>
                            <i class="fas fa-arrow-right"></i>
                        </a>
                        <a href="/pricing" class="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-lg transition border-2 border-white/30">
                            View Pricing
                        </a>
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
                            Empowering businesses with AI-driven tools for smarter growth.
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
                        </div>
                    </div>
                    
                    <div>
                        <h4 class="text-white font-semibold mb-4">Product</h4>
                        <ul class="space-y-2">
                            <li><a href="/products" class="hover:text-purple-400 transition">AI Email</a></li>
                            <li><a href="/products" class="hover:text-purple-400 transition">SRM</a></li>
                            <li><a href="/products" class="hover:text-purple-400 transition">Data Mining</a></li>
                            <li><a href="/services" class="hover:text-purple-400 transition">Automation</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 class="text-white font-semibold mb-4">Company</h4>
                        <ul class="space-y-2">
                            <li><a href="/about" class="hover:text-purple-400 transition">About Us</a></li>
                            <li><a href="#" class="hover:text-purple-400 transition">Careers</a></li>
                            <li><a href="#" class="hover:text-purple-400 transition">Blog</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 class="text-white font-semibold mb-4">Resources</h4>
                        <ul class="space-y-2">
                            <li><a href="#" class="hover:text-purple-400 transition">Documentation</a></li>
                            <li><a href="#" class="hover:text-purple-400 transition">Help Center</a></li>
                            <li><a href="#" class="hover:text-purple-400 transition">Community</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 class="text-white font-semibold mb-4">Legal</h4>
                        <ul class="space-y-2">
                            <li><a href="#" class="hover:text-purple-400 transition">Privacy Policy</a></li>
                            <li><a href="#" class="hover:text-purple-400 transition">Terms of Service</a></li>
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
